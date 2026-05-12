const albumTypes = {
  baby: {
    title: "Chloe",
    date: "13 May 2026",
    note: "Hong Kong",
    styles: [
      {
        id: "soft",
        name: "Soft Minimal",
        caption: "柔和留白",
        colors: ["#fffdf9", "#bd7771", "#d8b9ae"],
      },
      {
        id: "journal",
        name: "Baby Journal",
        caption: "手帳貼紙感",
        colors: ["#f8f2e8", "#7b927d", "#d7c28a"],
      },
    ],
    pages: [
      { name: "Cover", layout: "cover", kicker: "Baby Album", heading: "First Year", subtitle: "Little moments, softly kept." },
      { name: "Birth Info", layout: "feature", kicker: "Hello World", heading: "Welcome Home", subtitle: "Tiny hands, bright eyes, full hearts." },
      { name: "Milestones", layout: "grid", kicker: "Milestones", heading: "Month by Month", subtitle: "Smiles, rolls, first steps, and all the in-between." },
      { name: "Family", layout: "story", kicker: "Family Days", heading: "Held With Love", subtitle: "A quiet record of everyday magic." },
      { name: "Birthday", layout: "final", kicker: "One Year", heading: "Make a Wish", subtitle: "The first big celebration." },
    ],
  },
  wedding: {
    title: "Anna & Ryan",
    date: "13 May 2026",
    note: "Hong Kong",
    styles: [
      {
        id: "editorial",
        name: "Modern Editorial",
        caption: "雜誌感大留白",
        colors: ["#ffffff", "#25272a", "#b8b3aa"],
      },
      {
        id: "romance",
        name: "Classic Romance",
        caption: "優雅柔和",
        colors: ["#fdf9f3", "#b9965b", "#5a443f"],
      },
    ],
    pages: [
      { name: "Cover", layout: "cover", kicker: "Wedding Album", heading: "The Day", subtitle: "A celebration of vows, family, and joy." },
      { name: "Getting Ready", layout: "feature", kicker: "Getting Ready", heading: "Before the Yes", subtitle: "Details, dress, rings, and morning light." },
      { name: "Ceremony", layout: "story", kicker: "Ceremony", heading: "The Promise", subtitle: "The quiet seconds that became forever." },
      { name: "Portraits", layout: "grid", kicker: "Portraits", heading: "Together", subtitle: "Editorial frames for the two of you." },
      { name: "Celebration", layout: "final", kicker: "Celebration", heading: "Dinner & Dancing", subtitle: "Friends, speeches, laughter, late-night glow." },
    ],
  },
  travel: {
    title: "Tokyo Family Trip",
    date: "5-11 Apr 2026",
    note: "Tokyo, Japan",
    styles: [
      {
        id: "travel-journal",
        name: "Travel Journal",
        caption: "手帳地圖感",
        colors: ["#fbf4e7", "#3f7f89", "#d7a84f"],
      },
      {
        id: "travel-minimal",
        name: "Minimal Travel Book",
        caption: "乾淨 lifestyle",
        colors: ["#ffffff", "#527792", "#d9d6ce"],
      },
      {
        id: "film-trip",
        name: "Film Trip",
        caption: "菲林復古",
        colors: ["#f2eee4", "#8d4d35", "#252525"],
      },
    ],
    pages: [
      { name: "Cover", layout: "cover", kicker: "Travel Album", heading: "Tokyo Days", subtitle: "A 7-day journey, collected one memory at a time." },
      { name: "Itinerary", layout: "story", kicker: "Route", heading: "Map & Plan", subtitle: "From arrival to the last train ride home." },
      { name: "Day 1", layout: "feature", kicker: "Day 1", heading: "Arrival", subtitle: "First steps, first meal, first glimpse of the city." },
      { name: "Day 2", layout: "grid", kicker: "Day 2", heading: "City Highlights", subtitle: "A timeline of streets, snacks, shops, and small discoveries." },
      { name: "Day 3", layout: "feature", kicker: "Day 3", heading: "Slow Morning", subtitle: "A quieter chapter with coffee, parks, and local corners." },
      { name: "Best Moments", layout: "grid", kicker: "Best Moments", heading: "The Trip in Pieces", subtitle: "People, scenery, food, and the frames worth keeping." },
      { name: "Closing", layout: "final", kicker: "Final Day", heading: "Until Next Time", subtitle: "The return journey, and the feeling that stayed." },
    ],
  },
};

