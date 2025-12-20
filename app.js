// Firebase Configuration
// ============================================
// SETUP INSTRUCTIONS:
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project (or use existing)
// 3. Go to Project Settings (gear icon) > Your apps > Add app (Web)
// 4. Copy the Firebase SDK configuration values below
// 5. Enable Realtime Database:
//    - Go to Realtime Database in left menu
//    - Click "Create Database"
//    - Choose your region
//    - Start in "Test mode" (for development) or set up security rules
// 6. Update the FIREBASE_CONFIG object below with your values
// ============================================
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBhGL8yBDuJxXBcPW8RN_dp_Bu-bJg0V1w",
  authDomain: "brisaise-debut.firebaseapp.com",
  databaseURL: "https://brisaise-debut-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "brisaise-debut",
  storageBucket: "brisaise-debut.firebasestorage.app",
  messagingSenderId: "626320990868",
  appId: "1:626320990868:web:9a86ed16d0dc714b6aca81",
  measurementId: "G-3ZQP0XBPHB"
};

// Initialize Firebase (only if config is provided)
let firebaseDb = null;
if (FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.apiKey !== "YOUR_API_KEY") {
  try {
    if (!firebase.apps || !firebase.apps.length) {
      firebase.initializeApp(FIREBASE_CONFIG);
    }
    // Explicitly use the database URL from config
    firebaseDb = firebase.database();
    console.log("Firebase initialized successfully");
    console.log("Database URL:", FIREBASE_CONFIG.databaseURL);
  } catch (e) {
    console.error("Firebase initialization error:", e);
    console.log("Falling back to localStorage for messages");
  }
} else {
  console.log("Firebase not configured - using localStorage for messages");
}

