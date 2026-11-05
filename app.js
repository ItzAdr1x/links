(function () {
  const c = window.SITE_CONFIG || {};
  const t = c.theme || {};
  const root = document.documentElement.style;

  // ---------- Theme ----------
  const map = {
    "--bg": t.background,
    "--card": t.cardBackground,
    "--card-hover": t.cardHover,
    "--text": t.text,
    "--muted": t.mutedText,
    "--accent": t.accent,
    "--radius": t.radius,
    "--blur": t.blur,
    "--avatar-filter": t.avatarFilter,
    "--font": t.font
  };
  Object.entries(map).forEach(([k, v]) => v && root.setProperty(k, v));
  document.documentElement.style.colorScheme = t.mode === "light" ? "light" : "dark";
  if (c.lang) document.documentElement.lang = c.lang;

  document.title = c.title || c.name || "Links";
  document.getElementById("name").textContent = c.name || "";
  document.getElementById("tagline").textContent = c.tagline || "";
  document.getElementById("bio").textContent = c.bio || "";
  document.getElementById("footer").textContent = c.footer || "";
  if (!c.tagline) document.getElementById("tagline").remove();

  // ---------- Icons ----------
  // fill = filled brand logo, otherwise outlined line icon
  const ICONS = {
    github: { fill: true, d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" },
    x: { fill: true, d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" },
    youtube: { fill: true, d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
    tiktok: { fill: true, d: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" },
    phone: { d: "M8 2h8a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z M11 18h2" },
    cube: { d: "M12 2 3 7v10l9 5 9-5V7l-9-5Z M3 7l9 5 9-5 M12 12v10" },
    sparkle: { d: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z M19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" },
    mail: { d: "M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z M3 7l9 6 9-6" },
    link: { d: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1 M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" }
  };
  const NS = "http://www.w3.org/2000/svg";

  function iconEl(name) {
    const def = ICONS[name];
    if (!def) return null; // not a known name -> shown as text/emoji
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    const p = document.createElementNS(NS, "path");
    p.setAttribute("d", def.d);
    if (def.fill) {
      p.setAttribute("fill", "currentColor");
    } else {
      p.setAttribute("fill", "none");
      p.setAttribute("stroke", "currentColor");
      p.setAttribute("stroke-width", "1.7");
      p.setAttribute("stroke-linecap", "round");
      p.setAttribute("stroke-linejoin", "round");
    }
    svg.appendChild(p);
    return svg;
  }

  function fillIcon(el, name) {
    const svg = iconEl(name || "link");
    if (svg) el.appendChild(svg);
    else el.textContent = name; // emoji fallback
  }

  // ---------- Avatar ----------
  const av = document.getElementById("avatar");
  if (c.avatar) {
    av.style.backgroundImage = "url('" + c.avatar + "')";
  } else {
    av.textContent = (c.name || "?").trim().charAt(0).toUpperCase();
  }

  // ---------- Links ----------
  const safe = (u) => /^(https?:|mailto:|tel:)/i.test(u || "") ? u : "#";
  const linksEl = document.getElementById("links");

  (c.links || []).forEach((l) => {
    if (l.type === "heading") {
      const h = document.createElement("div");
      h.className = "heading";
      h.textContent = l.title;
      linksEl.appendChild(h);
      return;
    }
    const a = document.createElement("a");
    a.className = "link";
    a.href = safe(l.url);
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    const icon = document.createElement("span");
    icon.className = "icon";
    fillIcon(icon, l.icon);
    const label = document.createElement("span");
    label.className = "label";
    label.textContent = l.title;
    a.append(icon, label);
    linksEl.appendChild(a);
  });

  const socEl = document.getElementById("socials");
  (c.socials || []).forEach((s) => {
    const a = document.createElement("a");
    a.href = safe(s.url);
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.title = s.title || "";
    a.setAttribute("aria-label", s.title || "Social");
    fillIcon(a, s.icon);
    socEl.appendChild(a);
  });

  // ---------- Falling stars ----------
  const cfg = c.stars || {};
  const canvas = document.getElementById("stars");
  if (!cfg.enabled || !canvas) { if (canvas) canvas.remove(); return; }

  const reduce = cfg.respectReducedMotion === true &&
   window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarse = window.matchMedia("(pointer: coarse)").matches; // Handy / Tablet
  const ctx = canvas.getContext("2d");
  const color = cfg.color || "255,255,255";
  const speedMul = cfg.speed || 1;
  const trailMul = cfg.trail == null ? 1 : cfg.trail;
  const maxDpr = coarse ? 1.5 : 2;

  let w = 0, h = 0, dpr = 1, lastW = 0, lastH = 0;
  let stars = [];
  let raf = 0, last = 0;

  // Glow einmal vorrendern statt pro Stern und Frame einen Radial-Gradient zu bauen
  const HALO = 64;
  const haloSprite = document.createElement("canvas");
  haloSprite.width = haloSprite.height = HALO;
  (function () {
    const hc = haloSprite.getContext("2d");
    const g = hc.createRadialGradient(HALO / 2, HALO / 2, 0, HALO / 2, HALO / 2, HALO / 2);
    g.addColorStop(0, `rgba(${color},1)`);
    g.addColorStop(1, `rgba(${color},0)`);
    hc.fillStyle = g;
    hc.fillRect(0, 0, HALO, HALO);
  })();

  // Canvas-Groesse kommt aus dem CSS (100lvh) und ist damit unabhaengig von der
  // ein-/ausblendenden Adressleiste. Neu dimensioniert wird nur, wenn sich
  // wirklich etwas Relevantes aendert (Breite, Drehen, Desktop-Fenster).
  function resize(force) {
    const nw = canvas.clientWidth || window.innerWidth;
    const nh = canvas.clientHeight || window.innerHeight;
    const widthChanged = nw !== lastW;
    const heightChanged = coarse ? Math.abs(nh - lastH) > 120 : nh !== lastH;
    if (!force && !widthChanged && !heightChanged) return false;

    lastW = nw; lastH = nh;
    dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
    w = nw; h = nh;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return true;
  }

  function makeStar(initial) {
    const depth = Math.random();
    return {
      x: Math.random() * w,
      y: initial ? Math.random() * h : -10 - Math.random() * 40,
      r: 0.5 + depth * 1.6,
      v: (25 + depth * 70) * speedMul,
      drift: (Math.random() - 0.5) * 6,
      a: 0.35 + depth * 0.65,
      tw: Math.random() * Math.PI * 2
    };
  }

  function starCount() {
    const base = cfg.count || 90;
    // Auf kleinen Touch-Screens weniger Sterne: sieht gleich dicht aus, laeuft deutlich fluessiger
    const n = (coarse || w < 600) ? Math.round(base * 0.55) : base;
    return Math.max(20, n);
  }

  function init() {
    resize(true);
    stars = Array.from({ length: starCount() }, () => makeStar(true));
  }

  function draw(dt) {
    ctx.clearRect(0, 0, w, h);

    for (const s of stars) {
      s.y += s.v * dt;
      s.x += s.drift * dt;
      s.tw += dt * 2;
      if (s.y > h + 10 || s.x < -10 || s.x > w + 10) Object.assign(s, makeStar(false));

      const alpha = cfg.twinkle === false ? s.a : s.a * (0.75 + 0.25 * Math.sin(s.tw));

      // Trail: long fading streak behind the star, opposite to its direction of travel
      if (trailMul > 0) {
        const k = 0.9 * trailMul;
        const tx = s.x - s.drift * k;
        const ty = s.y - s.v * k;
        const g = ctx.createLinearGradient(tx, ty, s.x, s.y);
        g.addColorStop(0, `rgba(${color},0)`);
        g.addColorStop(0.6, `rgba(${color},${alpha * 0.25})`);
        g.addColorStop(1, `rgba(${color},${alpha * 0.8})`);
        ctx.strokeStyle = g;
        ctx.lineWidth = s.r * 1.1;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();
      }

      // Soft glow around the head (vorgerendertes Sprite)
      const hr = s.r * 5;
      ctx.globalAlpha = alpha * 0.35;
      ctx.drawImage(haloSprite, s.x - hr, s.y - hr, hr * 2, hr * 2);
      ctx.globalAlpha = 1;

      // Star head
      ctx.fillStyle = `rgba(${color},${alpha})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function frame(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    draw(dt);
    raf = requestAnimationFrame(frame);
  }

  function start() {
    if (raf || reduce) return;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  }

  function stop() {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  }

  init();

  if (reduce) {
    draw(0); // einmal statisch zeichnen
  } else {
    start();
    // Tab im Hintergrund / App gewechselt -> Animation pausieren (spart Akku, kein dt-Sprung danach)
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stop(); else start();
    });
  }

  let resizeTimer = 0;
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (resize()) {
        stars.forEach((s) => { s.x = Math.min(s.x, w); });
        if (reduce) draw(0);
      }
    }, 120);
  }
  window.addEventListener("resize", onResize);
  window.addEventListener("orientationchange", () => setTimeout(() => {
    if (resize(true)) {
      stars = Array.from({ length: starCount() }, () => makeStar(true));
      if (reduce) draw(0);
    }
  }, 250));
})();