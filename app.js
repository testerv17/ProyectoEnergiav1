const solutionData = [
  {
    title: "Modernización de red eléctrica industrial",
    description:
      "Propuesta integral para renovar infraestructura crítica con mejor capacidad de control, monitoreo y escalabilidad.",
    benefits: [
      "Mayor estabilidad operativa",
      "Visibilidad sobre activos y desempeño",
      "Base sólida para automatización futura"
    ],
    category: ["Infraestructura", "Redes eléctricas"],
    filter: "infraestructura",
    theme: "infraestructura"
  },
  {
    title: "Monitoreo de subestaciones",
    description:
      "Sistema de visualización y seguimiento de indicadores para detección de condiciones críticas y soporte a mantenimiento.",
    benefits: [
      "Alertas tempranas",
      "Panel operativo centralizado",
      "Mejor respuesta ante incidencias"
    ],
    category: ["Monitoreo", "Subestaciones"],
    filter: "infraestructura",
    theme: "infraestructura"
  },
  {
    title: "Control de cargadores EV",
    description:
      "Plataforma para gestión de estaciones de carga en estacionamientos, hogares y complejos de hospitalidad.",
    benefits: [
      "Control de disponibilidad",
      "Eficiencia de uso",
      "Experiencia de usuario mejorada"
    ],
    category: ["Movilidad eléctrica", "Eficiencia energética"],
    filter: "movilidad",
    theme: "movilidad"
  },
  {
    title: "Dashboard de eficiencia energética",
    description:
      "Panel ejecutivo para visualizar consumo, ahorro potencial y puntos de oportunidad por instalación o servicio.",
    benefits: [
      "Lectura clara de KPIs",
      "Análisis por sitio",
      "Mejor toma de decisiones"
    ],
    category: ["Eficiencia", "Dashboards"],
    filter: "software",
    theme: "software",

  media: [
    {
      type: "image",
      src: "assets/legal_sistema1.png",
      alt: "Panel de monitoreo energético"
    },
    {
      type: "image",
      src: "assets/legal_sistema2.png",
      alt: "Dashboard de eficiencia energética industrial"
    },
    {
      type: "image",
      src: "assets/legal_sistema3.png",
      alt: "Visualización de consumo energético"
    }
  ]
  },
  {
    title: "Trazabilidad de inspecciones con dron",
    description:
      "Flujo visual y digital para capturas aéreas, hallazgos, evidencias y seguimiento por intervención.",
    benefits: [
      "Mayor cobertura de inspección",
      "Historial visual ordenado",
      "Mejor soporte técnico-documental"
    ],
    category: ["Drones", "Inspección"],
    filter: "infraestructura",
    theme: "infraestructura",
    media: [
      {
        type: "image",
        src: "assets/360.jpg",
        alt: "Inspección aérea con dron"
      },
      {
        type: "video",
        src: "assets/dronvuelo1.mp4"
      },
      {
        type: "video",
        src: "assets/dronvuelo2.mp4"
      }
    ]
  },
  {
    title: "Sistema web legal/técnico del sector eléctrico",
    description:
      "Herramienta para gestión documental, trazabilidad de trámites y aplicación estructurada de normatividad.",
    benefits: [
      "Orden regulatorio",
      "Menos fricción administrativa",
      "Mejor interpretación técnica-jurídica"
    ],
    category: ["Legal eléctrico", "Software"],
    filter: "software",
    theme: "software",
    media: [
    {
      type: "image",
      src: "assets/sistemaweb1.png",
      alt: "Sistema de gestión regulatoria eléctrica"
    },
    {
      type: "image",
      src: "assets/sistemaweb2.png",
      alt: "Panel de trámites del sector eléctrico"
    },
    {
      type: "image",
      src: "assets/sistemaweb3.png",
      alt: "Plataforma legal técnica eléctrica"
    }
  ]
  },
  {
    title: "App móvil para mantenimiento y reportes",
    description:
      "Aplicación de campo para capturas, evidencias, checklist y reporteo con estructura operativa profesional.",
    benefits: [
      "Más control de actividades",
      "Menos retrabajo",
      "Información lista para análisis"
    ],
    category: ["Apps móviles", "Mantenimiento"],
    filter: "software",
    theme: "software"
  },
  {
    title: "Respaldo energético inteligente",
    description:
      "Solución conceptual para monitoreo y control de UPS, baterías y plantas de emergencia con visibilidad central.",
    benefits: [
      "Continuidad energética",
      "Control de riesgo",
      "Planeación de mantenimiento"
    ],
    category: ["UPS", "Respaldo energético"],
    filter: "infraestructura",
    theme: "infraestructura"
  },
  {
    title: "Plataforma Smart Grid con alertas",
    description:
      "Sistema de automatización y supervisión con eventos, notificaciones y lectura inteligente de red.",
    benefits: [
      "Automatización escalable",
      "Respuesta más rápida",
      "Conectividad entre operación y datos"
    ],
    category: ["Smart Grid", "Automatización"],
    filter: "infraestructura",
    theme: "infraestructura"
  },
  {
    title: "IA predictiva para redes y equipos",
    description:
      "Motor analítico para detectar patrones, predecir fallos y priorizar acciones sobre infraestructura crítica.",
    benefits: [
      "Análisis anticipado",
      "Menor incertidumbre operativa",
      "Mejor priorización de recursos"
    ],
    category: ["IA", "Predicción"],
    filter: "ia",
    theme: "ia"
  }
];

