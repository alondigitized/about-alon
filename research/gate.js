/**
 * Lightweight client-side passcode gating for Retail Intelligence Pulse.
 * Works on both the archive page (which wraps content in <div id="brief-content">)
 * and individual retail brief pages (which don't use that wrapper).
 *
 * NOT real security. Content is in the HTML source. This prevents casual
 * access, not determined bypassing.
 *
 * Default passcode: "retailpulse"
 * To change: echo -n "NEW_PASSCODE" | shasum -a 256
 */

(function () {
  var EXPECTED_HASH = '8f050e8929b931b08998567c5864fe5b51971876c6f58b580b46ff2cdd1c624f';
  var SESSION_KEY = 'retail_pulse_auth';
  var SESSION_VALUE = 'verified_' + EXPECTED_HASH.substring(0, 16);

  function isAuthed() {
    return sessionStorage.getItem(SESSION_KEY) === SESSION_VALUE;
  }

  /* Immediately hide page if not authenticated — prevents flash of ungated content.
     This runs at parse time before DOMContentLoaded. */
  if (!isAuthed()) {
    document.documentElement.style.visibility = 'hidden';
  }

  async function sha256(message) {
    var msgBuffer = new TextEncoder().encode(message);
    var hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    var hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
  }

  function setAuthed() {
    sessionStorage.setItem(SESSION_KEY, SESSION_VALUE);
  }

  function revealPage() {
    document.documentElement.style.visibility = '';
    var content = document.getElementById('brief-content');
    if (content) content.style.display = '';
  }

  function showGate() {
    /* Restore document visibility so the gate overlay renders,
       but hide all page content behind it. */
    document.documentElement.style.visibility = '';

    var content = document.getElementById('brief-content');
    if (content) {
      content.style.display = 'none';
    } else {
      /* No brief-content wrapper (individual brief pages) — hide all body children */
      var children = document.body.children;
      for (var i = 0; i < children.length; i++) {
        children[i].style.display = 'none';
      }
    }

    var overlay = document.createElement('div');
    overlay.id = 'gate-overlay';
    /* Inline styles so the gate renders correctly on pages that don't load style.css */
    overlay.style.cssText = 'position:fixed;inset:0;background:#0c0c0c;display:flex;align-items:center;justify-content:center;z-index:9999;font-family:"SF Mono","Fira Code",Menlo,Consolas,monospace;';
    overlay.innerHTML = '\
      <div style="text-align:center;max-width:320px;padding:24px;">\
        <h2 style="font-size:1.2rem;color:#fff;margin-bottom:8px;">Retail Intelligence Pulse</h2>\
        <p style="color:#737373;font-size:0.8rem;margin-bottom:20px;">Enter passcode to continue</p>\
        <input type="password" id="gate-input" placeholder="Passcode" autocomplete="off" style="width:100%;padding:10px 12px;font-family:inherit;font-size:0.9rem;background:#151515;border:1px solid #262626;border-radius:4px;color:#d4d4d4;outline:none;margin-bottom:12px;box-sizing:border-box;" />\
        <button id="gate-submit" style="width:100%;padding:10px;font-family:inherit;font-size:0.85rem;font-weight:600;background:#f59e0b;border:none;border-radius:4px;color:#000;cursor:pointer;">Enter</button>\
        <p id="gate-error" style="color:#ef4444;font-size:0.78rem;margin-top:10px;min-height:1.2em;"></p>\
        <p style="color:#737373;font-size:0.65rem;margin-top:16px;opacity:0.6;">Lightweight access gate &mdash; not strong security.</p>\
      </div>';
    document.body.prepend(overlay);

    var input = document.getElementById('gate-input');
    var btn = document.getElementById('gate-submit');
    var error = document.getElementById('gate-error');

    function revealContent() {
      var bc = document.getElementById('brief-content');
      if (bc) {
        bc.style.display = '';
      } else {
        var kids = document.body.children;
        for (var j = 0; j < kids.length; j++) {
          if (kids[j].id !== 'gate-overlay') kids[j].style.display = '';
        }
      }
    }

    async function tryAuth() {
      var val = input.value.trim();
      if (!val) return;
      var hash = await sha256(val);
      if (hash === EXPECTED_HASH) {
        setAuthed();
        overlay.remove();
        revealContent();
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
    if (isAuthed()) {
      revealPage();
    } else {
      showGate();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
