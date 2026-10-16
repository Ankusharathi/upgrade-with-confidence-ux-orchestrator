const pages = [...document.querySelectorAll('.workspace-page')];
const pageLinks = [...document.querySelectorAll('.page-link')];
const pageTitle = document.querySelector('#page-title');

function showWorkspacePage(name) {
  pages.forEach((page) => page.classList.toggle('is-visible', page.id === `page-${name}`));
  pageLinks.forEach((link) => link.classList.toggle('is-active', link.dataset.page === name));
  const active = document.querySelector(`#page-${name}`);
  pageTitle.textContent = active?.dataset.title || 'Design workspace';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (name === 'prototype') setTimeout(() => document.querySelector('#prototype-content')?.focus(), 250);
}

pageLinks.forEach((link) => link.addEventListener('click', () => showWorkspacePage(link.dataset.page)));
document.querySelector('#jump-to-prototype').addEventListener('click', () => showWorkspacePage('prototype'));

const scenario = {
  line: 'Mobile line ending 2048',
  currentDevice: 'Nova 11 · 128 GB',
  plan: 65,
  fee: 35,
  shipping: 0,
  device: 'nova-x',
  payment: 'monthly',
  tradeIn: 'yes',
  tradeDevice: 'Nova 11',
  condition: '',
  deviceConfirmed: false,
  tradeInConfirmed: false,
  tradeError: false,
  simulateUnknown: false,
  orderStatus: null,
  step: 0,
  submitting: false,
};

const devices = {
  'nova-x': { name: 'Nova X', storage: '128 GB', color: 'Midnight', full: 899.99, monthly: 25, tax: 72, className: '' },
  'nova-pro': { name: 'Nova X Pro', storage: '256 GB', color: 'Sand', full: 1099.99, monthly: 30.56, tax: 88, className: 'sand' },
};

const stepLabels = ['Eligible line', 'Choose device', 'Trade-in', 'Upgrade Impact', 'Final review', 'Confirmation'];
const content = document.querySelector('#prototype-content');
const impact = document.querySelector('#impact-panel');
const progress = document.querySelector('#product-progress');
const mobileBar = document.querySelector('#mobile-impact-bar');
const live = document.querySelector('#prototype-live');
const drawer = document.querySelector('#impact-drawer');
const drawerContent = document.querySelector('#drawer-content');

const money = (value) => `$${value.toFixed(2)}`;
function figures() {
  const device = devices[scenario.device];
  const deviceMonthly = scenario.payment === 'monthly' ? device.monthly : 0;
  const hasConfirmedTradeIn = scenario.tradeInConfirmed && scenario.tradeIn === 'yes' && scenario.condition;
  const tradeCredit = hasConfirmedTradeIn ? (scenario.condition === 'good' ? 10 : 5) : 0;
  return {
    device,
    dueToday: device.tax + (scenario.payment === 'full' ? device.full : 0),
    nextBill: scenario.fee + deviceMonthly,
    ongoing: deviceMonthly - tradeCredit,
    tradeCredit,
    tradeValue: hasConfirmedTradeIn ? (scenario.condition === 'good' ? 360 : 180) : 0,
  };
}

