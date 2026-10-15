# Mydhili Boutique — Data Schema & Model Specification

> **Version:** 1.0.0  
> **Target Audience:** Backend Developers, Full-Stack Engineers, API Architects  
> **Source References:** [`src/data/products.js`](file:///c:/CODE/FL/mydhili/src/data/products.js), [`src/context/ShopContext.jsx`](file:///c:/CODE/FL/mydhili/src/context/ShopContext.jsx)

---

## 1. Overview

This document specifies the data models, TypeScript interfaces, and entity relationships used across Mydhili Boutique. When connecting the frontend to a headless e-commerce backend (e.g., MedusaJS, Shopify Storefront API, or custom Supabase/PostgreSQL database), this schema serves as the contract.

---

## 2. TypeScript Type Definitions

### 2.1 Product Entity (`Product`)

```typescript
export type ProductCategory = 
  | 'Bridal Couture'
  | 'Kanchipuram Silks'
  | 'Banarasi Brocades'
  | 'Kerala Kasavu'
  | 'Festive Silks'
  | 'Bespoke Blouses';

export type ProductBadge = 
  | 'Atelier Heirloom'
  | 'Master Weaver Series'
  | 'Bestseller'
  | 'Heritage Handloom'
  | 'Bridal Favorite'
  | 'Atelier Signature';

export interface Product {
  /** Unique SKU identifier (e.g. 'mb-001') */
  id: string;

  /** Full editorial garment title */
  name: string;

  /** Descriptive subtitle highlighting weave technique or embroidery */
  subtitle: string;

  /** Primary textile collection category */
  category: ProductCategory;

  /** Search & filter tag */
  tag: string;

  /** Visual status pill displayed over cards */
  badge: ProductBadge;

  /** Retail price in Indian Rupees (INR) */
  price: number;

  /** Comparative retail price in Indian Rupees (INR) for strike-through */
  originalPrice: number;

  /** Client satisfaction rating (out of 5.0) */
  rating: number;

  /** Total count of authenticated client reviews */
  reviewCount: number;

  /** Technical fabric breakdown (e.g., '100% Pure Mulberry Silk') */
  fabric: string;

  /** Narrative detailing artisan hours and needlework methods */
  craftsmanship: string;

  /** Human-readable color name */
  color: string;

  /** Approximate hex code for swatch preview */
  colorHex: string;

  /** Dispatch or bespoke tailoring turnaround window */
  deliveryTime: string;

  /** Indicates whether the garment is custom-tailored on demand */
  isMadeToOrder: boolean;

  /** Array of available standard sizes or custom fit options */
  availableSizes: string[];

  /** Array of high-resolution image URLs */
  images: string[];

  /** Poetic editorial narrative describing the garment */
  description: string;

  /** Official textile care, cleaning, and storage instructions */
  careInstructions: string;
}
```

### 2.2 Cart Line Item (`CartItem`)

Extends `Product` with user-selected configuration:

```typescript
export interface CartItem extends Product {
  /** Client-selected size (e.g. 'Custom Bridal Fit' or 'Free Size') */
  selectedSize: string;

  /** Number of units ordered */
  quantity: number;
}
```

### 2.3 Client Consultation Appointment (`Consultation`)

```typescript
export interface Consultation {
  /** Unique consultation tracking ID (e.g. 'CONS-9481') */
  id: string;

  /** Appointment date formatted as ISO 'YYYY-MM-DD' */
  date: string;

  /** Appointment time slot (e.g. '11:30 AM IST') */
  time: string;

  /** Category of consultation */
  type: 
    | 'Private Bridal Atelier Consultation'
    | 'In-Atelier Private Sketch Session (Chennai)'
    | 'Virtual Diaspora Bridal Video Session';

  /** Current booking status */
  status: 
    | 'Pending Review'
    | 'Confirmed by Senior Couturier'
    | 'Completed'
    | 'Rescheduled';
}
```

### 2.4 Sovereign Client Profile (`ClientProfile`)

```typescript
export interface ClientProfile {
  /** Client's full legal name */
  name: string;

  /** Primary email address for appointment confirmations & order invoices */
  email: string;

  /** Contact telephone number with country code */
  phone: string;

  /** Session authentication flag */
  isLoggedIn: boolean;

  /** Default shipping address */
  address: string;

  /** List of booked or historical atelier consultations */
  consultations: Consultation[];
}
```

### 2.5 Completed Order Confirmation (`Order`)

```typescript
export interface Order {
  /** Generated unique order reference (e.g. 'MYD-819204') */
  orderId: string;

  /** Order total in Indian Rupees (INR) */
  total: number;

  /** Date of order placement */
  date: string;

  /** Brief description or array of items purchased */
  items: string | CartItem[];

  /** Delivery status */
  status: 
    | 'Processing in Atelier'
    | 'Under Artisan Quality Check'
    | 'Shipped via Insured Air Courier'
    | 'Delivered in Keepsake Box';

  /** Airway bill or courier tracking identifier */
  tracking: string;
}
```

---

## 3. Sample Product Record

From [`src/data/products.js`](file:///c:/CODE/FL/mydhili/src/data/products.js):

```json
{
  "id": "mb-001",
  "name": "The Maharani Imperial Zardozi Bridal Lehenga",
  "subtitle": "12-Kali Bridal Lehenga with Bullion Gold Wire Needlework",
  "category": "Bridal Couture",
  "tag": "Bridal Couture",
  "badge": "Atelier Heirloom",
  "price": 185000,
  "originalPrice": 210000,
  "rating": 5.0,
  "reviewCount": 18,
  "fabric": "Pure Mulberry Silk & Velvet Organza",
  "craftsmanship": "380 hours of hand needlework, beaten gota patti, real zardozi metal bullion wire, dabka, and pearl florets.",
  "color": "Imperial Burgundy & Antique Gold",
  "colorHex": "#380712",
  "deliveryTime": "Made to Order (6 - 8 Weeks)",
  "isMadeToOrder": true,
  "availableSizes": ["Custom Bridal Fit", "S", "M", "L", "XL"],
  "images": [
    "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85"
  ],
  "description": "An opus of South Asian imperial bridal heritage. Hand-dyed deep burgundy mulberry silk canvas laden with intricately drawn Mughal jaal motifs in antique beaten gold bullion wire and authentic zardozi embroidery.",
  "careInstructions": "Strictly dry clean only. Store wrapped in pure unbleached mulmul cotton within the Mydhili Keepsake Chest."
}
```

---

## 4. LocalStorage Key Catalog

The application maintains the following keys in `window.localStorage`:

| Storage Key | Data Format | Description |
| :--- | :--- | :--- |
| `mydhili_cart` | `Array<CartItem>` | Persists active shopping bag items and quantities across reloads. |
| `mydhili_wishlist` | `Array<string>` | Persists array of saved product ID strings (e.g. `['mb-001', 'mb-002']`). |
| `mydhili_user` | `ClientProfile` | Persists client demo profile, addresses, and consultation bookings. |