const sizes = [
  { id: "square", name: "Square 8 x 8", caption: "Print book", ratio: "1 / 1" },
  { id: "a4-portrait", name: "A4 Portrait", caption: "210 x 297mm", ratio: "210 / 297" },
  { id: "a4-landscape", name: "A4 Landscape", caption: "297 x 210mm", ratio: "297 / 210" },
];

const samplePhotos = {
  baby: [
    "https://images.unsplash.com/photo-1546015720-b8b30df5aa27?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1566004100631-35d015d6a491?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=80",
  ],
  wedding: [
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1509610973147-232dfea52a97?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  ],
  travel: [
    "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1505069190533-da1c9af13346?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=900&q=80",
  ],
};

function makeSamplePhotos(type) {
  return samplePhotos[type].map((src, index) => ({ id: `${type}-sample-${index}`, src, sample: true }));
}

let state = {
  type: "baby",
  style: "soft",
  size: "square",
  page: 0,
  photos: makeSamplePhotos("baby"),
  slotAssignments: {},
  cropSettings: {},
  activeSlotKey: "",
  selectedPhotoId: "",
  captions: albumTypes.baby.pages.map((page) => page.subtitle),
  aiInsights: [],
};

const typeButtons = document.querySelectorAll("[data-type]");
const sizeOptions = document.querySelector("#sizeOptions");
const styleOptions = document.querySelector("#styleOptions");
const pageStrip = document.querySelector("#pageStrip");
const albumPage = document.querySelector("#albumPage");
const photoLibrary = document.querySelector("#photoLibrary");
const photoInput = document.querySelector("#photoInput");
const printStack = document.querySelector("#printStack");
const photoCount = document.querySelector("#photoCount");
const pageTitle = document.querySelector("#pageTitle");
const pageCount = document.querySelector("#pageCount");
const albumTitle = document.querySelector("#albumTitle");
const albumDate = document.querySelector("#albumDate");
const albumNote = document.querySelector("#albumNote");
const pageCaption = document.querySelector("#pageCaption");
const cropZoom = document.querySelector("#cropZoom");
const cropX = document.querySelector("#cropX");
const cropY = document.querySelector("#cropY");
const slotHint = document.querySelector("#slotHint");
const resetSlot = document.querySelector("#resetSlot");
const removeSlot = document.querySelector("#removeSlot");
const saveProject = document.querySelector("#saveProject");
const projectInput = document.querySelector("#projectInput");
const projectStatus = document.querySelector("#projectStatus");
const analyzePhotos = document.querySelector("#analyzePhotos");
const autoArrange = document.querySelector("#autoArrange");
const suggestCaptions = document.querySelector("#suggestCaptions");
const aiResults = document.querySelector("#aiResults");

function currentAlbum() {
  return albumTypes[state.type];
}

function renderTypeControls() {
  typeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.type === state.type);
  });
}

function renderSizeOptions() {
  sizeOptions.innerHTML = sizes
    .map(
      (size) => `
        <button class="option ${size.id === state.size ? "is-selected" : ""}" data-size="${size.id}">
          <strong>${size.name}</strong>
          <span>${size.caption}</span>
        </button>
      `,
    )
    .join("");
}

function renderStyleOptions() {
  styleOptions.innerHTML = currentAlbum().styles
    .map(
      (style) => `
        <button class="option ${style.id === state.style ? "is-selected" : ""}" data-style="${style.id}">
          <strong>${style.name}</strong>
          <span>${style.caption}</span>
          <span class="swatch-row">
            ${style.colors.map((color) => `<i class="swatch" style="background:${color}"></i>`).join("")}
          </span>
        </button>
      `,
    )
    .join("");
}

function photoAt(pageIndex, offset) {
  if (!state.photos.length) return "";
  return state.photos[(pageIndex * 3 + offset) % state.photos.length].src;
}

function slotKey(pageIndex, offset) {
  return `${pageIndex}-${offset}`;
}