function impactMarkup(includeId = false) {
  if (!scenario.deviceConfirmed) {
    return `
      <div class="impact-header">
        <div><h2 ${includeId ? 'id="drawer-title"' : ''}>Upgrade Impact</h2><small>Builds from confirmed choices</small></div>
        <span class="status one-time">Not calculated</span>
      </div>
      <div class="impact-empty"><strong>Choose a device and payment option</strong><p>Due-today, next-bill and monthly effects will appear after you confirm those choices.</p></div>
      <div class="impact-detail"><strong>No financial choice has been confirmed yet.</strong> Eligibility alone does not set a device price or trade-in value.</div>
    `;
  }
  const f = figures();
  return `
    <div class="impact-header">
      <div><h2 ${includeId ? 'id="drawer-title"' : ''}>Upgrade Impact</h2><small>Updates with your choices</small></div>
      <span class="status confirmed">✓ Current</span>
    </div>
    <div class="impact-row"><span>Due today <small>Estimated</small></span><strong>${money(f.dueToday)}</strong></div>
    <div class="impact-row"><span>Estimated next bill <small>$35 one-time fee included</small></span><strong>+${money(f.nextBill)}</strong></div>
    <div class="impact-row key"><span>Ongoing after credits <small>${f.tradeCredit ? 'Conditional credit included' : 'No trade-in credit'}</small></span><strong>+${money(f.ongoing)}/mo</strong></div>
    <div class="impact-row"><span>Trade-in value <small>${f.tradeValue ? 'Estimated' : 'Not selected'}</small></span><strong>${f.tradeValue ? money(f.tradeValue) : '—'}</strong></div>
    <div class="impact-detail"><strong>No plan change.</strong> Your synthetic plan remains ${money(scenario.plan)}/month. ${f.tradeCredit ? `${money(f.tradeCredit)} monthly credits begin after eligibility and inspection and may take 1–2 synthetic billing cycles.` : 'No promotional trade-in credits are included.'}</div>
  `;
}

function renderImpact() {
  const f = figures();
  impact.innerHTML = impactMarkup();
  drawerContent.innerHTML = impactMarkup(true);
  mobileBar.innerHTML = scenario.deviceConfirmed
    ? `<span>Ongoing impact <strong>+${money(f.ongoing)}/mo</strong></span><button type="button" id="open-impact">Review impact</button>`
    : '<span>Upgrade Impact <strong>Not calculated</strong></span><button type="button" id="open-impact">Review impact</button>';
  document.querySelector('#open-impact')?.addEventListener('click', openDrawer);
}

function renderProgress() {
  progress.innerHTML = stepLabels.map((label, index) => {
    const state = index < scenario.step ? 'is-done' : index === scenario.step ? 'is-active' : '';
    const indicator = index < scenario.step ? '✓' : index + 1;
    return `<div class="progress-step ${state}" ${index === scenario.step ? 'aria-current="step"' : ''}><span class="progress-indicator">${indicator}</span><span>${label}</span></div>`;
  }).join('');
}

function heading(step, title, copy) {
  return `<header class="screen-heading"><span class="step-label">Step ${step} of 6</span><h2 tabindex="-1">${title}</h2><p>${copy}</p></header>`;
}

function actions({ back = true, next = 'Continue', nextId = 'continue-button', extra = '' } = {}) {
  return `<div class="screen-actions">${back ? '<button class="button button-secondary" data-back>Back</button>' : '<span></span>'}<div class="actions-right">${extra}<button class="button button-primary" id="${nextId}">${next}</button></div></div>`;
}

function screenEligible() {
  return `${heading(1, 'Ready to upgrade?', 'Confirm the line below before choosing a new device.')}
    <section class="content-card line-card" aria-label="Eligible mobile line">
      <span class="line-avatar">A</span><div><strong>${scenario.line}</strong><p>Current device: ${scenario.currentDevice}<br />Synthetic plan · ${money(scenario.plan)}/month</p></div><span class="eligible-pill">Eligible now</span>
    </section>
    <p class="helper">This is invented account information created only for the academic prototype.</p>
    ${actions({ back: false, next: 'Choose a device' })}`;
}

function screenDevice() {
  const selected = devices[scenario.device];
  return `${heading(2, 'Choose your next device', 'Compare full price and monthly payment before selecting.')}
    <section class="content-card"><h3 class="form-heading">Device</h3><div class="choice-list">
      ${Object.entries(devices).map(([id, device]) => `<label class="option-card"><input type="radio" name="device" value="${id}" ${scenario.device === id ? 'checked' : ''}><span class="device-thumb ${device.className}">${device.name.replace('Nova ', '')}</span><span><span class="option-title">${device.name}</span><span class="option-copy">${device.storage} · ${device.color}<br />Full price ${money(device.full)}</span></span><span class="option-price"><strong>${money(device.monthly)}</strong><small>/month · 36 mo.</small></span></label>`).join('')}
    </div></section>
    <section class="content-card"><h3 class="form-heading">How would you like to pay?</h3><div class="choice-list">
      <label class="option-card"><input type="radio" name="payment" value="monthly" ${scenario.payment === 'monthly' ? 'checked' : ''}><span><span class="option-title">36 monthly payments</span><span class="option-copy">0% interest in this synthetic scenario</span></span><span class="option-price"><strong>${money(selected.monthly)}</strong><small>/month</small></span></label>
      <label class="option-card"><input type="radio" name="payment" value="full" ${scenario.payment === 'full' ? 'checked' : ''}><span><span class="option-title">Pay full price today</span><span class="option-copy">Device charge moves to due today</span></span><span class="option-price"><strong>${money(selected.full)}</strong><small>one time</small></span></label>
    </div></section>
    ${actions()}`;
}

