// script.js

const codeDisplay = document.getElementById("codeDisplay");
const projectTitle = document.getElementById("projectTitle");
const projectImg = document.getElementById("projectImg");
const introScreen = document.getElementById("introScreen");
const book = document.querySelector(".book");

const projects = [
  { name: "Reseni-jizni-cechy", folder: "project-1", img: "ukazka-vysledku.jpg" },
  { name: "Reseni-cheesecake", folder: "project-2", img: "ukazka-vysledku.jpg" },
  { name: "Reseni-kreativni-blog", folder: "project-3", img: "ukazka-vysledku.jpg" },
  { name: "Reseni-moda", folder: "project-4", img: "ukazka-vysledku.jpg" },
  { name: "Reseni-pozicovani", folder: "project-5", img: "ukazka-vysledku.jpg" },
  { name: "Reseni-yoga", folder: "project-6", img: "ukazka-vysledku.jpg" },
  { name: "Reseni-zakusky", folder: "project-7", img: "ukazka-vysledku.jpg" },
  { name: "Reseni-registrace", folder: "project-8", img: "ukazka-vysledku.jpg" },
  { name: "Reseni-pseudoprvky", folder: "project-9", img: "ukazka-vysledku.jpg" },
  { name: "Czechitas-multipage-example", folder: "project-10", img: "ukazka-vysledku.jpg" },
  { name: "New-project-html-a-css", folder: "project-11", img: "ukazka-vysledku.jpg" },
  { name: "Html-css-zaverecny-projekt", folder: "project-12", img: "ukazka-vysledku.jpg" }
];

let currentIndex = 0;

// Aktualizace aktuálního projektu
function updateProject() {
  const project = projects[currentIndex];
  
  projectTitle.textContent = project.name;
  projectImg.src = `projects/${project.folder}/${project.img}`;

  // Pokud se obrázek nenačte
  projectImg.onerror = () => {
    projectImg.src = "placeholder.jpg";
  };

  codeDisplay.textContent = "Objevte HTML nebo CSS";
}

// Zobrazit knihu (skrýt úvodní obrazovku)
function showBook() {
  introScreen.style.display = "none";
  book.style.display = "flex";
}

// Vrátit se na úvodní obrazovku
function showIntro() {
  book.style.display = "none";
  introScreen.style.display = "flex";
}

// Načtení kódu (HTML nebo CSS)
async function showCode(type) {
  const project = projects[currentIndex];
  const filename = type === "html" ? "index.html" : "style.css";
  const filePath = `projects/${project.folder}/${filename}`;

  try {
    const res = await fetch(filePath);
    
    if (!res.ok) throw new Error("Soubor nenalezen");

    let text = await res.text();
    
    // Odstranění odpadu od live-serveru
    text = text.replace(/<!-- Code injected by live-server[\s\S]*?<\/script>/gi, "");
    
    codeDisplay.textContent = text.trim();
  } catch (err) {
    console.error(err);
    codeDisplay.textContent = `Soubor nenalezen:\n${filePath}`;
  }
}

// ==================== OBSLUŽNÉ FUNKCE TLAČÍTEK ====================

// Tlačítka HTML a CSS
document.getElementById("htmlBtn").addEventListener("click", () => showCode("html"));
document.getElementById("cssBtn").addEventListener("click", () => showCode("css"));

// Další projekt
document.getElementById("nextProject").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % projects.length;
  updateProject();
});

// Předchozí projekt (při indexu 0 — návrat na titulní stránku)
document.getElementById("prevProject").addEventListener("click", () => {
  if (currentIndex === 0) {
    showIntro();
  } else {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateProject();
  }
});

// Tlačítko "Kopírovat"
const copyBtn = document.getElementById("copyBtn");
copyBtn.addEventListener("click", async () => {
  const text = codeDisplay.textContent;
  if (!text || text === "Objevte HTML nebo CSS") return;

  try {
    await navigator.clipboard.writeText(text);
    const originalText = copyBtn.textContent;
    copyBtn.textContent = "Copied!";
    setTimeout(() => {
      copyBtn.textContent = originalText;
    }, 1500);
  } catch (err) {
    console.error("Chyba při kopírování:", err);
  }
});

// Tlačítko pro otevření z titulní stránky
document.getElementById("openBtn").addEventListener("click", () => {
  currentIndex = 0;
  updateProject();
  showBook();
});

// Inicializace při načtení stránky
book.style.display = "none";
updateProject();

console.log("Script byl úspěšně načten! ✅");