function assignedPhoto(pageIndex, offset) {
  const key = slotKey(pageIndex, offset);
  if (Object.prototype.hasOwnProperty.call(state.slotAssignments, key) && state.slotAssignments[key] === null) {
    return "";
  }
  const photoId = state.slotAssignments[key];
  return state.photos.find((photo) => photo.id === photoId)?.src || "";
}

function slotPhoto(pageIndex, offset) {
  const key = slotKey(pageIndex, offset);
  if (Object.prototype.hasOwnProperty.call(state.slotAssignments, key)) {
    return assignedPhoto(pageIndex, offset);
  }
  return photoAt(pageIndex, offset);
}

function cropForSlot(key) {
  return state.cropSettings[key] || { zoom: 1, x: 0, y: 0 };
}

function slot(pageIndex, index) {
  const key = slotKey(pageIndex, index);
  const src = slotPhoto(pageIndex, index);
  const crop = cropForSlot(key);
  return `
    <div class="photo-slot can-click ${src ? "" : "empty"} ${key === state.activeSlotKey ? "is-active-slot" : ""}" data-slot="${index}" data-page="${pageIndex}">
      ${src ? `<img src="${src}" alt="" style="--crop-zoom:${crop.zoom}; --crop-x:${crop.x}%; --crop-y:${crop.y}%">` : ""}
    </div>
  `;
}

function copyBlockForPage(page, pageIndex) {
  const caption = state.captions[pageIndex] || page.subtitle;
  return `
    <div class="album-copy">
      <div class="album-kicker">${page.kicker}</div>
      <h2 class="album-heading">${page.heading}</h2>
      <p class="album-subtitle">${albumTitle.value} · ${albumDate.value} · ${albumNote.value}</p>
      <p class="album-note">${caption}</p>
    </div>
  `;
}

function renderPage() {
  const page = currentAlbum().pages[state.page];
  const size = sizes.find((item) => item.id === state.size);
  albumPage.className = `album-page ${state.size} layout-${page.layout} style-${state.style}`;
  albumPage.style.setProperty("--page-ratio", size.ratio);

  albumPage.innerHTML = renderLayout(page, state.page);
  pageTitle.textContent = page.name;
  pageCount.textContent = `${state.page + 1} / ${currentAlbum().pages.length}`;
  pageCaption.value = state.captions[state.page] || page.subtitle;
}

function renderLayout(page, pageIndex) {
  const layouts = {
    cover: `${slot(pageIndex, 0)}${copyBlockForPage(page, pageIndex)}`,
    feature: `${slot(pageIndex, 0)}${slot(pageIndex, 1)}${slot(pageIndex, 2)}${copyBlockForPage(page, pageIndex)}`,
    grid: `${copyBlockForPage(page, pageIndex)}${slot(pageIndex, 0)}${slot(pageIndex, 1)}${slot(pageIndex, 2)}${slot(pageIndex, 3)}${slot(pageIndex, 4)}${slot(pageIndex, 5)}`,
    story: `${copyBlockForPage(page, pageIndex)}${slot(pageIndex, 0)}${slot(pageIndex, 1)}`,
    final: `${slot(pageIndex, 0)}${slot(pageIndex, 1)}${copyBlockForPage(page, pageIndex)}`,
  };

  return layouts[page.layout];
}

function renderPrintStack() {
  const size = sizes.find((item) => item.id === state.size);
  printStack.innerHTML = currentAlbum().pages
    .map(
      (page, index) => `
        <section class="album-page ${state.size} layout-${page.layout} style-${state.style}" style="--page-ratio:${size.ratio}">
          ${renderLayout(page, index)}
        </section>
      `,
    )
    .join("");
}

function renderPageStrip() {
  pageStrip.innerHTML = currentAlbum().pages
    .map(
      (page, index) => `
        <button class="page-thumb ${index === state.page ? "is-active" : ""}" data-page="${index}">
          <div class="mini-layout mini-${page.layout}">
            <i class="mini-cell"></i><i class="mini-cell"></i><i class="mini-cell"></i>
          </div>
          <span>${page.name}</span>
        </button>
      `,
    )
    .join("");
}

function renderPhotoLibrary() {
  photoLibrary.innerHTML = state.photos
    .map(
      (photo) => `
        <div class="library-photo ${photo.id === state.selectedPhotoId ? "is-selected" : ""}" draggable="true" data-photo-id="${photo.id}">
          <img src="${photo.src}" alt="">
        </div>
      `,
    )
    .join("");
  photoCount.textContent = `${state.photos.length} photos`;
}

