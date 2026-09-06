(function () {
  const grid = document.getElementById("grid");
  const emptyNote = document.getElementById("emptyNote");
  const nav = document.getElementById("collectionNav");
  const siteName = document.getElementById("siteName");

  const lightbox = document.getElementById("lightbox");
  const lbImage = document.getElementById("lbImage");
  const lbFrame = document.getElementById("lbFrame");
  const lbName = document.getElementById("lbName");
  const lbText = document.getElementById("lbText");
  const lbClose = document.getElementById("lbClose");
  const lbPrev = document.getElementById("lbPrev");
  const lbNext = document.getElementById("lbNext");

  const aboutToggle = document.getElementById("aboutToggle");
  const aboutPanel = document.getElementById("aboutPanel");
  const aboutClose = document.getElementById("aboutClose");

  const ALL_LABEL = "All Photographs";
  let currentCollection = (typeof DEFAULT_COLLECTION !== "undefined" && DEFAULT_COLLECTION) || ALL_LABEL;
  let currentList = [];
  let currentIndex = -1;

  function init() {
    siteName.textContent = (SITE && SITE.title) || "Portfolio";

    // Collect unique collection names in order of first appearance.
    const seen = new Set();
    const collectionNames = [];
    PHOTOS.forEach(p => {
      (p.collections || []).forEach(c => {
        if (!seen.has(c)) { seen.add(c); collectionNames.push(c); }
      });
    });

    // Default collection first, then the rest, then "All" at the end.
    const ordered = [];
    if (collectionNames.includes(currentCollection)) ordered.push(currentCollection);
    collectionNames.forEach(c => { if (c !== currentCollection) ordered.push(c); });
    ordered.push(ALL_LABEL);

    if (!collectionNames.includes(currentCollection)) currentCollection = ALL_LABEL;

    nav.innerHTML = "";
    ordered.forEach(name => {
      const btn = document.createElement("button");
      btn.textContent = name;
      btn.setAttribute("aria-current", name === currentCollection ? "true" : "false");
      btn.addEventListener("click", () => selectCollection(name));
      nav.appendChild(btn);
    });

    renderGrid();
    setupAbout();
    setupLightboxControls();
  }

  function selectCollection(name) {
    currentCollection = name;
    [...nav.children].forEach(btn => {
      btn.setAttribute("aria-current", btn.textContent === name ? "true" : "false");
    });
    renderGrid();
  }

  function photosForCurrentCollection() {
    if (currentCollection === ALL_LABEL) return PHOTOS;
    return PHOTOS.filter(p => (p.collections || []).includes(currentCollection));
  }

  function renderGrid() {
    currentList = photosForCurrentCollection();
    grid.innerHTML = "";

    if (currentList.length === 0) {
      emptyNote.hidden = false;
      return;
    }
    emptyNote.hidden = true;

    currentList.forEach((photo, i) => {
      const frame = document.createElement("div");
      frame.className = "frame";
      frame.tabIndex = 0;
      frame.setAttribute("role", "button");
      frame.setAttribute("aria-label", `Open ${photo.name}`);

      const img = document.createElement("img");
      img.src = photo.file;
      img.alt = photo.name || "";
      img.loading = "lazy";
      frame.appendChild(img);

      const meta = document.createElement("div");
      meta.className = "frame-meta";
      meta.innerHTML = `
        <span class="frame-number">${String(i + 1).padStart(2, "0")}</span>
        <span class="frame-name">${escapeHtml(photo.name || "")}</span>
      `;
      frame.appendChild(meta);

      const open = () => openLightbox(i);
      frame.addEventListener("click", open);
      frame.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
      });

      grid.appendChild(frame);
    });
  }

  function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
  }

  function updateLightbox() {
    const photo = currentList[currentIndex];
    if (!photo) return;
    lbImage.src = photo.file;
    lbImage.alt = photo.name || "";
    lbFrame.textContent = String(currentIndex + 1).padStart(2, "0") + " / " + String(currentList.length).padStart(2, "0");
    lbName.textContent = photo.name || "";
    lbText.textContent = photo.text || "";
  }

  function step(delta) {
    if (currentList.length === 0) return;
    currentIndex = (currentIndex + delta + currentList.length) % currentList.length;
    updateLightbox();
  }

  function setupLightboxControls() {
    lbClose.addEventListener("click", closeLightbox);
    lbPrev.addEventListener("click", () => step(-1));
    lbNext.addEventListener("click", () => step(1));
    lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });

    document.addEventListener("keydown", e => {
      if (lightbox.hidden) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });
  }

  function setupAbout() {
    document.getElementById("aboutTitle").textContent = "About";
    document.getElementById("aboutText").textContent = (SITE && SITE.about) || "";

    const emailLink = document.getElementById("aboutEmail");
    if (SITE && SITE.contact) {
      emailLink.href = "mailto:" + SITE.contact;
      emailLink.textContent = SITE.contact;
    } else {
      emailLink.remove();
    }

    const igLink = document.getElementById("aboutInstagram");
    if (SITE && SITE.instagram) {
      igLink.href = SITE.instagram;
    } else {
      igLink.remove();
    }

    const openAbout = () => {
      aboutPanel.hidden = false;
      aboutToggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    };
    const closeAbout = () => {
      aboutPanel.hidden = true;
      aboutToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };

    aboutToggle.addEventListener("click", openAbout);
    aboutClose.addEventListener("click", closeAbout);
    aboutPanel.addEventListener("click", e => { if (e.target === aboutPanel) closeAbout(); });
    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && !aboutPanel.hidden) closeAbout();
    });
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  init();
})();