const data = {
  event: {
    debutanteName: "Brisaise",
    eventDate: "2025-12-30",
    eventTime: "5:00 PM",
    venueName: "Octa Events Place",
    venueAddress: "222 Don Basilio Bautista Blvd, Malabon, 1480 Metro Manila",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3859.4872354643003!2d120.9431284!3d14.6850165!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b54f44e20321%3A0x1e740390a7ec51c6!2sOCTA%20Events%20Place!5e0!3m2!1sen!2sph!4v1765374660191!5m2!1sen!2sph",
    theme: "An Elegant Evening",
    dressCode: "Formal / Semi-Formal Attire",
    dressCodeDetails: "Ladies are encouraged to wear elegant gowns or any comfortable dresses. For gentlemen, long sleeves or polo shirts are perfectly appropriate. You may wear any color of your choice, EXCEPT RED. Red is reserved exclusively for the debutante.",
    photographer: "Marq Agassi De Guzman",
    makeupArtist: "Precious Ane Hamionie Sabino"
  },
  traditions: {
    roses: [
      { id: 1, name: "Papa Ronaldo Tongco" }, { id: 2, name: "Lolo Fernando Tongco" },
      { id: 3, name: "Tito Carlo Sambilay" }, { id: 4, name: "Tito Crizaldo Sambilay" }, 
      { id: 5, name: "Tito Celerino Sambilay Jr." }, { id: 6, name: "Kuya John Jose De Guzman" }, 
      { id: 7, name: "Kuya Christian Jose De Guzman" }, { id: 8, name: "Kuya Jose Miguel De Guzman" }, 
      { id: 9, name: "Rodde Maxel De Jesus" }, { id: 10, name: "Kuya Allan Christopher Malig"},
      { id: 11, name: "Kuya Rheyan Miguel Prim" }, { id: 12, name: "Kuya Markuz Ethan Gungon" },
      { id: 13, name: "Sir Christian Cedrick Publico" }, { id: 14, name: "Albertson Mendiola" },
      { id: 15, name: "Keith Aldridge Santos" }, { id: 16, name: "Daniel Patrick Santos" }, 
      { id: 17, name: "Czelraine Tongco" }, { id: 18, name: "Kuya Amiel Tongco" }
    ],
    candles: [
      { id: 1, name: "Tita Abigail Neones"},
      { id: 2, name: "Tita Marianne Mendoza"},
      { id: 3, name: "Tita Amparo Malig"},
      { id: 4, name: "Tita Michelle De Guzman"},
      { id: 5, name: "Tita Julie Ann Garcia"},
      { id: 6, name: "Dra. May Gungon"},
      { id: 7, name: "Ma'am Christine Sarmiento"},
      { id: 8, name: "Tita Emerita Balajo Santos"},
      { id: 9, name: "Tita Rocelyn De Jesus"},
      { id: 10, name: "Tita Cecilia De Guzman"},
      { id: 11, name: "Tita Norlyn Haro"},
      { id: 12, name: "Tita Editha Buenaventura"},
      { id: 13, name: "Ate Ruby Aquino"},
      { id: 14, name: "Ate Cesareen Sadile"},
      { id: 15, name: "Miss Kristine Jamie Austria"},
      { id: 16, name: "Ma'am Ma. Kathleen Paraguya"},
      { id: 17, name: "Ma'am Nadine Mendoza-Baksal"},
      { id: 18, name: "Mama Jobelle Tongco"}
    ],
    bills: [
      { id: 1, name: "Tito Rodelio De Jesus" }, { id: 2, name: "Tito Joel De Guzman" },
      { id: 3, name: "Tita Ronavie Sambilay" }, { id: 4, name: "Tita Ladylyn Sambilay" },
      { id: 5, name: "Tita Maricris Kaye Sambilay" }, { id: 6, name: "Lolo Fernando Tongco"},
      { id: 7, name: "Ninong Warren Basilio" }, { id: 8, name: "Ninong Alvin Tongco" },
      { id: 9, name: "Ninang Rowena Tongco" }, { id: 10, name: "Tito Dojie Mendoza" },
      { id: 11, name: "Tito Marlone De Guzman" }, { id: 12, name: "Tito Froilan Garcia" },
      { id: 13, name: "Tito Allan Malig" }, { id: 14, name: "Tita Patricia Collins Basay" },
      { id: 15, name: "Tito Anthony Roberto" }, { id: 16, name: "Kuya Amiel Tongco" },
      { id: 17, name: "Mama Jobelle Tongco" }, { id: 18, name: "Papa Ronaldo Tongco" }
    ],
    treasures: [
      { id: 1, name: "Emily Christine Santos" }, { id: 2, name: "Cedie Avelino" },
      { id: 3, name: "Aliyah Ashlee Caber" }, { id: 4, name: "Phranz Francisco" }, 
      { id: 5, name: "Ruiz Franco Gungon" }, { id: 6, name: "Shane Salvador" }, 
      { id: 7, name: "Ethaniele Leo Manaloto" }, { id: 8, name: "Alvia Dela Cruz" }, 
      { id: 9, name: "Achilla Berniz Darlucio" }, { id: 10, name: "Wynona Ivee Mendoza" }, 
      { id: 11, name: "Althea Malig" }, { id: 12, name: "Renz Peter Sambilay" }, 
      { id: 13, name: "Crizlyn Sambilay" }, { id: 14, name: "Khayce Ezra Sambilay" }, 
      { id: 15, name: "Cylix Nadine Matabia" }, { id: 16, name: "Jouana Ane Martina Sabino" }, 
      { id: 17, name: "Chyno Mitchell Flores" }, { id: 18, name: "Samantha Nicole Rivera" }
    ]
  },
  faq: [
    { id: 1, question: "What time should I arrive?", answer: "Please arrive 30 minutes before the program. Early arrival is appreciated to ensure you don't miss any of the special moments." },
    { id: 2, question: "Is there a parking area at the venue?", answer: "Yes, the venue has parking available. While space is limited, we expect there to be enough parking for all guests." },
    { id: 3, question: "Is photography allowed during the event?", answer: "We'll have a professional photographer and videographer capturing the event. Feel free to take personal photos during the reception, but please no flash photography during the ceremonies." },
    { id: 4, question: "How long will the event last?", answer: "The event is expected to conclude around 9:00 PM. The program includes the grand entrance, traditional ceremonies (18 roses, candles, blue bills, and treasures), dinner, and plenty of time for photos and mingling." }
  ],
  transport: [
    { id: 1, mode: "By Public Transport", icon: "🚌", description: "Take a jeepney to Hulong Duhat. From there, ride a tricycle to 'Octa Events Place' or '222 Cafe'. The venue is well-known to most drivers in the area." },
    { id: 2, mode: "By Taxi/Grab", icon: "🚕", description: "Simply input 'OCTA Events Place, 222, Don Basilio Bautista Blvd, Brgy. Dampalit, Malabon City' in your app. " }
  ],
  giftPreferences: {
    note: "Your presence is the greatest gift! However, if you'd like to bring something, here are some ideas:",
    categories: [
      { id: 1, category: "X-men", icon: "🧬"},
      { id: 2, category: "Avengers", icon: "💥"},
      { id: 3, category: "Books", icon: "📚"},
      { id: 4, category: "Jewelry (gold)", icon: "💍"},
      { id: 5, category: "Detective Conan", icon: "🔎"},
      { id: 6, category: "Pride & Prejudice", icon: "💌"},
      { id: 7, category: "The Little Prince", icon: "👑"},
      { id: 8, category: "LEGO", icon: "🧱"},
      { id: 9, category: "Seventeen", icon: "💎"},
      { id: 10, category: "Kubo (Popmart)", icon: "✨"}
    ],
    message: "Please note: Gifts are optional. Your presence and celebration with us is what matters most!"
  },
  program: [
    { id: 1, title: "Guest Arrival", description: "Guests arrive and are welcomed to the celebration" },
    { id: 2, title: "Grand Entrance", description: "The debutante's grand entrance with her court" },
    { id: 3, title: "Opening Prayer", description: "Blessing for the celebration and the debutante by her Lola Nanay Mina" },
    { id: 4, title: "Welcoming Remarks", description: "Welcome speech by the parents and the debutante" },
    { id: 5, title: "18 Roses", description: "Traditional father-daughter dance and 18 roses dance" },
    { id: 6, title: "18 Candles", description: "Wishes and messages from 18 special women" },
    { id: 7, title: "Dinner Service", description: "Filipino-Western fusion dinner buffet" },
    { id: 8, title: "Open Photobooth", description: "Guests can take memorable photos with fun props and backdrops" },
    { id: 9, title: "18 Blue Bills", description: "18 special people offer financial gifts and advice for the debutante's future" },
    { id: 10, title: "18 Treasures", description: "Gift-giving ceremony with symbolic treasures" },
    { id: 11, title: "Message & Fast Talk", description: "Heartfelt speech by the debutante and fun quick-fire Q&A segment" },
    { id: 12, title: "Thank You & Send-off", description: "Final thanks and farewell to guests" }
  ]
};

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrbnrbkv";