function renderSlotControls() {
  const enabled = Boolean(state.activeSlotKey);
  [cropZoom, cropX, cropY, resetSlot, removeSlot].forEach((control) => {
    control.disabled = !enabled;
  });

  if (!enabled) {
    slotHint.textContent = "Select a photo slot to adjust crop.";
    cropZoom.value = "1";
    cropX.value = "0";
    cropY.value = "0";
    return;
  }

  const [pageIndex, slotIndex] = state.activeSlotKey.split("-");
  const crop = cropForSlot(state.activeSlotKey);
  slotHint.textContent = `Editing page ${Number(pageIndex) + 1}, slot ${Number(slotIndex) + 1}`;
  cropZoom.value = String(crop.zoom);
  cropX.value = String(crop.x);
  cropY.value = String(crop.y);
}

function renderAiResults() {
  if (!state.aiInsights.length) {
    aiResults.innerHTML = `
      <div class="ai-card">
        <strong>Ready</strong>
        <p>Run Analyze to classify photos by orientation, estimated subject, and layout priority.</p>
      </div>
    `;
    return;
  }

  const categoryCounts = state.aiInsights.reduce((counts, item) => {
    counts[item.category] = (counts[item.category] || 0) + 1;
    return counts;
  }, {});
  const chips = Object.entries(categoryCounts)
    .map(([category, count]) => `<span class="ai-chip">${category}: ${count}</span>`)
    .join("");
  const top = state.aiInsights
    .slice(0, 3)
    .map((item) => `${item.label} (${item.orientation})`)
    .join(", ");

  aiResults.innerHTML = `
    <div class="ai-card">
      <strong>${state.aiInsights.length} photos analyzed</strong>
      <div class="ai-chip-row">${chips}</div>
    </div>
    <div class="ai-card">
      <strong>Recommended hero photos</strong>
      <p>${top}</p>
    </div>
  `;
}

function renderAll() {
  renderTypeControls();
  renderSizeOptions();
  renderStyleOptions();
  renderPageStrip();
  renderPage();
  renderPrintStack();
  renderPhotoLibrary();
  renderSlotControls();
  renderAiResults();
}

typeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.type = button.dataset.type;
    state.style = currentAlbum().styles[0].id;
    state.page = 0;
    state.slotAssignments = {};
    state.cropSettings = {};
    state.activeSlotKey = "";
    state.selectedPhotoId = "";
    state.captions = currentAlbum().pages.map((page) => page.subtitle);
    state.aiInsights = [];
    if (state.photos.every((photo) => photo.sample)) {
      state.photos = makeSamplePhotos(state.type);
    }
    albumTitle.value = currentAlbum().title;
    albumDate.value = currentAlbum().date;
    albumNote.value = currentAlbum().note;
    renderAll();
  });
});

sizeOptions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-size]");
  if (!button) return;
  state.size = button.dataset.size;
  renderAll();
});

styleOptions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-style]");
  if (!button) return;
  state.style = button.dataset.style;
  renderAll();
});

pageStrip.addEventListener("click", (event) => {
  const button = event.target.closest("[data-page]");
  if (!button) return;
  state.page = Number(button.dataset.page);
  state.activeSlotKey = "";
  renderAll();
});

photoLibrary.addEventListener("dragstart", (event) => {
  const photo = event.target.closest("[data-photo-id]");
  if (!photo) return;
  state.selectedPhotoId = photo.dataset.photoId;
  event.dataTransfer.setData("text/plain", photo.dataset.photoId);
  event.dataTransfer.effectAllowed = "copy";
  renderPhotoLibrary();
});

photoLibrary.addEventListener("click", (event) => {
  const photo = event.target.closest("[data-photo-id]");
  if (!photo) return;
  state.selectedPhotoId = photo.dataset.photoId;
  renderPhotoLibrary();
});

albumPage.addEventListener("dragover", (event) => {
  const slotElement = event.target.closest("[data-slot]");
  if (!slotElement) return;
  event.preventDefault();
  slotElement.classList.add("is-drop-target");
  event.dataTransfer.dropEffect = "copy";
});