function screenTradeIn() {
  const errorSummary = scenario.tradeError ? '<div class="validation-error" id="trade-error-summary" role="alert" tabindex="-1"><strong>Choose the device condition</strong><span>Select a condition before requesting the trade-in estimate. Your other choices are saved.</span></div>' : '';
  const conditionAttributes = scenario.tradeError ? 'aria-invalid="true" aria-describedby="trade-error-summary"' : '';
  return `${heading(3, 'Add a trade-in?', 'Trade-in is optional. Any value shown here remains estimated until inspection.')}
    ${errorSummary}
    <section class="content-card"><h3 class="form-heading">Would you like to trade in a device?</h3><div class="choice-list">
      <label class="option-card"><input type="radio" name="tradeIn" value="yes" ${scenario.tradeIn === 'yes' ? 'checked' : ''}><span><span class="option-title">Yes, estimate my trade-in</span><span class="option-copy">Potential promotional value delivered as monthly credits</span></span></label>
      <label class="option-card"><input type="radio" name="tradeIn" value="no" ${scenario.tradeIn === 'no' ? 'checked' : ''}><span><span class="option-title">No trade-in</span><span class="option-copy">Continue without promotional trade-in credits</span></span></label>
    </div></section>
    ${scenario.tradeIn === 'yes' ? `<section class="content-card" id="trade-fields"><h3 class="form-heading">Tell us about the device</h3><div class="field-grid"><div class="field"><label for="trade-device">Device</label><select id="trade-device"><option>Nova 11</option><option>Nova 10</option></select></div><div class="field"><label for="trade-condition">Condition</label><select id="trade-condition" ${conditionAttributes}><option value="">Select condition</option><option value="good" ${scenario.condition === 'good' ? 'selected' : ''}>Good — turns on and works</option><option value="damaged" ${scenario.condition === 'damaged' ? 'selected' : ''}>Damaged — screen or body</option></select></div></div>${scenario.condition ? `<div class="estimate-result"><header><div><span class="status estimated">≈ Estimated</span><p>Promotional trade-in value</p></div><strong>${scenario.condition === 'good' ? '$360.00' : '$180.00'}</strong></header><p>Delivered as ${scenario.condition === 'good' ? '$10.00' : '$5.00'} monthly credits for 36 months after eligibility and inspection. Credits may take 1–2 synthetic billing cycles to begin.</p></div>` : '<p class="helper">Select a condition to calculate the synthetic estimate.</p>'}</section>` : ''}
    ${actions({ next: 'Review Upgrade Impact' })}`;
}