function renderTopBannerCountdown() {
  const timerEl = document.getElementById("top-banner-timer");
  if (!timerEl) return;
  const target = new Date("2025-12-30T00:00:00");
  function update() {
    const now = new Date();
    let diff = Math.max(target - now, 0);
    const days = Math.floor(diff / 86400000);
    diff -= days * 86400000;
    const hours = Math.floor(diff / 3600000);
    diff -= hours * 3600000;
    const minutes = Math.floor(diff / 60000);
    diff -= minutes * 60000;
    const seconds = Math.floor(diff / 1000);
    timerEl.textContent = `${days}d ${String(hours).padStart(2,"0")}h ${String(minutes).padStart(2,"0")}m ${String(seconds).padStart(2,"0")}s`;
  }
  update();
  setInterval(update, 1000);
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  });
}

function renderHero() {
  document.getElementById("hero-date").textContent = formatDate(data.event.eventDate);
}

function renderEventDetails() {
  document.getElementById("event-date").textContent = formatDate(data.event.eventDate);
  document.getElementById("event-time").textContent = data.event.eventTime;
  document.getElementById("venue-name").textContent = data.event.venueName;
  document.getElementById("venue-address").textContent = data.event.venueAddress;
  document.getElementById("map-embed").src = data.event.mapEmbedUrl;
}

function renderTheme() {
  document.getElementById("theme").textContent = data.event.theme;
  document.getElementById("dress-code").textContent = data.event.dressCode;
  document.getElementById("dress-code-details").textContent = data.event.dressCodeDetails;
}

function renderProgram() {
  const root = document.getElementById("program");
  root.innerHTML = "";
  data.program.forEach((item, idx) => {
    const div = document.createElement("div");
    div.className = "timeline-item";
    div.innerHTML = `
      <div class="timeline-bullet"></div>
      <div class="timeline-title">${item.title}</div>
      <p class="timeline-desc">${item.description}</p>
    `;
    root.appendChild(div);
  });
}

