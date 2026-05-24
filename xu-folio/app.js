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
      "meta.desc": "朱师傅四十余年装修生涯中的作品掠影——这里只精选了其中两套度假民宿。每一寸光线、每一道收口，都是岁月磨出来的手艺。",
      "hero.kicker": "匠 心 营 造",
      "hero.title": "朱师傅",
      "hero.sub": "四十余年装修手艺 · 这里只是其中两套",
      "hero.tagline": "让每一个空间，都住得进光，也住得进故事。",
      "hero.cta": "看看他的作品 ↓",
      "about.label": "关于朱师傅",
      "about.heading": "一双手，一颗较真的心",
      "about.body1": "朱师傅做装修四十多年。墙要平到能当镜子照，砖缝要齐到处女座看了都安心，水电藏得干干净净——别人嘴里那句“差不多就行了”，到他这儿一律不存在，只有“正正好”。",
      "about.body2": "下面这两套度假民宿，只是朱师傅众多作品里随手挑出的两例；从砸墙到收尾，每道工序他都亲自盯着。他不爱说漂亮话——毕竟活儿好不好，房子自己会开口。",
      "about.stat1num": "40+", "about.stat1label": "年手艺",
      "about.stat2num": "数百+", "about.stat2label": "套焕新作品",
      "about.stat3num": "100%","about.stat3label": "亲手把关",
      "badge.before": "改造前", "badge.after": "完工", "badge.detail": "细节",
      "ui.viewAirbnb": "在 Airbnb 上查看房源",
      "ui.reviewsTitle": "住客评价",
      "ui.reviewsNote": "来自 Airbnb 的真实入住评价",
      "nav.about": "关于", "nav.work": "作品", "nav.reviews": "评价", "nav.contact": "联系",
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
      "meta.desc": "A glimpse of Master Zhu's 40+ years of renovation work — just two of the many vacation rentals he has transformed. Every shaft of light and every clean seam is the work of decades.",
      "hero.kicker": "C R A F T E D   B Y   H A N D",
      "hero.title": "Master Zhu",
      "hero.sub": "40+ years of craftsmanship · just two of the many homes he has transformed",
      "hero.tagline": "Spaces built to hold the light — and a story.",
      "hero.cta": "See his work ↓",
      "about.label": "About Master Zhu",
      "about.heading": "A steady pair of hands, and a stubborn eye for detail",
      "about.body1": "Master Zhu has spent more than forty years renovating homes. Walls flat enough to use as a mirror, grout lines straight enough to soothe even the fussiest eye, plumbing and wiring tucked clean away. The phrase 'eh, close enough' simply doesn't exist in his vocabulary — only 'exactly right.'",
      "about.body2": "The two rentals below are just a couple of examples from a long portfolio of work; every step, from the first wall down to the final seam, was overseen by his own hands. Master Zhu isn't one for sweet talk — then again, good work speaks for itself.",
      "about.stat1num": "40+", "about.stat1label": "years of craft",
      "about.stat2num": "Hundreds+", "about.stat2label": "homes transformed",
      "about.stat3num": "100%","about.stat3label": "hands-on",
      "badge.before": "Before", "badge.after": "After", "badge.detail": "Detail",
      "ui.viewAirbnb": "View the listing on Airbnb",
      "ui.reviewsTitle": "What Guests Say",
      "ui.reviewsNote": "Verified guest reviews from Airbnb",
      "nav.about": "About", "nav.work": "Projects", "nav.reviews": "Reviews", "nav.contact": "Contact",
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
  var galleriesRevealed = false;

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

  function reviewHTML(r) {
    var n = Math.max(0, Math.min(5, r.stars || 5));
    var stars = new Array(n + 1).join("★") + new Array(6 - n).join("☆");
    return '' +
      '<blockquote class="review">' +
        '<div class="review__stars" aria-label="' + n + '/5">' + stars + '</div>' +
        '<p class="review__text">' + esc(lang2(r.text)) + '</p>' +
        '<footer class="review__by">' +
          '<span class="review__name">' + esc(r.name || "") + '</span>' +
          '<span class="review__meta">' + esc(lang2(r.meta)) + '</span>' +
        '</footer>' +
      '</blockquote>';
  }

  function renderReviews(prop) {
    var host = document.getElementById("reviews-" + prop.id);
    if (!host) return;
    var revs = prop.reviews || [];
    if (!revs.length) { host.innerHTML = ""; return; }
    host.innerHTML =
      '<h3 class="reviews__title">' + esc(t("ui.reviewsTitle")) + '</h3>' +
      '<p class="reviews__note">' + esc(t("ui.reviewsNote")) + '</p>' +
      '<div class="reviews__grid">' + revs.map(reviewHTML).join("") + '</div>';
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

      renderReviews(prop);
    });

    if (!galleriesRevealed) {
      document.querySelectorAll(".gallery .shot, .reviews .review").forEach(function (el) {
        el.classList.add("reveal");
      });
      galleriesRevealed = true;
    }
    observeReveals();
  }

  /* ---------- scroll reveal ---------- */
  var revealObserver = null;
  function ensureObserver() {
    if (revealObserver || !("IntersectionObserver" in window)) return revealObserver;
    revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("is-visible");
          revealObserver.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    return revealObserver;
  }
  function observeReveals() {
    var ob = ensureObserver();
    var els = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!ob) { els.forEach(function (el) { el.classList.add("is-visible"); }); return; }
    els.forEach(function (el) { ob.observe(el); });
  }

  /* ---------- lightbox ---------- */
  function initLightbox() {
    var box = document.createElement("div");
    box.id = "lightbox";
    box.hidden = true;
    box.innerHTML =
      '<button class="lb-close" type="button" aria-label="Close">&times;</button>' +
      '<button class="lb-nav lb-prev" type="button" aria-label="Previous">&#8249;</button>' +
      '<img class="lb-img" alt="">' +
      '<button class="lb-nav lb-next" type="button" aria-label="Next">&#8250;</button>' +
      '<div class="lb-cap"></div>';
    document.body.appendChild(box);

    var img = box.querySelector(".lb-img");
    var cap = box.querySelector(".lb-cap");
    var shots = [];
    var idx = -1;

    function show(i) {
      if (!shots.length) return;
      idx = (i + shots.length) % shots.length;
      var shot = shots[idx];
      img.src = shot.getAttribute("data-full");
      img.alt = shot.getAttribute("data-room") || "";
      cap.innerHTML =
        '<span class="lb-room">' + esc(shot.getAttribute("data-room") || "") + "</span>" +
        esc(shot.getAttribute("data-cap") || "");
    }
    function openShot(shot) {
      var gallery = shot.closest(".gallery");
      shots = gallery
        ? Array.prototype.slice.call(gallery.querySelectorAll(".shot")).filter(function (s) {
            var f = s.querySelector(".frame");
            return !(f && f.classList.contains("placeholder"));
          })
        : [shot];
      var i = shots.indexOf(shot);
      show(i < 0 ? 0 : i);
      box.hidden = false;
      document.body.style.overflow = "hidden";
    }
    function close() {
      box.hidden = true;
      img.src = "";
      document.body.style.overflow = "";
    }
    function nav(dir) { show(idx + dir); }

    document.addEventListener("click", function (e) {
      if (e.target.closest(".lb-prev")) { nav(-1); return; }
      if (e.target.closest(".lb-next")) { nav(1); return; }
      var frame = e.target.closest(".frame");
      if (frame && !frame.classList.contains("placeholder")) {
        var shot = frame.closest(".shot");
        if (shot) openShot(shot);
        return;
      }
      if (e.target === box || e.target.closest(".lb-close")) close();
    });
    document.addEventListener("keydown", function (e) {
      if (box.hidden) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") nav(-1);
      else if (e.key === "ArrowRight") nav(1);
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

    var nav = document.getElementById("topnav");
    if (nav) {
      var onScroll = function () {
        nav.classList.toggle("scrolled", window.scrollY > 40);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    observeReveals();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