function screenImpact() {
  const f = figures();
  return `${heading(4, 'Review your Upgrade Impact', 'See what changes today, on your next bill, and each month after credits begin.')}
    <section class="review-section"><header><div><h3>Today</h3><p>Synthetic device tax${scenario.payment === 'full' ? ' and full device price' : ''}</p></div><span class="status estimated">≈ Estimated</span></header><div class="review-values"><div class="review-value"><span>Due today</span><strong>${money(f.dueToday)}</strong></div><div class="review-value"><span>Shipping</span><strong>${money(scenario.shipping)}</strong></div><div class="review-value"><span>Plan change</span><strong>None</strong></div></div></section>
    <section class="review-section"><header><div><h3>Next bill</h3><p>Before recurring promotional credits begin</p></div><span class="status estimated">≈ Estimated</span></header><div class="review-values"><div class="review-value"><span>One-time fee</span><strong>${money(scenario.fee)}</strong></div><div class="review-value"><span>Device payment</span><strong>${scenario.payment === 'monthly' ? money(f.device.monthly) : '$0.00'}</strong></div><div class="review-value"><span>Total increase</span><strong>+${money(f.nextBill)}</strong></div></div></section>
    <section class="review-section"><header><div><h3>Ongoing monthly impact</h3><p>After conditional trade-in credits begin</p></div><button class="text-button" data-edit="trade">Edit trade-in</button></header><div class="review-values"><div class="review-value"><span>Device payment</span><strong>${scenario.payment === 'monthly' ? `+${money(f.device.monthly)}` : '$0.00'}</strong></div><div class="review-value"><span>Trade-in credit</span><strong>${f.tradeCredit ? `−${money(f.tradeCredit)}` : '$0.00'}</strong></div><div class="review-value"><span>Net change</span><strong>+${money(f.ongoing)}/mo</strong></div></div></section>
    ${actions({ next: 'Continue to final review', extra: '<button class="text-button" data-edit="device">Edit device</button>' })}`;
}

function screenFinal() {
  const f = figures();
  return `${heading(5, 'Review before placing your order', 'Nothing is submitted until you choose “Place upgrade order.” Every section can still be changed.')}
    <section class="review-section"><header><div><h3>Device and payment</h3><p>${f.device.name} · ${f.device.storage} · ${f.device.color}<br />${scenario.payment === 'monthly' ? `${money(f.device.monthly)}/month for 36 months` : `${money(f.device.full)} paid today`}</p></div><button class="text-button" data-edit="device">Edit</button></header></section>
    <section class="review-section"><header><div><h3>Trade-in and promotion</h3><p>${scenario.tradeIn === 'yes' ? `${scenario.tradeDevice} · Estimated ${money(f.tradeValue)} promotional value<br />${money(f.tradeCredit)} monthly credits for 36 months after inspection` : 'No trade-in or promotional credit selected'}</p></div><button class="text-button" data-edit="trade">Edit</button></header></section>
    <section class="review-section"><header><div><h3>Delivery</h3><p>Standard shipping · ${money(scenario.shipping)}<br />Fictional address ending in 17</p></div><button class="text-button">Edit</button></header></section>
    <section class="review-section"><header><div><h3>Complete financial impact</h3><p>Due today ${money(f.dueToday)} · Next bill +${money(f.nextBill)} · Ongoing +${money(f.ongoing)}/month after credits</p></div><button class="text-button" data-edit="impact">Review</button></header></section>
    <div class="commit-note"><strong>!</strong><span>This is a synthetic demonstration. The button below simulates an order but does not purchase anything or transmit information.</span></div>
    <label class="test-control"><input type="checkbox" id="simulate-unknown" ${scenario.simulateUnknown ? 'checked' : ''}><span><strong>Validation control</strong> Simulate an unknown order result to test safe recovery.</span></label>
    ${actions({ next: scenario.submitting ? 'Placing order…' : 'Place upgrade order', nextId: 'place-order' })}`;
}

function screenUnknownStatus() {
  const checking = scenario.orderStatus === 'checking';
  const safeRetry = scenario.orderStatus === 'not-found';
  return `${heading(5, safeRetry ? 'No order was found' : 'We could not confirm the order', safeRetry ? 'The synthetic status check found no order. One retry is now safe.' : 'Do not try again yet. We need to check whether the synthetic order already exists.')}
    <section class="review-section status-recovery" aria-live="polite">
      <header><div><h3>${safeRetry ? 'Safe to retry once' : checking ? 'Checking order status…' : 'Order status unknown'}</h3><p>${safeRetry ? 'No matching synthetic order exists for this attempt.' : 'Your submitted configuration is preserved while the status is verified.'}</p></div><span class="status ${safeRetry ? 'confirmed' : 'delayed'}">${safeRetry ? '✓ Checked' : '◷ Pending'}</span></header>
    </section>
    <div class="commit-note"><strong>!</strong><span>${safeRetry ? 'Retry is enabled only because the status check confirmed that no order exists.' : 'Retry remains unavailable while order status is unknown, preventing a duplicate submission.'}</span></div>
    <div class="screen-actions"><button class="button button-secondary" id="return-review">Return to final review</button><div class="actions-right">${safeRetry ? '<button class="button button-primary" id="retry-order">Retry order once</button>' : `<button class="button button-primary" id="check-status" ${checking ? 'disabled' : ''}>${checking ? 'Checking…' : 'Check order status'}</button>`}</div></div>`;
}

