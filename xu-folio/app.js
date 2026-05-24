/* ===========================================================
   朱师傅 · 匠心装修 — i18n toggle + gallery render + lightbox
   Buildless vanilla JS. Chinese (zh) is the default.
   =========================================================== */

(function () {
  "use strict";

  /* ---------- UI strings (zh baked into HTML; en swapped here) ---------- */
  var I18N = {
    zh: {
      "meta.title": "朱师傅 · 南加州匠心装修",
      "meta.desc": "南加州高品质家装翻新——厨房、卫浴、全屋改造与 ADU 加建。朱师傅四十余年手艺，亲自把关，报价透明、工期靠谱。每一道收口，都是岁月磨出来的真功夫。",
      "hero.kicker": "匠 心 营 造",
      "hero.title": "朱师傅",
      "hero.sub": "南加州 · 四十余年装修手艺",
      "hero.tagline": "让每一个空间，都住得进光，也住得进故事。",
      "hero.cta": "看看他的作品 ↓",
      "about.label": "关于朱师傅",
      "about.heading": "一双手，一颗较真的心",
      "about.body1": "朱师傅做装修四十多年，如今扎根南加州。墙要平到能当镜子照，砖缝要齐得挑不出毛病，水电全藏进墙里干干净净——别人嘴里那句“差不多就行了”，在他这儿不存在，只有“正正好”。",
      "about.body2": "下面这两套出租房，只是他作品里随手挑的两例——但他更多的功夫，花在像你家一样的房子上：厨房、卫浴、全屋翻新，到给长辈加一间 ADU。从砸墙到收尾他亲自盯，报价写明白，工期说到做到。装修最怕师傅装到一半人就没影了，这种事，在朱师傅这儿不会发生。",
      "about.stat1num": "40+", "about.stat1label": "年手艺",
      "about.stat2num": "数百+", "about.stat2label": "套焕新作品",
      "about.stat3num": "100%","about.stat3label": "亲手把关",
      "badge.before": "改造前", "badge.after": "完工", "badge.detail": "细节",
      "ui.viewAirbnb": "在 Airbnb 上查看房源",
      "ui.reviewsTitle": "住客评价",
      "ui.reviewsNote": "来自 Airbnb 的真实入住评价",
      "nav.about": "关于", "nav.services": "服务", "nav.work": "作品", "nav.reviews": "评价", "nav.contact": "联系",
      "ui.gfLabel": "住客之选", "ui.gfSub": "Airbnb 超赞房源",
      "services.label": "服务项目",
      "services.heading": "从一面墙，到一整个家",
      "services.intro": "厨房、卫浴、全屋翻新，到 ADU 加建、出租房改造——朱师傅都接。报价写清楚，工期说到做到，电话打得通。装修最怕碰上那种“下周一定到”的师傅，在他这儿不会发生。",
      "services.s1title": "扛得住爆炒的厨房",
      "services.s1desc": "大火爆炒、强力排烟、好擦好洗——中餐厨房的油烟，西式装修扛不住，朱师傅扛得住。台面、橱柜、动线，都照着真正天天开火的人来设计。",
      "services.s2title": "十年不返工的卫浴",
      "services.s2desc": "防水、找平这些看不见的功夫做扎实，住十年不渗不漏。独立浴缸、双台盆、智能马桶，忙完一天回家泡个澡，腰酸背痛都谢谢你。",
      "services.s3title": "全屋翻新",
      "services.s3desc": "从砸墙到收尾，一个人盯到底，不用你在几个工头之间当传话筒。老房子也能焕然一新，还把该留的体面留住。",
      "services.s4title": "ADU 与加建",
      "services.s4desc": "加州 ADU 正当时：给长辈一个独立的房间，给自己多一份租金。三代同堂住得开，合规报建不留隐患。",
      "services.s5title": "出租房 · 民宿改造",
      "services.s5desc": "自住要舒服，出租要耐造、上镜、住客打高分。下面那套 4.92 分的“住客之选”，就是他翻新的——投资房交给他，省心又增值。",
      "services.s6title": "藏在墙里的功夫",
      "services.s6desc": "水电藏得干干净净，柜门缝对得齐齐整整。最见功夫的地方，往往没人会盯着看——可住进去，天天都能感觉到差别。",
      "services.areaLabel": "服务区域",
      "services.areaList": "南加州 · 圣盖博谷、尔湾、橙县及周边社区",
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
      "meta.title": "Master Zhu · Southern California Renovation",
      "meta.desc": "High-quality home renovation in Southern California — kitchens, baths, whole-home remodels and ADUs. Master Zhu's 40+ years of craftsmanship, hands-on, with honest quotes and schedules he actually keeps.",
      "hero.kicker": "C R A F T E D   B Y   H A N D",
      "hero.title": "Master Zhu",
      "hero.sub": "Southern California · 40+ years of craftsmanship",
      "hero.tagline": "Spaces built to hold the light — and a story.",
      "hero.cta": "See his work ↓",
      "about.label": "About Master Zhu",
      "about.heading": "A steady pair of hands, and a stubborn eye for detail",
      "about.body1": "Master Zhu has spent more than forty years renovating homes, and these days he works right here in Southern California. Walls flat enough to mirror, grout lines you can't fault, wiring and plumbing tucked clean inside the walls. The phrase 'eh, close enough' doesn't exist in his vocabulary — only 'exactly right.'",
      "about.body2": "The two rentals below are just a couple of examples — but most of his work goes into homes like yours: kitchens, bathrooms, whole-home remodels, even an ADU for the in-laws. He oversees every step himself, the quote is spelled out, and the schedule is one he keeps. The renovation nightmare where the crew vanishes halfway? Not on his watch.",
      "about.stat1num": "40+", "about.stat1label": "years of craft",
      "about.stat2num": "Hundreds+", "about.stat2label": "homes transformed",
      "about.stat3num": "100%","about.stat3label": "hands-on",
      "badge.before": "Before", "badge.after": "After", "badge.detail": "Detail",
      "ui.viewAirbnb": "View the listing on Airbnb",
      "ui.reviewsTitle": "What Guests Say",
      "ui.reviewsNote": "Verified guest reviews from Airbnb",
      "nav.about": "About", "nav.services": "Services", "nav.work": "Projects", "nav.reviews": "Reviews", "nav.contact": "Contact",
      "ui.gfLabel": "Guest Favorite", "ui.gfSub": "Top-rated on Airbnb",
      "services.label": "What He Does",
      "services.heading": "From a single wall to the whole house",
      "services.intro": "Kitchens, bathrooms, whole-home remodels, ADUs and income-property makeovers — he does it all. Clear quotes, schedules he actually keeps, and a phone that gets answered. The contractor who keeps promising 'next week' and never shows? Not this one.",
      "services.s1title": "A Kitchen Built for Real Cooking",
      "services.s1desc": "High-heat stir-fry, serious ventilation, surfaces that wipe clean. A Western kitchen wilts under real Chinese cooking — his don't. Counters, cabinets and workflow laid out for someone who fires up the wok every day.",
      "services.s2title": "Bathrooms That Stay Dry",
      "services.s2desc": "The invisible work — waterproofing and leveling — done properly, so ten years on there's still not a leak. Freestanding tubs, double vanities, washlets. Come home, run a bath, and your back will thank you.",
      "services.s3title": "Whole-Home Remodels",
      "services.s3desc": "From the first wall down to the final seam, one person sees it through — so you're not playing telephone between three subcontractors. Even an old house comes back to life, its dignity intact.",
      "services.s4title": "ADUs & Additions",
      "services.s4desc": "ADUs are having a moment in California: a private suite for the elders, extra rental income for you. Room enough for three generations — permitted and done by the book.",
      "services.s5title": "Rentals & Airbnb Makeovers",
      "services.s5desc": "A home should feel good; a rental needs to be tough, photogenic and rated highly. The 4.92 'Guest Favorite' below is his work. Hand him the investment property — less hassle, more value.",
      "services.s6title": "The Work You Don't See",
      "services.s6desc": "Wiring and plumbing tucked clean away, cabinet seams dead straight. The work that matters most is the work nobody stops to look at — but you feel the difference every single day.",
      "services.areaLabel": "Service Area",
      "services.areaList": "Southern California — San Gabriel Valley, Irvine, Orange County and nearby",
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

  var LAUREL =
    '<svg class="gf-laurel" viewBox="0 0 44 96" aria-hidden="true">' +
      '<path d="M33 93 C20 74 16 44 25 6" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>' +
      '<g fill="currentColor">' +
        '<ellipse cx="19" cy="80" rx="8" ry="3.6" transform="rotate(28 19 80)"/>' +
        '<ellipse cx="15" cy="64" rx="8.5" ry="3.8" transform="rotate(16 15 64)"/>' +
        '<ellipse cx="14" cy="48" rx="9" ry="4" transform="rotate(2 14 48)"/>' +
        '<ellipse cx="16" cy="32" rx="8.5" ry="3.8" transform="rotate(-12 16 32)"/>' +
        '<ellipse cx="21" cy="18" rx="7.5" ry="3.4" transform="rotate(-26 21 18)"/>' +
      '</g></svg>';
  var LAUREL_R = LAUREL.replace('class="gf-laurel"', 'class="gf-laurel gf-laurel--r"');

  function gfBadgeHTML(gf) {
    return '<div class="gf-badge">' +
      LAUREL +
      '<span class="gf-badge__num">' + esc(gf.rating) + '</span>' +
      LAUREL_R +
      '<span class="gf-badge__label"><b>' + esc(t("ui.gfLabel")) + '</b>' +
        '<span>' + esc(t("ui.gfSub")) + '</span></span>' +
    '</div>';
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
      var gfEl = document.querySelector('[data-gf="' + prop.id + '"]');
      if (gfEl) gfEl.innerHTML = prop.guestFavorite ? gfBadgeHTML(prop.guestFavorite) : "";
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
