# Food Fest Ticket Landing Page

A modern, interactive Vue.js landing page for Cape Town Food Fest ticket sales. This single-page application showcases three ticket tiers (Bronze, Silver, Gold) with pricing, benefits, and an interactive favourite feature.

## 🎯 Project Overview

This landing page is built to help potential attendees explore and engage with different ticket options for the Cape Town Food Fest. The application features:

- **Three Ticket Tiers**: Bronze, Silver, and Gold with distinct pricing and benefits
- **Featured Tier Highlight**: The Silver tier is prominently featured with special styling
- **Interactive Favourite System**: Users can mark tickets as favorites, with a real-time counter
- **Responsive Design**: Fully functional on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations and transitions

## ✨ Key Features

✅ Reusable ticket card components  
✅ Dynamic data management with Vuex  
✅ Featured tier visual highlighting  
✅ Favourite tracking with state management  
✅ Fully responsive layout (mobile-first)  
✅ Smooth hover animations and transitions  
✅ Call-to-action buttons for ticket purchase (UI-ready)  
✅ Professional color scheme and typography

## 🛠️ Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Next-generation frontend build tool
- **Vuex 4** - State management for Vue 3
- **CSS 3** - Modern responsive styling

## 📋 Prerequisites

- Node.js (v22.18.0 or v24.12.0+)
- npm or yarn

## 🚀 Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the Vite-configured port).

### 3. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### 4. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   └── TicketCard.vue        # Reusable ticket card component
├── stores/
│   └── index.js              # Vuex store with ticket data
├── assets/
│   ├── main.css              # Global styles
│   └── base.css              # Base/reset styles
├── App.vue                   # Main application component
└── main.js                   # Application entry point
```

## 🎨 Features in Detail

### Ticket Tiers

**Bronze Tier** - $49/ticket

- Basic event access with food tasting vouchers
- Perfect for food enthusiasts

**Silver Tier** - $89/ticket ⭐ (Featured)

- Premium seating and enhanced benefits
- Most popular choice with early entry
- Highlighted with special styling

**Gold Tier** - $149/ticket

- VIP experience with exclusive perks
- Unlimited vouchers and meet-and-greet opportunities

### Interactive Elements

- **Favourite Button**: Click the heart icon to mark a ticket as favorite
- **Favourite Counter**: Real-time display of selected favorites in the header
- **Call-to-Action Button**: "Buy Now" button on each card (ready for integration)

## 🎯 Component Architecture

### TicketCard Component

Reusable component that accepts a ticket object and emits favourite toggle events.

**Props:**

- `ticket` (Object): Ticket data including name, price, benefits, etc.

**Events:**

- `toggle-favourite`: Emitted when user clicks the favourite button

## 💾 State Management (Vuex)

### State

- `tickets`: Array of ticket tier objects

### Mutations

- `TOGGLE_FAVOURITE`: Updates favourite status for a ticket

### Actions

- `toggleFavourite`: Public action to toggle favourite state

### Getters

- `allTickets`: Returns all ticket tiers
- `favouriteTickets`: Returns only favourited tickets
- `favouriteCount`: Returns count of favourited tickets

## 📱 Responsive Breakpoints

- **Desktop**: Full-width grid layout (3 columns)
- **Tablet** (≤768px): 1-2 column layout with adjusted padding
- **Mobile** (≤480px): Single column layout with optimized typography

## 🎬 Getting Started Quick Guide

1. Clone or download the repository
2. Open terminal in the project directory
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start development server
5. Open browser to `http://localhost:5173`
6. Explore the ticket tiers and try the favourite feature!

## 🚀 Future Enhancements

The following features could be added as stretch goals:

- Sorting/filtering by price or tier type
- Integration with payment gateway for actual ticket purchases
- Animations on hover and favourite interactions
- Dark/light mode toggle
- Email notifications for updates
- Promotional codes/discount system

## 📝 Success Criteria ✓

✅ Ticket tiers render dynamically from Vuex store  
✅ Featured tier (Silver) has distinct styling  
✅ Favourite interaction works with state updates  
✅ Layout is fully responsive across all screen sizes  
✅ Professional, event-like design and feel  
✅ No console or runtime errors

## 📞 Support

For questions or issues, please refer to the project files or contact the development team.

## 📄 License

This project is part of the Module 1 Frontend Web Development exercise.

---

**Built with ❤️ using Vue 3 and Vite**