function screenConfirmation() {
  const f = figures();
  return `<div class="confirmation-mark" aria-hidden="true">✓</div>${heading(6, 'Your synthetic upgrade is confirmed', 'No real order was placed. Keep this summary for the academic demonstration.')}
    <span class="order-id">SYN-UPG-2048-01</span>
    <section class="review-section"><header><div><h3>Confirmed impact snapshot</h3><p>Due today ${money(f.dueToday)} · Estimated next bill +${money(f.nextBill)} · Ongoing +${money(f.ongoing)}/month after credits</p></div><span class="status confirmed">✓ Confirmed</span></header></section>
    <div class="next-steps"><div class="next-step"><span>1</span><div><strong>Watch for the fictional device shipment</strong><small>Standard shipping was selected at no charge.</small></div></div>${scenario.tradeIn === 'yes' ? '<div class="next-step"><span>2</span><div><strong>Return the trade-in after the new device arrives</strong><small>The estimated value remains conditional until synthetic inspection.</small></div></div><div class="next-step"><span>3</span><div><strong>Look for credits after inspection</strong><small>Credits may take 1–2 synthetic billing cycles; catch-up credits would appear after eligibility is confirmed.</small></div></div>' : ''}</div>
    <div class="screen-actions"><button class="button button-secondary" id="restart">Restart demonstration</button></div>`;
}

const screens = [screenEligible, screenDevice, screenTradeIn, screenImpact, screenFinal, screenConfirmation];

function announce(message) { live.textContent = ''; setTimeout(() => { live.textContent = message; }, 20); }
function navigate(step, message) {
  scenario.step = Math.max(0, Math.min(5, step));
  render();
  content.querySelector('h2')?.focus();
  if (message) announce(message);
}

function bindScreenEvents() {
  content.querySelector('[data-back]')?.addEventListener('click', () => navigate(scenario.step - 1));
  content.querySelector('#continue-button')?.addEventListener('click', () => {
    if (scenario.step === 1) scenario.deviceConfirmed = true;
    if (scenario.step === 2) {
      if (scenario.tradeIn === 'yes' && !scenario.condition) {
        scenario.tradeError = true;
        render();
        content.querySelector('#trade-error-summary')?.focus();
        announce('Choose the device condition. Your other choices are saved.');
        return;
      }
      scenario.tradeInConfirmed = true;
      scenario.tradeError = false;
    }
    navigate(scenario.step + 1);
  });
  content.querySelectorAll('[data-edit]').forEach((button) => button.addEventListener('click', () => {
    const target = button.dataset.edit === 'trade' ? 2 : button.dataset.edit === 'impact' ? 3 : 1;
    navigate(target, `Returned to ${stepLabels[target]} to make changes.`);
  }));
  content.querySelectorAll('input[name="device"]').forEach((input) => input.addEventListener('change', () => {
    scenario.device = input.value; render(); announce(`${devices[input.value].name} selected. Upgrade Impact updated.`);
  }));
  content.querySelectorAll('input[name="payment"]').forEach((input) => input.addEventListener('change', () => {
    scenario.payment = input.value; render(); announce(`Payment option updated. Upgrade Impact updated.`);
  }));
  content.querySelectorAll('input[name="tradeIn"]').forEach((input) => input.addEventListener('change', () => {
    scenario.tradeIn = input.value;
    scenario.tradeError = false;
    if (input.value === 'no') scenario.condition = '';
    render();
    announce(`${input.value === 'yes' ? 'Trade-in added' : 'Trade-in removed'}. Continue to confirm this choice.`);
  }));
  content.querySelector('#trade-condition')?.addEventListener('change', (event) => {
    scenario.condition = event.target.value;
    scenario.tradeError = false;
    render();
    content.querySelector('#trade-condition')?.focus();
    announce(scenario.condition ? 'Trade-in condition updated. Estimate recalculated.' : 'Choose a condition to calculate the estimate.');
  });
  content.querySelector('#simulate-unknown')?.addEventListener('change', (event) => {
    scenario.simulateUnknown = event.target.checked;
  });
  content.querySelector('#place-order')?.addEventListener('click', submitSyntheticOrder);
  if (scenario.submitting) content.querySelector('#place-order')?.setAttribute('disabled', '');
  content.querySelector('#check-status')?.addEventListener('click', () => {
    scenario.orderStatus = 'checking';
    render();
    announce('Checking whether the synthetic order exists.');
    setTimeout(() => {
      scenario.orderStatus = 'not-found';
      render();
      content.querySelector('h2')?.focus();
      announce('No synthetic order was found. One retry is now safe.');
    }, 700);
  });
  content.querySelector('#return-review')?.addEventListener('click', () => {
    scenario.orderStatus = null;
    navigate(4, 'Returned to final review.');
  });
  content.querySelector('#retry-order')?.addEventListener('click', () => {
    scenario.simulateUnknown = false;
    scenario.orderStatus = null;
    scenario.step = 4;
    submitSyntheticOrder();
  });
  content.querySelector('#restart')?.addEventListener('click', resetDemonstration);
}

