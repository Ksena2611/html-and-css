# Kniha projektů (HTML & CSS Portfolio)

Interaktivní webové portfolio navržené jako digitální kniha, které slouží k prezentaci mých projektů v oblasti front-end vývoje. Aplikace umožňuje plynule listovat mezi jednotlivými pracemi, prohlížet si jejich vizuální náhledy a dynamicky zobrazovat zdrojový kód (HTML a CSS) pro každý projekt.

## 🚀 Klíčové vlastnosti aplikace

- **Dynamické načítání kódu:** Pomocí asynchronního JavaScriptu (`fetch API`) aplikace stahuje reálné zdrojové soubory (`index.html` a `style.css`) přímo z adresářové struktury projektů.
- **Interaktivní navigace:** Uživatelské rozhraní stylizované do podoby staré knihy s úvodní obrazovkou a možností listování dopředu i dozadu.
- **Čištění kódu za běhu:** Skript automaticky detekuje a odstraňuje injektovaný kód z vývojářského nástroje `live-server`, aby personalistům zobrazil čistý zdrojový kód.
- **Integrované kopírování:** Možnost zkopírovat zobrazený kód jedním kliknutím přímo do schránky s vizuální odezvou na tlačítku.
- **Ošetření chyb:** Pokud chybí náhledový obrázek nebo zdrojový soubor, skript automaticky nasadí zástupný text (`placeholder`) a informuje uživatele, aniž by došlo k pádu aplikace.
- **Plná responzivita:** Portfolio je plně optimalizováno pro stolní počítače, notebooky a mobilní zařízení (včetně specifických úprav pro prohlížeč Safari na iOS).

## 🛠️ Použité technologie

- **HTML5:** Struktura knižního rozhraní.
- **CSS3:** Pokročilé větvení stylů, flexbox, grid, animace a responzivní design (`@media` dotazy).
- **Vanilla JavaScript:** Kompletní logika aplikace (asynchronní funkce, manipulace s DOM, správa stavu pomocí `currentIndex`, obsluha událostí `addEventListener`).
- **Node.js (HTTP Server):** Lokální backendové prostředí pro správné odbavení asynchronních požadavků bez konfliktů s CORS politikou.

## 📁 Struktura složek projektů

Pro správné fungování asynchronního načítání jsou projekty organizovány v následující struktuře:

```text
/
├── projects/
│   ├── project-1/
│   │   ├── index.html
│   │   ├── style.css
│   │   └── ukazka-vysledku.jpg
│   ├── project-2/
│   └── ...
├── index.html       # Hlavní rozhraní portfolia
├── style.css        # Globální a responzivní styly knihy
├── script.js        # Logika správy a načítání projektů
└── server.js        # Node.js konfigurace lokálního serveru



💻 Jak projekt spustit lokálně
Naklonujte si tento repozitář.

Vzhledem k použití fetch API pro načítání lokálních souborů je nutné projekt spustit přes lokální server, jinak prohlížeč zablokuje požadavky z důvodu CORS politiky.

Pro spuštění lokálního serveru využívám Node.js. V kořenovém adresáři projektu spusťte v terminálu příkaz:

Bash
node server.js

Otevřete prohlížeč na adrese uvedené v konzoli (např. http://localhost:3000). Při spuštění přes Node.js server nebo po nasazení na GitHub Pages funguje aplikace plně automaticky.