albumPage.addEventListener("dragleave", (event) => {
  const slotElement = event.target.closest("[data-slot]");
  if (!slotElement) return;
  slotElement.classList.remove("is-drop-target");
});

albumPage.addEventListener("drop", (event) => {
  const slotElement = event.target.closest("[data-slot]");
  if (!slotElement) return;
  event.preventDefault();
  const photoId = event.dataTransfer.getData("text/plain");
  if (!photoId) return;
  const key = slotKey(state.page, slotElement.dataset.slot);
  state.slotAssignments[key] = photoId;
  state.activeSlotKey = key;
  state.selectedPhotoId = photoId;
  renderAll();
});

albumPage.addEventListener("click", (event) => {
  const slotElement = event.target.closest("[data-slot]");
  if (!slotElement) return;
  const key = slotKey(state.page, slotElement.dataset.slot);
  state.activeSlotKey = key;
  if (state.selectedPhotoId) {
    state.slotAssignments[key] = state.selectedPhotoId;
  }
  renderAll();
});

document.querySelector("#prevPage").addEventListener("click", () => {
  state.page = Math.max(0, state.page - 1);
  state.activeSlotKey = "";
  renderAll();
});

document.querySelector("#nextPage").addEventListener("click", () => {
  state.page = Math.min(currentAlbum().pages.length - 1, state.page + 1);
  state.activeSlotKey = "";
  renderAll();
});

document.querySelector("#shufflePhotos").addEventListener("click", () => {
  state.photos = [...state.photos].sort(() => Math.random() - 0.5);
  renderAll();
});

document.querySelector("#printAlbum").addEventListener("click", () => {
  window.print();
});

[albumTitle, albumDate, albumNote].forEach((input) => {
  input.addEventListener("input", () => {
    renderPage();
    renderPrintStack();
  });
});

pageCaption.addEventListener("input", () => {
  state.captions[state.page] = pageCaption.value;
  renderPage();
  renderPrintStack();
});

function updateActiveCrop(partial) {
  if (!state.activeSlotKey) return;
  state.cropSettings[state.activeSlotKey] = {
    ...cropForSlot(state.activeSlotKey),
    ...partial,
  };
  renderPage();
  renderPrintStack();
  renderSlotControls();
}

cropZoom.addEventListener("input", () => {
  updateActiveCrop({ zoom: Number(cropZoom.value) });
});

cropX.addEventListener("input", () => {
  updateActiveCrop({ x: Number(cropX.value) });
});

cropY.addEventListener("input", () => {
  updateActiveCrop({ y: Number(cropY.value) });
});

resetSlot.addEventListener("click", () => {
  if (!state.activeSlotKey) return;
  delete state.cropSettings[state.activeSlotKey];
  renderAll();
});

removeSlot.addEventListener("click", () => {
  if (!state.activeSlotKey) return;
  state.slotAssignments[state.activeSlotKey] = null;
  delete state.cropSettings[state.activeSlotKey];
  renderAll();
});

analyzePhotos.addEventListener("click", analyzeCurrentPhotos);

autoArrange.addEventListener("click", arrangeAlbumFromInsights);

suggestCaptions.addEventListener("click", suggestPageCaptions);

const imagePipeline = {
  maxEdge: 1800,
  quality: 0.82,
};

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", reject);
    reader.readAsDataURL(file);
  });
}

function canvasToBlob(canvas, type, quality) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error("Image compression failed."));
      },
      type,
      quality,
    );
  });
}