function renderTraditions() {
  const root = document.getElementById("traditions");
  root.innerHTML = "";
  
  // Order: Row 1: 18 Roses, 18 Candles, traditions.jpg
  //        Row 2: traditions_2.jpg, 18 Blue Bills, 18 Treasures
  const items = [
    { type: "card", title: "18 Roses", icon: "🌹", list: data.traditions.roses, desc: "18 gentlemen for the rose dance" },
    { type: "card", title: "18 Candles", icon: "🕯️", list: data.traditions.candles, desc: "18 ladies sharing wishes and wisdom" },
    { type: "image", src: "assets/traditions.jpg", alt: "Celebrating Traditions" },
    { type: "image", src: "assets/traditions_2.jpg", alt: "Celebrating Traditions" },
    { type: "card", title: "18 Blue Bills", icon: '<span style="color: var(--primary); font-weight: 800; font-size: 20px;">₱</span>', list: data.traditions.bills, desc: "18 special people presenting monetary gifts" },
    { type: "card", title: "18 Treasures", icon: "🎁", list: data.traditions.treasures, desc: "Meaningful gifts from 18 special people" }
  ];
  
  items.forEach((item) => {
    if (item.type === "image") {
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.alt;
      img.className = "tradition-image";
      root.appendChild(img);
    } else {
      const card = document.createElement("div");
      card.className = "card tradition-card";
      card.innerHTML = `
        <div class="tradition-head">
          <div class="icon-wrap">${item.icon}</div>
          <div>
            <h3>${item.title}</h3>
            <p class="muted small">${item.desc}</p>
          </div>
        </div>
        <ol class="tradition-list">
          ${item.list.map((p, i) => `
            <li class="tradition-item">
              <span class="tradition-num">${i + 1}.</span>
              <span>${p.name}</span>
            </li>
          `).join("")}
        </ol>
      `;
      root.appendChild(card);
    }
  });
}

function renderTransport() {
  const root = document.getElementById("transport");
  root.innerHTML = "";
  data.transport.forEach(tip => {
    const card = document.createElement("div");
    card.className = "card transport-card";
    card.innerHTML = `
      <div class="transport-head">
        <div class="transport-icon">${tip.icon}</div>
        <h3>${tip.mode}</h3>
      </div>
      <p class="muted">${tip.description}</p>
    `;
    root.appendChild(card);
  });
}

function renderGiftPreferences() {
  const root = document.getElementById("gift-preferences");
  if (!root) return;
  
  const prefs = data.giftPreferences;
  
  root.innerHTML = `
    <div>
      <p class="muted small">${prefs.note}</p>
    </div>
    <div class="gift-categories">
      ${prefs.categories.map(cat => `
        <div class="gift-category-item">
          <div class="gift-icon">${cat.icon}</div>
            <h4>${cat.category}</h4>
        </div>
      `).join("")}
    </div>
    <div class="divider"></div>
    <div>
      <p class="muted small italic">${prefs.message}</p>
    </div>
  `;
}

function renderFAQ() {
  const root = document.getElementById("faq");
  root.innerHTML = "";
  data.faq.forEach(item => {
    const acc = document.createElement("div");
    acc.className = "accordion-item";
    acc.innerHTML = `
      <div class="accordion-header">
        <span>${item.question}</span>
        <span class="accordion-toggle">+</span>
      </div>
      <div class="accordion-body">${item.answer}</div>
    `;
    acc.querySelector(".accordion-header").addEventListener("click", () => {
      acc.classList.toggle("open");
      acc.querySelector(".accordion-toggle").textContent = acc.classList.contains("open") ? "–" : "+";
    });
    root.appendChild(acc);
  });
}

function renderFooter() {
  document.getElementById("footer-name").textContent = data.event.debutanteName;
  const creditsNamesEl = document.getElementById("credits-names");
  const creditsSection = document.querySelector(".footer-credits");
  
  const names = [];
  if (data.event.photographer) {
    names.push(`📷 ${data.event.photographer}`);
  }
  if (data.event.makeupArtist) {
    names.push(`💄 ${data.event.makeupArtist}`);
  }
  
  if (creditsNamesEl && names.length > 0) {
    // Format each name on a new line
    creditsNamesEl.innerHTML = names.join('<br>');
  } else if (creditsSection) {
    creditsSection.style.display = "none";
  }
}

