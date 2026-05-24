/* ===========================================================
   朱师傅 · 匠心装修 — i18n toggle + gallery render + lightbox
   Buildless vanilla JS. Chinese (zh) is the default.
   =========================================================== */

(function () {
  "use strict";

  /* ---------- UI strings (zh baked into HTML; en swapped here) ---------- */
  var I18N = {
    zh: {
      "meta.title": "朱师傅 · 匠心装修作品集",
      "meta.desc": "朱师傅亲手翻新的两套度假民宿。每一寸光线、每一道收口，都是二十余年手艺的沉淀。",
      "hero.kicker": "匠 心 营 造",
      "hero.title": "朱师傅",
      "hero.sub": "二十余年装修手艺 · 两套民宿的全屋焕新",
      "hero.tagline": "让每一个空间，都住得进光，也住得进故事。",
      "hero.cta": "看看他的作品 ↓",
      "about.label": "关于朱师傅",
      "about.heading": "一双手，一颗较真的心",
      "about.body1": "朱师傅做装修二十多年。墙要平到能照见人影，砖缝要齐到挑不出毛病，水电要藏得干净利落——这些在别人眼里的“差不多”，在他这儿都得“正正好”。",
      "about.body2": "下面这两套民宿，从拆改到收尾，每一道工序都经他亲手把关。他不爱说漂亮话，作品会替他开口。",
      "about.stat1num": "20+", "about.stat1label": "年手艺",
      "about.stat2num": "2",   "about.stat2label": "套全屋焕新",
      "about.stat3num": "100%","about.stat3label": "亲手把关",
      "badge.before": "改造前", "badge.after": "完工", "badge.detail": "细节",
      "ui.viewAirbnb": "在 Airbnb 上查看房源",
      "contact.label": "联系朱师傅",
      "contact.heading": "下一个焕然一新的家，也许就是你的",
      "contact.body": "想翻新自己的房子或民宿？加朱师傅的微信，聊聊你的想法。",
      "contact.qrHint": "微信二维码",
      "contact.wechatLabel": "微信号",
      "contact.wechatId": "your-wechat-id",
      "contact.note": "（请在此填写真实微信号，并上传二维码图片）",
      "contact.footer": "© 朱师傅 · 匠心装修",
      "ui.toggle": "EN"
    },
    en: {
      "meta.title": "Master Zhu · Renovation Portfolio",
      "meta.desc": "Two vacation rentals renovated by hand by Master Zhu — where every shaft of light and every clean seam carries twenty years of craft.",
      "hero.kicker": "C R A F T E D   B Y   H A N D",
      "hero.title": "Master Zhu",
      "hero.sub": "20+ years of craftsmanship · two homes brought fully back to life",
      "hero.tagline": "Spaces built to hold the light — and a story.",
      "hero.cta": "See his work ↓",
      "about.label": "About Master Zhu",
      "about.heading": "A steady pair of hands, and a stubborn eye for detail",
      "about.body1": "Master Zhu has spent more than twenty years renovating homes. Walls flat enough to catch your reflection, grout lines straight enough to survive any inspection, plumbing and wiring tucked away clean and invisible — where others settle for “close enough,” he insists on “exactly right.”",
      "about.body2": "The two rentals below were rebuilt under his own hands, from demolition to the final seam. He isn’t one for fancy words — he lets the work speak.",
      "about.stat1num": "20+", "about.stat1label": "years of craft",
      "about.stat2num": "2",   "about.stat2label": "full renovations",
      "about.stat3num": "100%","about.stat3label": "hands-on",
      "badge.before": "Before", "badge.after": "After", "badge.detail": "Detail",
      "ui.viewAirbnb": "View the listing on Airbnb",
      "contact.label": "Get in touch",
      "contact.heading": "The next home brought back to life could be yours",
      "contact.body": "Renovating a home or a rental of your own? Add Master Zhu on WeChat and tell him what you have in mind.",
      "contact.qrHint": "WeChat QR code",
      "contact.wechatLabel": "WeChat ID",
      "contact.wechatId": "your-wechat-id",
      "contact.note": "(Replace with the real WeChat ID and upload a QR image.)",
      "contact.footer": "© Master Zhu · Renovation Craft",
      "ui.toggle": "中文"
    }
  };

  var HTML_LANG = { zh: "zh-CN", en: "en" };
  var STORE_KEY = "xufolio.lang";
  var current = "zh";

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function t(key) {
    var d = I18N[current];
    return (d && d[key] != null) ? d[key] : null;
  }

  /* ---------- apply a language ---------- */
  function applyLang(lang) {
    if (lang !== "en" && lang !== "zh") lang = "zh";
    current = lang;
    document.documentElement.lang = HTML_LANG[lang];
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var val = t(el.getAttribute("data-i18n"));
      if (val == null) return;
      var attr = el.getAttribute("data-i18n-attr");
      if (attr) el.setAttribute(attr, val);
      else el.textContent = val;
    });

    var toggle = document.getElementById("lang-toggle");
    if (toggle) toggle.textContent = t("ui.toggle");

    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
    renderGalleries(lang);
  }

  /* ---------- gallery rendering ---------- */
  function lang2(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[current] != null ? obj[current] : (obj.zh != null ? obj.zh : "");
  }

  function figureHTML(prop, im) {
    var full  = "img/" + prop.id + "/" + im.file + ".jpg";
    var room  = lang2(im.room);
    var cap   = lang2(im.caption);
    var badgeTxt = im.phase ? (t("badge." + im.phase) || im.phase) : "";
    var badge = im.phase
      ? '<span class="badge badge-' + im.phase + '">' + esc(badgeTxt) + "</span>"
      : "";
    return '' +
      '<figure class="shot" data-full="' + esc(full) + '" ' +
              'data-room="' + esc(room) + '" data-cap="' + esc(cap) + '">' +
        '<div class="frame">' +
          '<img src="' + esc(full) + '" alt="' + esc(room + " — " + cap) + '" ' +
               'loading="lazy" decoding="async" ' +
               "onerror=\"this.closest('.frame').classList.add('placeholder')\">" +
          badge +
        '</div>' +
        '<figcaption>' +
          '<span class="room">' + esc(room) + '</span>' +
          '<span class="cap">' + esc(cap) + '</span>' +
        '</figcaption>' +
      '</figure>';
  }

  function renderGalleries(lang) {
    var data = window.GALLERIES || [];
    data.forEach(function (prop) {
      // header bits
      var titleEl = document.querySelector('[data-gallery-title="' + prop.id + '"]');
      var introEl = document.querySelector('[data-gallery-intro="' + prop.id + '"]');
      var eyebrowEl = document.querySelector('[data-gallery-eyebrow="' + prop.id + '"]');
      var linkEl  = document.querySelector('[data-gallery-link="' + prop.id + '"]');
      if (titleEl) titleEl.textContent = lang2(prop.title);
      if (introEl) introEl.textContent = lang2(prop.intro);
      if (eyebrowEl && prop.eyebrow) eyebrowEl.textContent = lang2(prop.eyebrow);
      if (linkEl) {
        if (prop.airbnb) { linkEl.href = prop.airbnb; linkEl.style.display = ""; }
        else { linkEl.style.display = "none"; }
      }
      // grid
      var host = document.getElementById("gallery-" + prop.id);
      if (!host) return;
      host.innerHTML = (prop.images || []).map(function (im) {
        return figureHTML(prop, im);
      }).join("");
    });
  }

  /* ---------- lightbox ---------- */
  function initLightbox() {
    var box = document.createElement("div");
    box.id = "lightbox";
    box.hidden = true;
    box.innerHTML =
      '<button class="lb-close" type="button" aria-label="Close">&times;</button>' +
      '<img class="lb-img" alt="">' +
      '<div class="lb-cap"></div>';
    document.body.appendChild(box);

    var img = box.querySelector(".lb-img");
    var cap = box.querySelector(".lb-cap");

    function open(shot) {
      img.src = shot.getAttribute("data-full");
      img.alt = shot.getAttribute("data-room") || "";
      cap.innerHTML =
        '<span class="lb-room">' + esc(shot.getAttribute("data-room") || "") + "</span>" +
        esc(shot.getAttribute("data-cap") || "");
      box.hidden = false;
      document.body.style.overflow = "hidden";
    }
    function close() {
      box.hidden = true;
      img.src = "";
      document.body.style.overflow = "";
    }

    document.addEventListener("click", function (e) {
      var frame = e.target.closest(".frame");
      if (frame && !frame.classList.contains("placeholder")) {
        var shot = frame.closest(".shot");
        if (shot) open(shot);
        return;
      }
      if (e.target === box || e.target.closest(".lb-close")) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !box.hidden) close();
    });
  }

  /* ---------- init ---------- */
  function init() {
    var saved = null;
    try { saved = localStorage.getItem(STORE_KEY); } catch (e) {}
    initLightbox();
    applyLang(saved === "en" || saved === "zh" ? saved : "zh");

    var toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        applyLang(current === "zh" ? "en" : "zh");
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
