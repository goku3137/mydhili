# Mydhili Boutique — Brand Identity & Design System Specification

> **Version:** 1.0.0  
> **Target Audience:** UI/UX Designers, Frontend Engineers, Brand Custodians  
> **Source References:** [`src/index.css`](file:///c:/CODE/FL/mydhili/src/index.css), [`src/components/MydhiliLogo.jsx`](file:///c:/CODE/FL/mydhili/src/components/MydhiliLogo.jsx), [`index.html`](file:///c:/CODE/FL/mydhili/index.html)

---

## 1. Brand Philosophy & Narrative

### 1.1 The Meaning of "Mydhili"
Rooted in the ancient Sanskrit patronymic for **Goddess Sita** (*daughter of King Janaka of Mithila*), **Mydhili** (മൈഥിലി / மைதிலி) embodies:
- **Graceful Sovereignty:** Regal elegance without ostentation.
- **Auspicious Purity:** Sacred craftsmanship honored during weddings and auspicious milestones.
- **Generational Lineage:** Textiles woven to be preserved as family heirlooms passed from mother to daughter.

### 1.2 The Brand Voice
- **Tone:** Reverent, refined, poetic, authoritative yet deeply warm and hospitable.
- **Key Lexicon:** *Heirloom, Imperial, Zardozi, Kadwa, Korvai, Kasavu, Keepsake Chest, Atelier, Connoisseur, Bullion Wire, Master Weaver.*
- **Avoid:** Disposable fast-fashion idioms (e.g., "cheap", "grab deal", "flash sale", "trending drops").

---

## 2. Master Luxury Color Palette

The visual identity follows a classical **60-15-20-5 luxury distribution rule** to ensure rich contrast and opulent warmth:

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│ Imperial Burgundy (60%) │ Sovereign Gold (15%) │ Champagne Silk (20%) │ Vintage Gulabi (5%) │
│        #380712          │       #D4AF37        │       #FAF7F2        │       #B87376       │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Color Tokens & CSS Variables

| Token Name | Hex Code | CSS Variable | Proportion | Usage & Role |
| :--- | :--- | :--- | :--- | :--- |
| **Imperial Burgundy** | `#380712` | `--color-burgundy` | **60% Core** | Editorial hero backdrops, primary buttons, headers, footer base, packaging. |
| **Burgundy Deep** | `#25040b` | `--color-burgundy-deep` | Shade | Hero overlays, depth gradients, footer borders. |
| **Burgundy Light** | `#4e0a19` | `--color-burgundy-light` | Tint | Button hover states, subtle card headers. |
| **Sovereign Gold** | `#D4AF37` | `--color-gold` | **15% Foil** | Metallic accents, monogram crest, badges, active tabs, buttons. |
| **Gold Hover** | `#b89326` | `--color-gold-hover` | Shade | Interactive focus and active states. |
| **Gold Light** | `#f5e9be` | `--color-gold-light` | Tint | Eyebrow badges on dark backgrounds, subtle highlights. |
| **Gold Muted** | `rgba(212, 175, 55, 0.25)` | `--color-gold-muted` | Alpha | Subtle 1px borders, avatar badges, dividers. |
| **Champagne Silk** | `#FAF7F2` | `--color-silk` | **20% Canvas** | Body background, editorial parchment, paper texture surrogate. |
| **Silk Card Surface** | `#FFFFFF` | `--color-silk-card` | Surface | Elevated product cards, consultation modals, drawer panels. |
| **Silk Border** | `#EFE8DC` | `--color-silk-border` | Border | Subtle container dividers, inputs, table borders. |
| **Vintage Gulabi** | `#B87376` | `--color-gulabi` | **5% Accent** | Pret linings, wishlist heart active state, secondary tags. |
| **Deep Velvet Onyx** | `#2D2325` | `--color-onyx` | Text | Primary typography color, high-contrast readable darks. |
| **Onyx Muted** | `#665b5e` | `--color-onyx-muted` | Subtext | Secondary metadata, timestamps, delivery notes, subtitles. |

---

## 3. Typography Hierarchy

Mydhili couples an editorial high-contrast serif font with a clean, widely tracked geometric sans-serif:

```
Headings & Display:      Cormorant Garamond (Serif)
Navigation & Metadata:   Montserrat (Sans-Serif, Uppercase, Wide Tracking)
Body Copy & Content:     Montserrat (Sans-Serif, Regular / Light)
```

### 3.1 Font Families

- **Primary Serif:** `'Cormorant Garamond', Georgia, 'Times New Roman', serif`
  - Loaded via Google Fonts: Weights `300`, `400`, `500`, `600`, `700`, italic.
  - Used for: Brand slogans, section titles (`h1`, `h2`, `h3`, `h4`), product names, quotation blocks.
- **Secondary Sans:** `'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
  - Loaded via Google Fonts: Weights `200`, `300`, `400`, `500`, `600`, `700`.
  - Used for: Navigation links, buttons, badge chips, prices, technical specifications, form inputs.

### 3.2 Typography Scale & Style Tokens

| Element | Font Family | Size | Weight | Tracking (Letter Spacing) | Transform |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Page Display Hero** | Cormorant Garamond | `clamp(2.6rem, 5vw, 4.4rem)` | 400 | `0.02em` | Normal |
| **Section Header (H2)** | Cormorant Garamond | `2.4rem - 3.2rem` | 400 / 500 | `0.02em` | Normal |
| **Card / Item Title (H3)**| Cormorant Garamond | `1.4rem - 1.8rem` | 500 | `0.01em` | Normal |
| **Eyebrow Label** | Montserrat | `0.72rem` | 600 | `0.22em` | UPPERCASE |
| **Navigation Links** | Montserrat | `0.78rem` | 500 | `0.14em` | UPPERCASE |
| **Luxury Buttons** | Montserrat | `0.78rem` | 500 / 600 | `0.16em` | UPPERCASE |
| **Product Subtitle** | Montserrat | `0.82rem` | 400 | `0.04em` | Normal |
| **Body Paragraph** | Montserrat | `0.92rem - 1.05rem` | 300 / 400 | `-0.01em` | Normal |
| **Price Display** | Montserrat | `1.15rem - 1.6rem` | 600 | `0.05em` | Normal |

---

## 4. Sacred Monogram & Vector Crest Architecture

The brand crest implemented in [`src/components/MydhiliLogo.jsx`](file:///c:/CODE/FL/mydhili/src/components/MydhiliLogo.jsx) is an intricate parametric SVG with five symbolic elements:

```
                     ┌─── (1) Five-Petal Jasmine (Gajra) Crown ───┐
                     │              *   *   *                      │
                     │                *   *                        │
  (2) Classical      │        ╭───────────────────╮                │
      Architectural  │        │                   │ (3) Cascading  │
      Serif Stem     │        │                   │     Silk Pallu │
      (Temple Pillar)│        │                   ╰──────╮  Drapes │
                     │        │                          │         │
                     │        │                 (4) Jhumka Earring │
                     │        │                      ▼             │
                     └────────┴────────────────────────────────────┘
                              M  Y  D  H  I  L  I
                       ───   B O U T I Q U E   ───
```

### 4.1 Monogram Component Anatomy
1. **The Jasmine Blossom (*Gajra*) Crown:** Represents bridal auspiciousness and freshness. Positioned at the pinnacle with 5 radiating petals.
2. **The Left Architectural Serif Stem:** Evokes ancient South Indian temple granite pillars and the bold vertical stroke of a serif capital "M".
3. **The Cascading Silk Drapes:** Flowing curved paths along the right flank mimicking the pleated pallu drape of a Kanchipuram bridal saree.
4. **The Dangling Jhumka Bell:** A stylized bell earring with 3 pearl drops dangling beneath the silhouette drape, celebrating traditional South Asian fine jewelry.
5. **Hairline Balance Rules:** `0.75px` horizontal rules flanking the spaced-out word `B O U T I Q U E` (`letter-spacing: 0.38em`).

### 4.2 Component Props & Variants

```jsx
<MydhiliLogo 
  variant="gold"     // Options: 'gold' | 'burgundy' | 'white' | 'dark'
  layout="full"      // Options: 'full' (crest + text) | 'crest' | 'wordmark'
  height={54}        // Numeric height in px
  className="my-logo"// Additional CSS class
/>
```

---

## 5. Luxury Component Styling System

All interactive components use defined classes in `src/index.css`:

### 5.1 Button Hierarchy

#### 1. `.btn-luxury-primary` (The Sovereign Button)
- **Background:** Imperial Burgundy (`#380712`)
- **Text:** Champagne Silk (`#FAF7F2`)
- **Hover State:** Shifts smoothly to Sovereign Gold (`#D4AF37`) with Burgundy text and gold ambient glow shadow:
  ```css
  box-shadow: 0 8px 24px rgba(212, 175, 55, 0.3);
  transform: translateY(-2px);
  ```

#### 2. `.btn-luxury-outline` (The Tailored Border)
- **Background:** Transparent
- **Border:** `1px solid var(--color-burgundy)`
- **Hover State:** Inverts to solid burgundy background with silk text.

#### 3. `.btn-luxury-gold` (The High-Value Action)
- **Background:** Sovereign Gold (`#D4AF37`)
- **Text:** Imperial Burgundy (`#380712`)
- **Hover State:** `#e5c352` with expanded gold shadow `0 8px 25px rgba(212, 175, 55, 0.4)`.

#### 4. `.btn-luxury-ghost-gold` (Editorial Secondary Action)
- **Background:** Transparent
- **Border:** `1px solid rgba(212, 175, 55, 0.6)`
- **Text:** Sovereign Gold
- **Hover State:** Solid Sovereign Gold background with Burgundy text.

### 5.2 Luxury Utilities

- **`.gold-rule`:** A 1px hairline horizontal divider with a radial gradient fade:
  ```css
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-gold), transparent);
  ```
- **`.gold-border`:** `1px solid rgba(212, 175, 55, 0.3)` for subtle luxury container framing.
- **`.gold-text-glow`:** Soft metallic typography halo:
  ```css
  text-shadow: 0 0 12px rgba(212, 175, 55, 0.4);
  ```
- **`.eyebrow`:** Small, bold, wide-tracked uppercase tags (`font-size: 0.72rem`, `letter-spacing: 0.22em`, `color: var(--color-gold)`).

---

## 6. Motion & Animation Principles

- **Easing Function:** `cubic-bezier(0.16, 1, 0.3, 1)` (snappy ease-out mimicking premium physical surfaces).
- **Duration:**
  - Micro-interactions (hover, color transitions): `0.35s`.
  - Drawer slide-ins: `0.35s`.
  - Page entry fade: `0.6s` (`.animate-fade-in`).
- **Celebratory Moments:** Multi-colored foil confetti (`canvas-confetti`) triggered on bridal appointment confirmations and successful order checkouts (`['#380712', '#D4AF37', '#FAF7F2']`).

---

## 7. Responsive Breakpoint Standards

| Device Class | Viewport Range | Core Layout Adjustments |
| :--- | :--- | :--- |
| **Desktop Ultra** | `> 1440px` | Max-width content boundaries (`1440px`), generous `90px - 120px` section paddings. |
| **Desktop Standard** | `1024px - 1440px` | 3-column / 4-column product grids, persistent horizontal navigation. |
| **Tablet** | `768px - 1023px` | 2-column product grids, compact padding, 2-column checkout summary. |
| **Mobile** | `480px - 767px` | 1-column product detail stack, 100% width button spans, hamburger overlay menu drawer, sticky bottom action bars. |
| **Ultra-Compact** | `< 480px` | Root base `font-size: 14px`, compact header padding (`8px 12px`), reduced monogram scale. |