function setupRSVP() {
  const form = document.getElementById("rsvp-form");
  if (!form) return;

  const details = document.getElementById("rsvp-details");
  const status = document.getElementById("rsvp-status");
  const attendanceInputs = form.querySelectorAll("input[name='attending']");
  const detailFields = details.querySelectorAll("[data-required-yes]");

  function toggleDetails(isAttending) {
    const showDetails = isAttending === "yes";
    details.classList.toggle("hidden", !showDetails);
    detailFields.forEach(input => { input.required = showDetails; });
  }

  attendanceInputs.forEach(input => {
    input.addEventListener("change", (e) => {
      toggleDetails(e.target.value);
      status.textContent = "";
      status.className = "status";
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const attending = form.attending.value;

    status.className = "status";
    status.textContent = "";

    const name = form.name.value.trim();
    const contact = form.contact.value.trim();

    if (!name || !contact) {
      status.textContent = "Please share your name and contact info so we can note your RSVP.";
      status.classList.add("error");
      return;
    }

    if (attending === "yes") {
      const guests = form.guests.value || "1";
      const dietary = form.dietary.value.trim();

      if (!guests || Number(guests) < 1) {
        status.textContent = "Please tell us how many are coming so we can reserve seats.";
        status.classList.add("error");
        return;
      }

      status.textContent = `Thank you, ${name}! We've reserved ${guests} seat(s) for you. We'll follow up via ${contact}.${dietary ? ` Dietary notes: ${dietary}.` : ""}`;
      status.classList.add("success");
    } else if (attending === "no") {
      toggleDetails("no");
      status.textContent = `Thanks, ${name}. We'll miss you at the celebration.`;
      status.classList.add("success");
    } else if (attending === "unsure") {
      toggleDetails("no");
      status.textContent = `Thanks, ${name}. Marking you as tentative—please update us when you can.`;
      status.classList.add("success");
    } else {
      status.textContent = "Please select if you are attending.";
      status.classList.add("error");
      return;
    }

    // Prevent sending if placeholder endpoint is still present
    if (FORMSPREE_ENDPOINT.includes("yourFormId")) {
      status.textContent = "Formspree endpoint is not set yet. Replace it with your form ID.";
      status.classList.add("error");
      return;
    }

    const formData = new FormData(form);
    formData.set("attending", attending);

    status.textContent = "Sending your RSVP…";
    status.className = "status";

    fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    }).then(async (resp) => {
      if (resp.ok) {
        status.textContent = "RSVP received! Thank you.";
        status.classList.add("success");
        form.reset();
        toggleDetails("no");
      } else {
        const msg = (await resp.json().catch(() => ({}))).errors?.[0]?.message;
        status.textContent = msg || "There was a problem sending your RSVP. Please try again.";
        status.classList.add("error");
      }
    }).catch(() => {
      status.textContent = "Network error. Please try again.";
      status.classList.add("error");
    });
  });
}

function renderCountdown() {
  const target = new Date(data.event.eventDate + "T00:00:00");
  const el = document.getElementById("countdown");
  function update() {
    const now = new Date();
    let diff = Math.max(target - now, 0);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * 86400000;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * 3600000;
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * 60000;
    const seconds = Math.floor(diff / 1000);

    el.innerHTML = ["Days", "Hours", "Minutes", "Seconds"].map((label, i) => {
      const val = [days, hours, minutes, seconds][i];
      return `<div class="countdown-box">
        <div class="countdown-value">${String(val).padStart(2, "0")}</div>
        <div class="countdown-label">${label}</div>
      </div>`;
    }).join("");
  }
  update();
  setInterval(update, 1000);
}

// Messages storage - uses Firebase if available, falls back to localStorage
let messagesCache = [];
let messagesListener = null;

function getMessages() {
  return messagesCache;
}

async function loadMessagesFromFirebase() {
  if (!firebaseDb) {
    // Fallback to localStorage if Firebase not configured
    try {
      const stored = localStorage.getItem("debutMessages");
      messagesCache = stored ? JSON.parse(stored) : [];
    } catch (e) {
      messagesCache = [];
    }
    renderMessages();
    return;
  }

  try {
    console.log("Loading messages from Firebase...");
    const snapshot = await firebaseDb.ref("messages").once("value");
    const data = snapshot.val();
    messagesCache = data ? Object.values(data) : [];
    console.log(`Loaded ${messagesCache.length} messages from Firebase`);
    renderMessages();
  } catch (error) {
    console.error("Error loading messages from Firebase:", error);
    console.error("Error details:", error.message, error.code);
    // Fallback to localStorage
    try {
      const stored = localStorage.getItem("debutMessages");
      messagesCache = stored ? JSON.parse(stored) : [];
      console.log(`Falling back to localStorage: ${messagesCache.length} messages`);
    } catch (e) {
      messagesCache = [];
      console.log("No messages in localStorage");
    }
    renderMessages();
  }
}

