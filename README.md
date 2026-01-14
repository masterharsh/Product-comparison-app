This is an assessment task by Addteq.

### Author: Harsh Jain

Task: Build a Mobile Comparison UI.

An interactive, responsive web application that allows users to compare multiple products side-by-side.
Built using **React**, this project focuses on clean UX, dynamic UI rendering, and user-centric interaction design.

## Features

### Product Listing

- Displays a grid of mobile phones
- Each product includes:
  - Name & brand
  - Image
  - Price
  - Key features (battery, screen size, camera, etc.)
- “Add to Compare” action button on each product card.

### Compare Functionality

- Users can select **up to 3 products** for comparison
- Comparison panel appears at the top **only when at least 2 products are selected**.
- Side-by-side comparison of attributes.
- Visual highlighting for differing values.
- Individual remove option for products.
- One-click **Clear All** action.
- A compare-widget on the screen to move to the comparison area.

### Responsive Design

- Optimized for desktop, tablet, and mobile screens.
- Comparison view adapts gracefully on smaller devices.

---

## 🧠 UX Highlights

- Clear visual hierarchy and spacing.
- Disabled state when comparison limit is reached.
- Conditional rendering avoids UI clutter.
- Difference highlighting improves decision-making.
- Mobile comparison view optimized for readability.
- Dark/Light mode feature is provided.

---

## 🧰 Tech Stack

- **React** (Functional Components & Hooks)
- **Parcel JS** (Zero-config bundler)
- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **localStorage** (to persist comparison data)

---

## 📦 Project Setup

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1- git clone https://github.com/masterharsh/Product-comparison-app.git
2- cd Product-comparison-app
3- npm install
4- npm run start
