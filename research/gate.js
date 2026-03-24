/**
 * Lightweight client-side passcode gating for Retail Intelligence Pulse.
 * Same mechanism as AI Brief — shared passcode, sessionStorage token.
 *
 * NOT real security. Content is in the HTML source. This prevents casual
 * access, not determined bypassing. See ai-brief/README.md for details.
 *
 * Default passcode: "retailpulse"
 * To change: echo -n "NEW_PASSCODE" | shasum -a 256
 */

(function () {
  var EXPECTED_HASH = '8f050e8929b931b08998567c5864fe5b51971876c6f58b580b46ff2cdd1c624f';
  var SESSION_KEY = 'retail_pulse_auth';
  var SESSION_VALUE = 'verified_' + EXPECTED_HASH.substring(0, 16);

  async function sha256(message) {
    var msgBuffer = new TextEncoder().encode(message);
    var hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    var hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
  }

  function isAuthed() {
    return sessionStorage.getItem(SESSION_KEY) === SESSION_VALUE;
  }

  function setAuthed() {
    sessionStorage.setItem(SESSION_KEY, SESSION_VALUE);
  }

  function showGate() {
    var overlay = document.createElement('div');
    overlay.id = 'gate-overlay';
    overlay.innerHTML = '\
      <div class="gate-box">\
        <h2>Retail Intelligence Pulse</h2>\
        <p class="gate-sub">Enter passcode to continue</p>\
        <input type="password" id="gate-input" placeholder="Passcode" autocomplete="off" />\
        <button id="gate-submit">Enter</button>\
        <p id="gate-error" class="gate-error"></p>\
        <p class="gate-note">Lightweight access gate &mdash; not strong security.</p>\
      </div>';
    document.body.prepend(overlay);

    var input = document.getElementById('gate-input');
    var btn = document.getElementById('gate-submit');
    var error = document.getElementById('gate-error');

    async function tryAuth() {
      var val = input.value.trim();
      if (!val) return;
      var hash = await sha256(val);
      if (hash === EXPECTED_HASH) {
        setAuthed();
        overlay.remove();
        document.getElementById('brief-content').style.display = '';
      } else {
        error.textContent = 'Incorrect passcode';
        input.value = '';
        input.focus();
      }
    }

    btn.addEventListener('click', tryAuth);
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') tryAuth(); });
    setTimeout(function () { input.focus(); }, 100);
  }

  function init() {
    var content = document.getElementById('brief-content');
    if (!content) return;
    if (isAuthed()) {
      content.style.display = '';
    } else {
      content.style.display = 'none';
      showGate();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