function setupFirebaseListener() {
  if (!firebaseDb) return;

  // Listen for real-time updates
  messagesListener = firebaseDb.ref("messages").on("value", (snapshot) => {
    const data = snapshot.val();
    messagesCache = data ? Object.values(data) : [];
    renderMessages();
  });
}

async function saveMessage(message) {
  const messageWithId = {
    ...message,
    id: Date.now().toString() + Math.random().toString(36).substr(2, 9)
  };

  if (firebaseDb) {
    try {
      console.log("Saving message to Firebase...");
      await firebaseDb.ref("messages").push(messageWithId);
      console.log("Message saved to Firebase successfully");
      // Message will be added via listener, no need to update cache manually
      return;
    } catch (error) {
      console.error("Error saving to Firebase:", error);
      console.error("Error details:", error.message, error.code);
      // Fallback to localStorage
    }
  }

  // Fallback to localStorage
  try {
    const stored = localStorage.getItem("debutMessages");
    const messages = stored ? JSON.parse(stored) : [];
    messages.push(messageWithId);
    localStorage.setItem("debutMessages", JSON.stringify(messages));
    messagesCache = messages;
  } catch (e) {
    console.error("Error saving to localStorage:", e);
  }
}

function formatMessageDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function renderMessages() {
  const messagesGrid = document.getElementById("messages-grid");
  const noMessages = document.getElementById("no-messages");
  const messageCount = document.getElementById("message-count");
  
  if (!messagesGrid) return;
  
  const messages = getMessages();
  
  if (messageCount) {
    messageCount.textContent = `${messages.length} ${messages.length === 1 ? "message" : "messages"}`;
  }
  
  if (messages.length === 0) {
    if (noMessages) noMessages.style.display = "block";
    messagesGrid.innerHTML = "";
    return;
  }
  
  if (noMessages) noMessages.style.display = "none";
  
  // Sort by date (newest first)
  const sortedMessages = [...messages].sort((a, b) => new Date(b.date) - new Date(a.date));
  
  messagesGrid.innerHTML = sortedMessages.map(msg => `
    <div class="message-card">
      <div class="message-header">
        <span class="message-author">${escapeHtml(msg.name)}</span>
        <span class="message-date">${formatMessageDate(msg.date)}</span>
      </div>
      <div class="message-content">${escapeHtml(msg.message)}</div>
    </div>
  `).join("");
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function setupMessageBoard() {
  const form = document.getElementById("message-form");
  if (!form) return;
  
  const status = document.getElementById("message-status");
  
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    
    if (!name || !message) {
      if (status) {
        status.textContent = "Please fill in your name and message.";
        status.className = "status error";
      }
      return;
    }
    
    if (status) {
      status.textContent = "Posting your message...";
      status.className = "status";
    }
    
    const messageData = {
      name,
      email: email || "Not provided",
      message,
      date: new Date().toISOString()
    };
    
    try {
      // Save to Firebase (or localStorage fallback)
      await saveMessage(messageData);
      
      // Also submit to Formspree for backup/email notifications
      const formData = new FormData();
      formData.append("_subject", "Message for Brisaise's Debut");
      formData.append("name", name);
      formData.append("email", email || "Not provided");
      formData.append("message", message);
      formData.append("type", "guestbook_message");
      
      try {
        await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" }
        });
      } catch (err) {
        // Silently fail - message is already saved
        console.log("Formspree submission failed, but message saved");
      }
      
      // Success
      if (status) {
        status.textContent = "Message posted! Thank you for your kind words.";
        status.className = "status success";
      }
      
      form.reset();
    } catch (error) {
      if (status) {
        status.textContent = "Error posting message. Please try again.";
        status.className = "status error";
      }
    }
    
    // Clear status after 5 seconds
    setTimeout(() => {
      if (status) {
        status.textContent = "";
        status.className = "status";
      }
    }, 5000);
  });
  
  // Load messages and set up real-time listener
  loadMessagesFromFirebase();
  setupFirebaseListener();
}

function init() {
  renderHero();
  renderEventDetails();
  renderTheme();
  renderProgram();
  renderTraditions();
  renderTransport();
  renderGiftPreferences();
  renderFAQ();
  renderFooter();
  renderCountdown();
  renderTopBannerCountdown(); // add this
  setupRSVP();
  setupMessageBoard();
}

document.addEventListener("DOMContentLoaded", init);