async function compressImageFile(file) {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, imagePipeline.maxEdge / Math.max(bitmap.width, bitmap.height));
  const width = Math.max(1, Math.round(bitmap.width * scale));
  const height = Math.max(1, Math.round(bitmap.height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d", { alpha: false });
  context.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();

  const blob = await canvasToBlob(canvas, "image/jpeg", imagePipeline.quality);
  return {
    dataUrl: await readFileAsDataUrl(blob),
    originalBytes: file.size,
    compressedBytes: blob.size,
    width,
    height,
  };
}

function formatBytes(bytes) {
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

function classifyPhoto(photo, index) {
  const width = photo.width || (index % 3 === 0 ? 1600 : 1200);
  const height = photo.height || (index % 3 === 1 ? 1600 : 1000);
  const ratio = width / height;
  const orientation = ratio > 1.15 ? "landscape" : ratio < 0.87 ? "portrait" : "square";
  const name = (photo.name || photo.id || "").toLowerCase();
  const categoriesByType = {
    baby: ["portrait", "family", "detail", "milestone"],
    wedding: ["portrait", "ceremony", "detail", "celebration"],
    travel: ["scenery", "food", "people", "city", "hotel"],
  };
  const fallback = categoriesByType[state.type] || categoriesByType.travel;
  const keywordCategory =
    [
      ["food", ["food", "meal", "restaurant", "coffee", "dinner", "lunch"]],
      ["hotel", ["hotel", "room", "stay", "lobby"]],
      ["scenery", ["view", "mountain", "sea", "sky", "park", "temple"]],
      ["people", ["people", "family", "group", "portrait"]],
      ["ceremony", ["ceremony", "vow", "ring", "church"]],
      ["celebration", ["party", "dance", "dinner", "toast"]],
    ].find(([, words]) => words.some((word) => name.includes(word)))?.[0] || "";
  const category = keywordCategory || fallback[index % fallback.length];
  const sizeScore = Math.min(1, Math.max(width, height) / imagePipeline.maxEdge);
  const balanceScore = 1 - Math.min(0.35, Math.abs(1 - ratio) / 4);
  const score = Math.round((0.62 + sizeScore * 0.25 + balanceScore * 0.13) * 100);

  return {
    id: photo.id,
    label: photo.name || `Photo ${index + 1}`,
    orientation,
    category,
    score,
  };
}

function analyzeCurrentPhotos() {
  state.aiInsights = state.photos
    .map(classifyPhoto)
    .sort((a, b) => b.score - a.score);
  renderAll();
  showProjectStatus(`AI Assist analyzed ${state.aiInsights.length} photos locally.`);
}

function slotCountForLayout(layout) {
  return {
    cover: 1,
    feature: 3,
    grid: 6,
    story: 2,
    final: 2,
  }[layout] || 1;
}

function arrangeAlbumFromInsights() {
  if (!state.aiInsights.length) analyzeCurrentPhotos();
  if (!state.aiInsights.length) return;

  const ranked = [...state.aiInsights];
  const byId = new Map(ranked.map((item) => [item.id, item]));
  const used = new Set();

  state.slotAssignments = {};
  state.cropSettings = {};
  state.activeSlotKey = "";
  state.selectedPhotoId = "";

  currentAlbum().pages.forEach((page, pageIndex) => {
    const slotCount = slotCountForLayout(page.layout);
    for (let slotIndex = 0; slotIndex < slotCount; slotIndex += 1) {
      const preferred = ranked.find((item) => {
        if (used.has(item.id)) return false;
        if (slotIndex === 0 && ["cover", "feature"].includes(page.layout)) {
          return item.orientation !== "square";
        }
        if (state.type === "travel" && page.name.toLowerCase().includes("food")) return item.category === "food";
        return true;
      }) || ranked.find((item) => !used.has(item.id)) || ranked[(pageIndex + slotIndex) % ranked.length];
      used.add(preferred.id);
      state.slotAssignments[slotKey(pageIndex, slotIndex)] = preferred.id;

      const info = byId.get(preferred.id);
      if (info?.orientation === "portrait" && page.layout === "cover") {
        state.cropSettings[slotKey(pageIndex, slotIndex)] = { zoom: 1, x: 0, y: 0 };
      }
    }
  });

  renderAll();
  showProjectStatus("AI Assist filled album slots with recommended photos.");
}

function captionsForType() {
  if (state.type === "travel") {
    return [
      "A journey shaped by small discoveries and favourite views.",
      "The route, the rhythm, and the places that held the week together.",
      "Arrival moments, first meals, and the first signs of a new city.",
      "A day of highlights, moving from street corners to open skies.",
      "A slower chapter, saved for the quiet details.",
      "The frames that carry the whole trip in miniature.",
      "Homeward bound, with the best parts still close.",
    ];
  }
  if (state.type === "wedding") {
    return [
      "A celebration of promises, details, and everyone who gathered close.",
      "The morning before the moment, full of texture and anticipation.",
      "The ceremony, held in light, vows, and stillness.",
      "Portraits of two people at the centre of the day.",
      "Dinner, dancing, and the joy that carried into the night.",
    ];
  }
  return [
    "Little moments, softly kept for the years ahead.",
    "The first details of a new life at home.",
    "A month-by-month record of tiny changes and big feelings.",
    "Family days, familiar hands, and ordinary magic.",
    "The first celebration, bright with love and noise.",
  ];
}

function suggestPageCaptions() {
  const suggestions = captionsForType();
  state.captions = currentAlbum().pages.map((page, index) => suggestions[index] || page.subtitle);
  renderAll();
  showProjectStatus("AI Assist drafted page captions.");
}

function projectSnapshot() {
  return {
    version: 1,
    type: state.type,
    style: state.style,
    size: state.size,
    albumTitle: albumTitle.value,
    albumDate: albumDate.value,
    albumNote: albumNote.value,
    captions: state.captions,
    photos: state.photos,
    slotAssignments: state.slotAssignments,
    cropSettings: state.cropSettings,
    aiInsights: state.aiInsights,
  };
}

function showProjectStatus(message, isError = false) {
  projectStatus.textContent = message;
  projectStatus.classList.toggle("is-error", isError);
}

saveProject.addEventListener("click", () => {
  const project = projectSnapshot();
  const blob = new Blob([JSON.stringify(project, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `life-frame-${state.type}-${Date.now()}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  showProjectStatus("Project JSON saved.");
});

projectInput.addEventListener("change", async (event) => {
  const [file] = Array.from(event.target.files || []);
  if (!file) return;
  try {
    const project = JSON.parse(await file.text());
    state.type = albumTypes[project.type] ? project.type : "baby";
    state.style = currentAlbum().styles.some((style) => style.id === project.style)
      ? project.style
      : currentAlbum().styles[0].id;
    state.size = sizes.some((size) => size.id === project.size) ? project.size : "square";
    state.page = 0;
    state.photos = Array.isArray(project.photos) && project.photos.length ? project.photos : makeSamplePhotos(state.type);
    state.slotAssignments = project.slotAssignments || {};
    state.cropSettings = project.cropSettings || {};
    state.aiInsights = Array.isArray(project.aiInsights) ? project.aiInsights : [];
    state.activeSlotKey = "";
    state.selectedPhotoId = "";
    state.captions = Array.isArray(project.captions)
      ? project.captions
      : currentAlbum().pages.map((page) => page.subtitle);
    albumTitle.value = project.albumTitle || currentAlbum().title;
    albumDate.value = project.albumDate || currentAlbum().date;
    albumNote.value = project.albumNote || currentAlbum().note;
    projectInput.value = "";
    renderAll();
    showProjectStatus(`Loaded ${file.name}.`);
  } catch (error) {
    projectInput.value = "";
    showProjectStatus("Cannot load this file. Please choose a Life Frame JSON project.", true);
  }
});

photoInput.addEventListener("change", async (event) => {
  const files = Array.from(event.target.files || []);
  if (!files.length) return;

  showProjectStatus(`Compressing ${files.length} photos...`);

  try {
    const processed = await Promise.all(
      files.map(async (file, index) => {
        const compressed = await compressImageFile(file);
        return {
          id: `${file.name}-${index}-${Date.now()}`,
          src: compressed.dataUrl,
          sample: false,
          name: file.name,
          width: compressed.width,
          height: compressed.height,
          originalBytes: compressed.originalBytes,
          compressedBytes: compressed.compressedBytes,
        };
      }),
    );
    const originalTotal = processed.reduce((total, photo) => total + photo.originalBytes, 0);
    const compressedTotal = processed.reduce((total, photo) => total + photo.compressedBytes, 0);
    state.photos = processed.length ? processed : state.photos;
    state.slotAssignments = {};
    state.cropSettings = {};
    state.aiInsights = [];
    state.activeSlotKey = "";
    state.selectedPhotoId = "";
    state.page = 0;
    photoInput.value = "";
    renderAll();
    showProjectStatus(
      `${processed.length} photos compressed: ${formatBytes(originalTotal)} to ${formatBytes(compressedTotal)}.`,
    );
  } catch (error) {
    photoInput.value = "";
    showProjectStatus("Some photos could not be processed. Try JPG/PNG/WebP images.", true);
  }
});

renderAll();
