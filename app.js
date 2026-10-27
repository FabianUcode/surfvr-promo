/**
 * ============================================================================
 * CONFIGURACIÓN DE URLS DE DESCARGA (FÁCILMENTE MODIFICABLE)
 * Edita las propiedades `url` aquí abajo para conectar tus archivos o tiendas:
 * ============================================================================
 */
window.SURFVR_DOWNLOADS = {
  windows: {
    url: "./downloads/SurfVR-Windows-x64.exe",
    filename: "SurfVR-Windows-x64.exe",
    platformName: "Windows (.EXE)"
  },
  macos: {
    url: "https://apps.apple.com/app/surfvr-macos",
    external: true,
    platformName: "Mac App Store"
  },
  iphone: {
    url: "https://apps.apple.com/app/surfvr-ios",
    external: true,
    platformName: "App Store (iPhone)"
  },
  android: {
    url: "./downloads/SurfVR-Android.apk",
    filename: "SurfVR-Android.apk",
    platformName: "Android (.APK)"
  }
};

(function () {
  "use strict";

  const BEACHES = [
    {
      name: "Teahupo'o",
      country: "Tahití, Polinesia Francesa",
      photo: "assets/beaches/teahupoo.png",
      size: "3.5 – 13 pies",
      dir: "← Izquierda",
      iconic: true,
      cond: "VERY GOOD",
      pips: 4,
      color: "var(--aqua)",
      desc: "Una ola poderosa y hueca sobre arrecife de coral cristalino, famosa por sus tubos intensos."
    },
    {
      name: "Pipeline",
      country: "Oahu, Hawaii",
      photo: "assets/beaches/pipeline.png",
      size: "3 – 12 pies",
      dir: "← Izquierda",
      iconic: true,
      cond: "EPIC",
      pips: 5,
      color: "var(--violet)",
      desc: "El templo mundial del tubo. Olas cilíndricas perfectas que rompen cerca de la arena dorada."
    },
    {
      name: "Nazaré",
      country: "Praia do Norte, Portugal",
      photo: "assets/beaches/nazare.png",
      size: "Hasta 40 pies (12 m)",
      dir: "↔ Ambos lados",
      iconic: true,
      cond: "GOOD",
      pips: 4,
      color: "var(--mint)",
      desc: "El cañón submarino de las olas gigantes. Paredes descomunales para poner a prueba tu valor."
    },
    {
      name: "Chicama",
      country: "Puerto Malabrigo, Perú",
      photo: "assets/beaches/chicama.png",
      size: "2.5 – 7 pies",
      dir: "← Izquierda",
      iconic: false,
      cond: "VERY GOOD",
      pips: 4,
      color: "var(--aqua)",
      desc: "La izquierda más larga del mundo: paredes nobles e interminables para encadenar decenas de giros."
    },
    {
      name: "Jeffreys Bay",
      country: "Supertubes, Sudáfrica",
      photo: "assets/beaches/jbay.png",
      size: "3 – 9 pies",
      dir: "→ Derecha",
      iconic: false,
      cond: "GOOD",
      pips: 4,
      color: "var(--mint)",
      desc: "Una derecha larga, rápida y perfecta que te permite volar por la línea y buscar tubos largos."
    }
  ];

  const BOARDS = [
    {
      name: "FUNBOARD",
      measures: "7'10\" · 45 Litros",
      price: 0,
      story: "Tu primera tabla fiel: estable, fácil de remar y muy noble para atrapar olas temprano y fluir con suavidad.",
      badges: ["Fácil de Remar", "Estable", "Todo Terreno"],
      stats: [3, 4, 4, 3, 4],
      where: "Incluida gratis desde tu primera sesión.",
      fill: "#FFF9D2", rail: "#5CE6E0"
    },
    {
      name: "SOFTBOARD",
      measures: "8'0\" · 75 Litros",
      price: 150,
      story: "Tabla de espuma de gran flotación. Ideal para aprender sin esfuerzo y aprovechar hasta las olas más pequeñas.",
      badges: ["Máxima Flotación", "Aprendizaje", "Olas Pequeñas"],
      stats: [2, 5, 5, 1, 5],
      where: "Consíguela en las tiendas de Pipeline y Chicama.",
      fill: "#FFE07D", rail: "#FF9E3D"
    },
    {
      name: "FISH",
      measures: "5'7\" · 33 Litros",
      price: 300,
      story: "Corta, ancha y con cola de golondrina. Acelera rapidísimo en secciones planas y es súper divertida de girar.",
      badges: ["Cola Golondrina", "Muy Rápida", "Ágil"],
      stats: [4, 3, 4, 2, 5],
      where: "Consíguela en las tiendas de Chicama y Jeffreys Bay.",
      fill: "#7CE8A2", rail: "#1FB5C1"
    },
    {
      name: "TWIN",
      measures: "6'4\" · 27 Litros",
      price: 350,
      story: "Diseñada con dos quillas para soltar la cola con facilidad y dibujar giros libres con sensación de skate en el agua.",
      badges: ["Dos Quillas", "Giros Libres", "Estilo Fluido"],
      stats: [5, 2, 3, 2, 4],
      where: "Consíguela en las tiendas de Pipeline y Jeffreys Bay.",
      fill: "#FF9CEE", rail: "#C59BFF"
    },
    {
      name: "SHORTBOARD",
      measures: "6'11\" · 28 Litros",
      price: 400,
      story: "La tabla de competición por excelencia: afilada, reactiva y explosiva para tubos profundos y aéreos 360°.",
      badges: ["Alto Rendimiento", "Tubos y Aéreos", "Agresiva"],
      stats: [5, 2, 2, 4, 2],
      where: "Consíguela en Pipeline, Nazaré y Jeffreys Bay.",
      fill: "#FFFFFF", rail: "#FF6B5B"
    },
    {
      name: "LONGBOARD",
      measures: "9'0\" · 65 Litros",
      price: 500,
      story: "Un clásico de 9 pies con una sola quilla central. Planeo infinito para recorrer olas largas con elegancia.",
      badges: ["Clásica 9 Pies", "Planeo Infinito", "Olas Largas"],
      stats: [2, 5, 5, 2, 5],
      where: "Exclusiva de la tienda de Chicama (Perú).",
      fill: "#F5E9D3", rail: "#6478C8"
    },
    {
      name: "GUN",
      measures: "9'6\" · 50 Litros",
      price: 900,
      story: "El cañón definitivo para olas gigantes. Larga y firme para mantener el control bajando paredes de 40 pies en Nazaré.",
      badges: ["Olas Gigantes", "Máximo Control", "Especial Nazaré"],
      stats: [2, 4, 4, 5, 1],
      where: "Exclusiva de la tienda de Nazaré (Portugal).",
      fill: "#26303D", rail: "#FFC65A"
    }
  ];

  const MISSIONS = {
    easy: {
      reward: 100,
      list: [
        "Realiza 2 giros limpios en la pared de la ola",
        "Consigue 3.0 o más puntos en una ola",
        "Surfea una ola hasta el final sin caerte"
      ]
    },
    medium: {
      reward: 250,
      list: [
        "Alcanza 30 km/h deslizándote por la pared",
        "Consigue una ola de 5.5+ puntos",
        "Completa 2 olas seguidas limpiamente"
      ]
    },
    hard: {
      reward: 500,
      list: [
        "Mantente 1.5 segundos dentro del tubo",
        "Despega y aterriza un aéreo sobre la cresta",
        "Consigue una calificación Excelente (8.0+ pts)"
      ]
    },
    pro: {
      reward: 1000,
      list: [
        "Aterriza un aéreo de 360 grados completo",
        "Recorre 3 segundos profundos dentro del tubo",
        "Logra una ola casi perfecta de 9.5+ puntos"
      ]
    }
  };

  const COLORS = [
    "#FFFFFF", "#F5E9D3", "#FFE07D", "#FFAA4C", "#FF6B5B", "#FF9CEE", "#C59BFF",
    "#6478C8", "#6CB4FF", "#BCE6FF", "#5CE6E0", "#7CE8A2", "#A8B2BD", "#26303D"
  ];

  // Reactive Store
  const listeners = new Set();
  const state = new Proxy({
    money: 500,
    selectedBeach: 1,
    selectedBoard: 0,
    ownedBoards: [0],
    equippedBoard: 0,
    tier: "easy",
    checks: { easy: [false, false, false], medium: [false, false, false], hard: [false, false, false], pro: [false, false, false] },
    paid: { easy: false, medium: false, hard: false, pro: false },
    paintZone: "fill",
    paint: { fill: "#FFF9D2", rail: "#5CE6E0", fins: "#1FB5C1" }
  }, {
    set(target, key, val) {
      target[key] = val;
      listeners.forEach((fn) => fn());
      return true;
    }
  });

  function toast(text) {
    const wrap = document.getElementById("toast-wrap");
    if (!wrap) return;
    const el = document.createElement("div");
    el.className = "toast-pill";
    el.textContent = text;
    wrap.appendChild(el);
    setTimeout(() => {
      el.style.opacity = "0";
      setTimeout(() => el.remove(), 250);
    }, 2800);
  }

  function updateWallet(diff) {
    const val = document.getElementById("wallet-val");
    const pop = document.getElementById("wallet-pop");
    if (val) val.textContent = "$" + state.money.toLocaleString();
    if (diff && pop) {
      pop.textContent = (diff > 0 ? "+$" : "-$") + Math.abs(diff);
      pop.classList.add("show");
      setTimeout(() => pop.classList.remove("show"), 1000);
    }
  }

  function pipsHTML(n, color) {
    let s = "";
    for (let i = 0; i < 5; i++) {
      s += `<span class="pip ${i < n ? "on" : ""}" style="--pip-c:${color || "var(--aqua)"}"></span>`;
    }
    return s;
  }

  function renderBeaches() {
    const box = document.getElementById("beaches-container");
    if (!box) return;
    box.innerHTML = BEACHES.map((b, i) => `
      <div class="beach-tile ${state.selectedBeach === i ? "selected" : ""}" data-beach="${i}">
        <div class="beach-img">
          <img src="${b.photo}" alt="${b.name}">
          <div class="beach-scrim"></div>
          ${b.iconic ? `<span class="iconic-pill">★ Icónica</span>` : ""}
        </div>
        <div class="beach-content">
          <div>
            <h3 style="font-size:1.25rem; font-weight:800;">${b.name}</h3>
            <p style="font-size:0.75rem; font-weight:700; color:var(--text-tertiary); text-transform:uppercase;">${b.country}</p>
          </div>
          <div style="display:flex; gap:6px; flex-wrap:wrap;">
            <span class="badge">${b.size}</span>
            <span class="badge">${b.dir}</span>
          </div>
          <p style="font-size:0.84rem; color:var(--text-secondary); flex:1;">${b.desc}</p>
          <div>
            <div style="font-size:0.72rem; font-weight:800; color:${b.color}; margin-bottom:4px;">CONDICIÓN: ${b.cond}</div>
            <div class="pips-bar">${pipsHTML(b.pips, b.color)}</div>
          </div>
        </div>
      </div>
    `).join("");

    box.querySelectorAll("[data-beach]").forEach((card) => {
      card.addEventListener("click", () => {
        state.selectedBeach = parseInt(card.getAttribute("data-beach"), 10);
        toast("Destino elegido: " + BEACHES[state.selectedBeach].name);
      });
    });
  }

  function renderBoards() {
    const row = document.getElementById("pedestals-row");
    if (!row) return;
    row.innerHTML = BOARDS.map((b, i) => {
      const owned = state.ownedBoards.includes(i);
      return `
        <div class="pedestal-card ${state.selectedBoard === i ? "selected" : ""}" data-board="${i}">
          <svg viewBox="0 0 50 140" width="38" height="104">
            <path d="M25 4 C42 26, 44 102, 25 136 C6 102, 8 26, 25 4 Z" fill="${b.fill}" stroke="${b.rail}" stroke-width="4"/>
            <line x1="25" y1="6" x2="25" y2="134" stroke="rgba(7,19,29,0.28)" stroke-width="1.5"/>
          </svg>
          <div class="pedestal-base"></div>
          <strong style="font-size:0.74rem;">${b.name}</strong>
          <span class="badge ${owned ? "badge-mint" : "badge-sun"}" style="padding:2px 8px; font-size:0.66rem;">
            ${owned ? "Tuya" : "$" + b.price}
          </span>
        </div>
      `;
    }).join("");

    row.querySelectorAll("[data-board]").forEach((el) => {
      el.addEventListener("click", () => {
        state.selectedBoard = parseInt(el.getAttribute("data-board"), 10);
      });
    });

    const b = BOARDS[state.selectedBoard];
    const owned = state.ownedBoards.includes(state.selectedBoard);
    document.getElementById("board-step").textContent = `TABLA ${state.selectedBoard + 1} DE ${BOARDS.length}`;
    document.getElementById("board-title").textContent = b.name;
    document.getElementById("board-measures").textContent = b.measures;
    document.getElementById("board-story").textContent = b.story;
    document.getElementById("board-where").textContent = b.where;

    const pill = document.getElementById("board-price-pill");
    pill.className = "badge " + (owned ? "badge-mint" : "badge-sun");
    pill.textContent = owned ? "✓ EN TU COLECCIÓN" : "PRECIO: $" + b.price;

    document.getElementById("board-badges").innerHTML = b.badges.map((t) => `<span class="badge">${t}</span>`).join("");
    document.getElementById("feel-turn").innerHTML = pipsHTML(b.stats[0]);
    document.getElementById("feel-stab").innerHTML = pipsHTML(b.stats[1]);
    document.getElementById("feel-pad").innerHTML = pipsHTML(b.stats[2]);
    document.getElementById("feel-big").innerHTML = pipsHTML(b.stats[3]);
    document.getElementById("feel-small").innerHTML = pipsHTML(b.stats[4]);

    const btn = document.getElementById("board-buy-btn");
    if (owned) {
      btn.textContent = state.equippedBoard === state.selectedBoard ? "✓ Equipada para surfear" : "Equipar esta tabla →";
    } else if (state.money >= b.price) {
      btn.textContent = `Desbloquear ${b.name} por $${b.price} →`;
    } else {
      btn.textContent = `Te faltan $${b.price - state.money} (Toca aquí para ganar +$${b.price - state.money} en misiones)`;
    }
  }

  function renderMissions() {
    const box = document.getElementById("missions-container");
    if (!box) return;
    const data = MISSIONS[state.tier];
    const arr = state.checks[state.tier];

    box.innerHTML = data.list.map((txt, i) => `
      <div class="mission-item ${arr[i] ? "done" : ""}" data-m="${i}">
        <div style="display:flex; align-items:center; gap:10px;">
          <span class="check-circle">${arr[i] ? "✓" : ""}</span>
          <span style="font-size:0.9rem; font-weight:600;">${txt}</span>
        </div>
        <span class="badge ${arr[i] ? "badge-mint" : ""}">${arr[i] ? "¡Logrado!" : "Pendiente"}</span>
      </div>
    `).join("");

    box.querySelectorAll("[data-m]").forEach((row) => {
      row.addEventListener("click", () => {
        const i = parseInt(row.getAttribute("data-m"), 10);
        arr[i] = !arr[i];
        if (arr.every(Boolean) && !state.paid[state.tier]) {
          state.paid[state.tier] = true;
          state.money = state.money + data.reward;
          updateWallet(data.reward);
          toast(`¡Desafío completado! Ganaste +$${data.reward} para comprar tablas`);
        }
        renderMissions();
        renderBoards();
      });
    });
  }

  function renderPaint() {
    document.getElementById("paint-fill")?.setAttribute("fill", state.paint.fill);
    document.getElementById("paint-rail")?.setAttribute("fill", state.paint.rail);
    document.getElementById("paint-fins")?.setAttribute("fill", state.paint.fins);

    const grid = document.getElementById("palette-grid");
    if (!grid) return;
    const cur = state.paint[state.paintZone];
    grid.innerHTML = COLORS.map((c) => `
      <button class="swatch-btn ${cur.toLowerCase() === c.toLowerCase() ? "active" : ""}"
              style="background:${c}" data-color="${c}" aria-label="Color ${c}"></button>
    `).join("");

    grid.querySelectorAll("[data-color]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.paint = { ...state.paint, [state.paintZone]: btn.getAttribute("data-color") };
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    // Bind configurable download links
    document.querySelectorAll("[data-download-platform]").forEach((a) => {
      const k = a.getAttribute("data-download-platform");
      const cfg = window.SURFVR_DOWNLOADS && window.SURFVR_DOWNLOADS[k];
      if (!cfg) return;
      a.setAttribute("href", cfg.url);
      if (cfg.external) {
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener noreferrer");
      } else if (cfg.filename) {
        a.setAttribute("download", cfg.filename);
      }
      a.addEventListener("click", () => toast(`Abriendo descarga para ${cfg.platformName}`));
    });

    // Mobile Menu
    document.getElementById("menu-toggle")?.addEventListener("click", () => {
      document.getElementById("nav-links")?.classList.toggle("open");
    });

    // Wallet click bonus
    document.getElementById("wallet-btn")?.addEventListener("click", () => {
      state.money = state.money + 250;
      updateWallet(250);
      renderBoards();
      toast("+$250 añadidos a tu billetera");
    });

    // Hero Strip
    document.querySelectorAll("[data-shot]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-shot]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById("hero-img").src = btn.getAttribute("data-shot");
        document.getElementById("hero-pill-top").textContent = btn.getAttribute("data-top");
        document.getElementById("hero-pill-bot").textContent = btn.getAttribute("data-bot");
      });
    });

    // Mode Switcher (Campaña vs Free Surf)
    document.querySelectorAll("[data-mode-btn]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-mode-btn]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const m = btn.getAttribute("data-mode-btn");
        document.getElementById("panel-campana").style.display = m === "campana" ? "grid" : "none";
        document.getElementById("panel-freesurf").style.display = m === "freesurf" ? "grid" : "none";
      });
    });

    // Mission Tier
    document.querySelectorAll("[data-tier]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-tier]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.tier = btn.getAttribute("data-tier");
        renderMissions();
      });
    });

    // Free Surf Start Cards
    document.querySelectorAll("[data-start-pick]").forEach((card) => {
      card.addEventListener("click", () => {
        document.querySelectorAll("[data-start-pick]").forEach((c) => c.classList.remove("active"));
        card.classList.add("active");
        toast("Inicio elegido: " + card.getAttribute("data-start-pick"));
      });
    });

    // Board Buy / Equip
    document.getElementById("board-buy-btn")?.addEventListener("click", () => {
      const i = state.selectedBoard;
      const b = BOARDS[i];
      if (state.ownedBoards.includes(i)) {
        state.equippedBoard = i;
        toast(`¡Equipaste tu ${b.name}!`);
      } else if (state.money >= b.price) {
        state.money = state.money - b.price;
        state.ownedBoards = [...state.ownedBoards, i];
        state.equippedBoard = i;
        updateWallet(-b.price);
        toast(`¡Desbloqueaste la tabla ${b.name}!`);
      } else {
        const diff = b.price - state.money;
        state.money = state.money + diff;
        updateWallet(diff);
        toast(`Recompensa de salvavidas: +$${diff}. ¡Ya puedes desbloquear la ${b.name}!`);
      }
      renderBoards();
    });

    // Paint Zone
    document.querySelectorAll("[data-zone]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-zone]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.paintZone = btn.getAttribute("data-zone");
      });
    });

    document.getElementById("reset-paint")?.addEventListener("click", () => {
      state.paint = { fill: "#FFF9D2", rail: "#5CE6E0", fins: "#1FB5C1" };
      toast("Colores originales restaurados");
    });

    // Lightbox
    const lb = document.getElementById("lightbox");
    const lbImg = document.getElementById("lightbox-img");
    const lbTxt = document.getElementById("lightbox-text");
    function openLB(src, txt) {
      lbImg.src = src;
      lbTxt.textContent = txt || "SurfVR";
      lb.classList.add("open");
    }
    document.querySelectorAll("[data-lightbox]").forEach((el) => {
      el.addEventListener("click", () => {
        const img = el.tagName === "IMG" ? el : el.querySelector("img");
        if (img) openLB(img.src, el.getAttribute("data-lightbox"));
      });
    });
    document.getElementById("hero-open-lightbox")?.addEventListener("click", () => {
      openLB(document.getElementById("hero-img").src, "SurfVR Gameplay");
    });
    document.getElementById("lightbox-close")?.addEventListener("click", () => lb.classList.remove("open"));
    lb?.addEventListener("click", (e) => { if (e.target === lb) lb.classList.remove("open"); });

    listeners.add(() => {
      renderBeaches();
      renderBoards();
      renderPaint();
    });

    renderBeaches();
    renderBoards();
    renderMissions();
    renderPaint();
  });
})();