function submitSyntheticOrder() {
  if (scenario.submitting) return;
  scenario.submitting = true;
  render();
  announce('Submitting the synthetic order.');
  setTimeout(() => {
    scenario.submitting = false;
    if (scenario.simulateUnknown) {
      scenario.orderStatus = 'unknown';
      render();
      content.querySelector('h2')?.focus();
      announce('Order status is unknown. Check status before retrying.');
      return;
    }
    navigate(5, 'Synthetic order confirmed.');
  }, 900);
}

function resetDemonstration() {
  Object.assign(scenario, {
    device: 'nova-x', payment: 'monthly', tradeIn: 'yes', tradeDevice: 'Nova 11', condition: '',
    deviceConfirmed: false, tradeInConfirmed: false, tradeError: false,
    simulateUnknown: false, orderStatus: null, step: 0, submitting: false,
  });
  navigate(0, 'Demonstration restarted.');
}

function render() {
  renderProgress();
  renderImpact();
  content.innerHTML = scenario.orderStatus ? screenUnknownStatus() : screens[scenario.step]();
  bindScreenEvents();
}

function openDrawer() {
  drawer.classList.add('is-open');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  drawer.querySelector('.drawer-close')?.focus();
}
function closeDrawer() {
  drawer.classList.remove('is-open');
  drawer.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  document.querySelector('#open-impact')?.focus();
}
document.querySelectorAll('[data-close-drawer]').forEach((button) => button.addEventListener('click', closeDrawer));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && drawer.classList.contains('is-open')) closeDrawer(); });

document.querySelectorAll('.viewport-button').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('.viewport-button').forEach((item) => item.classList.toggle('is-active', item === button));
  document.querySelector('#prototype-stage').classList.toggle('is-mobile', button.dataset.viewport === 'mobile');
}));

const stateMessages = {
  calculating: ['Updating your Upgrade Impact', 'Your previous confirmed values remain visible while we recalculate this synthetic estimate.'],
  unavailable: ['We couldn’t estimate this trade-in', 'Check the device details and try again, or continue without a trade-in. Your other choices are saved.'],
  restored: ['Your upgrade session was restored', 'Your device and trade-in choices are saved. Review refreshed amounts before continuing.'],
  unknown: ['We’re checking whether your order was placed', 'Do not try again yet. We’ll verify the fictional order status before another submission is available.'],
};
document.querySelectorAll('.state-demo').forEach((button) => button.addEventListener('click', () => {
  const [title, copy] = stateMessages[button.dataset.state];
  document.querySelector('#state-preview').innerHTML = `<strong>${title}</strong>${copy}`;
}));

render();
