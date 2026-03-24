/**
 * Lightweight client-side passcode gating for AI Brief.
 *
 * How it works:
 * - Checks sessionStorage for a valid token.
 * - If not found, shows a passcode prompt overlay.
 * - Passcode is hashed (SHA-256) and compared to the stored hash.
 * - On match, sets sessionStorage so subsequent pages in the same tab session skip the prompt.
 *
 * IMPORTANT: This is NOT real security. The passcode hash and all content
 * are in the static HTML/JS served to the browser. A determined user can
 * bypass this trivially. This is "keep honest people honest" gating —
 * equivalent to a shared link with a simple password wall.
 *
 * To change the passcode:
 *   echo -n "YOUR_PASSCODE" | shasum -a 256
 * Then replace EXPECTED_HASH below.
 */

(function () {
  // SHA-256 hash of "aibrief"
  const EXPECTED_HASH = '67fc0d9efcae5b8281cf432543a6acb2d5d2a035efacb7dbc69726ecb59e36c3';
  const SESSION_KEY = 'ai_brief_auth';
  const SESSION_VALUE = 'verified_' + EXPECTED_HASH.substring(0, 16);

  async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  function isAuthed() {
    return sessionStorage.getItem(SESSION_KEY) === SESSION_VALUE;
  }

  function setAuthed() {
    sessionStorage.setItem(SESSION_KEY, SESSION_VALUE);
  }

  function showGate() {
    const overlay = document.createElement('div');
    overlay.id = 'gate-overlay';
    overlay.innerHTML = `
      <div class="gate-box">
        <h2>AI Brief</h2>
        <p class="gate-sub">Enter passcode to continue</p>
        <input type="password" id="gate-input" placeholder="Passcode" autocomplete="off" />
        <button id="gate-submit">Enter</button>
        <p id="gate-error" class="gate-error"></p>
        <p class="gate-note">Lightweight access gate &mdash; not strong security.</p>
      </div>
    `;
    document.body.prepend(overlay);

    const input = document.getElementById('gate-input');
    const btn = document.getElementById('gate-submit');
    const error = document.getElementById('gate-error');

    async function tryAuth() {
      const val = input.value.trim();
      if (!val) return;
      const hash = await sha256(val);
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
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') tryAuth(); });
    setTimeout(() => input.focus(), 100);
  }

  function init() {
    const content = document.getElementById('brief-content');
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