const qs = (selector, root = document) => root.querySelector(selector);
const qsa = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function buildSolutions() {
  const grid = qs("#solutionsGrid");
  if (!grid) return;

  grid.innerHTML = solutionData
    .map(
      (item, index) => `
        <article class="solution-card reveal" data-filter-item="${item.filter}">
          <div class="solution-card__visual"></div>
          <div class="solution-card__content">
            <div class="solution-card__top">
              <h3>${item.title}</h3>
              <span class="service-tag">${item.category[0]}</span>
            </div>
            <p>${item.description}</p>
            <div class="solution-card__tags">
              ${item.category.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
            <div class="solution-card__actions">
              <small class="solution-note">Conceptual / premium</small>
              <button class="solution-link" type="button" data-open-modal="${index}">
                Ver detalle ↗
              </button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function setFilter(filter) {
  qsa(".filter-chip").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === filter);
  });

  qsa("[data-filter-item]").forEach((card) => {
    const show = filter === "all" || card.dataset.filterItem === filter;
    card.style.display = show ? "" : "none";
  });
}

function initFilters() {
  qsa(".filter-chip").forEach((button) => {
    button.addEventListener("click", () => setFilter(button.dataset.filter));
  });
}

function visualTheme(theme) {
  const map = {
    infraestructura:
      "radial-gradient(340px 160px at 20% 20%, rgba(81,154,102,.26), transparent 62%), radial-gradient(340px 160px at 80% 30%, rgba(35,114,39,.18), transparent 62%), linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.88))",
    movilidad:
      "radial-gradient(340px 160px at 18% 30%, rgba(81,154,102,.22), transparent 62%), radial-gradient(340px 160px at 82% 22%, rgba(35,114,39,.14), transparent 62%), linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.9))",
    software:
      "radial-gradient(340px 160px at 24% 18%, rgba(35,114,39,.20), transparent 62%), radial-gradient(340px 160px at 74% 22%, rgba(106,178,125,.18), transparent 62%), linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.88))",
    ia:
      "radial-gradient(340px 160px at 24% 18%, rgba(35,114,39,.28), transparent 62%), radial-gradient(340px 160px at 74% 24%, rgba(81,154,102,.22), transparent 62%), linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.88))"
  };

  return map[theme] || map.infraestructura;
}

function openModal(index) {
  const item = solutionData[index];
  const modal = qs("#solutionModal");
  if (!modal || !item) return;

  qs("#modalTitle").textContent = item.title;
  qs("#modalDescription").textContent = item.description;
  qs("#modalBenefits").innerHTML = item.benefits.map((benefit) => `<li>${benefit}</li>`).join("");
  qs("#modalCategory").innerHTML = item.category.map((category) => `<li>${category}</li>`).join("");
  qs("#modalVisual").style.background = visualTheme(item.theme);

  const mediaWrap = qs("#modalMedia");
  const mediaGrid = qs("#modalMediaGrid");

  if (mediaWrap && mediaGrid) {
    if (item.media && item.media.length) {
      mediaWrap.hidden = false;
      mediaGrid.innerHTML = item.media
        .map((media) => {
          if (media.type === "video") {
            return `
              <video class="modal-media__item" controls preload="metadata">
                <source src="${media.src}" type="video/mp4">
                Tu navegador no soporta video HTML5.
              </video>
            `;
          }

          return `
            <img
              class="modal-media__item"
              src="${media.src}"
              alt="${media.alt || item.title}"
              loading="lazy"
            >
          `;
        })
        .join("");
    } else {
      mediaWrap.hidden = true;
      mediaGrid.innerHTML = "";
    }
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = qs("#solutionModal");
  if (!modal) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function initModal() {
  document.addEventListener("click", (event) => {
    const openButton = event.target.closest("[data-open-modal]");
    const closeButton = event.target.closest("[data-close-modal]");

    if (openButton) openModal(openButton.dataset.openModal);
    if (closeButton) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
}

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16 }
  );

  qsa(".reveal").forEach((element) => observer.observe(element));
}

function initCounter() {
  const metrics = qsa(".metric[data-count]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const metric = entry.target;
        const numNode = qs(".metric__num", metric);
        const target = Number(metric.dataset.count || 0);
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 40));

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          numNode.textContent = current;
        }, 24);

        observer.unobserve(metric);
      });
    },
    { threshold: 0.5 }
  );

  metrics.forEach((metric) => observer.observe(metric));
}

function initBackTop() {
  const button = qs("#backTop");
  if (!button) return;

  window.addEventListener(
    "scroll",
    () => {
      button.classList.toggle("is-visible", window.scrollY > 600);
    },
    { passive: true }
  );

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initNav() {
  const nav = qs(".main-nav");
  const toggle = qs(".nav-toggle");
  const menu = qs(".nav-menu");
  if (!toggle || !nav || !menu) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", nav.classList.contains("is-open") ? "true" : "false");
  });

  qsa("a", menu).forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initForm() {
  const form = qs("#contactForm");
  const status = qs("#formStatus");
  if (!form || !status) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const valid = [...data.entries()].every(([, value]) => String(value).trim().length > 0);

    status.textContent = valid
      ? "Gracias. Tu solicitud fue registrada correctamente."
      : "Por favor completa todos los campos.";

    if (valid) form.reset();
  });
}

function injectRipple() {
  const style = document.createElement("style");

  style.textContent = `
    [data-ripple] {
      position: relative;
      overflow: hidden;
    }

    .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255,255,255,.34);
      transform: scale(0);
      animation: rippleAnimation .65s ease-out forwards;
      pointer-events: none;
    }

    @keyframes rippleAnimation {
      to {
        transform: scale(2.6);
        opacity: 0;
      }
    }
  `;

  document.head.appendChild(style);

  document.addEventListener("pointerdown", (event) => {
    const button = event.target.closest("[data-ripple]");
    if (!button) return;

    const circle = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.left = `${event.clientX - rect.left - size / 2}px`;
    circle.style.top = `${event.clientY - rect.top - size / 2}px`;
    circle.className = "ripple";

    button.appendChild(circle);
    setTimeout(() => circle.remove(), 650);
  });
}

function openImageLightbox(src, alt = "") {
  const lightbox = qs("#imageLightbox");
  const image = qs("#lightboxImage");

  if (!lightbox || !image) return;

  image.src = src;
  image.alt = alt;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeImageLightbox() {
  const lightbox = qs("#imageLightbox");
  const image = qs("#lightboxImage");

  if (!lightbox || !image) return;

  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  image.src = "";
  image.alt = "";
  document.body.style.overflow = "";
}

function initImageLightbox() {
  document.addEventListener("click", (event) => {
    const img = event.target.closest(".modal-media__item");

    if (img && img.tagName === "IMG") {
      openImageLightbox(img.src, img.alt || "");
      return;
    }

    const closeBtn = event.target.closest("[data-close-lightbox]");
    if (closeBtn) {
      closeImageLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeImageLightbox();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  buildSolutions();
  initFilters();
  setFilter("all");
  initModal();
  initImageLightbox();
  initReveal();
  initCounter();
  initBackTop();
  initNav();
  initForm();
  injectRipple();
});
