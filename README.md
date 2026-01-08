# Developong Services - React Component

A modern, animated services section built with React and Framer Motion.

## Features

- ✅ Framer Motion animations (fade-up & stagger)
- ✅ Responsive 2-column grid (1-column on mobile)
- ✅ Clean agency-style design
- ✅ Card hover effects
- ✅ Smooth scroll-triggered animations
- ✅ Modern gradient background

## Installation

```bash
npm install
```

## Run Development Server

```bash
npm start
```

Opens on http://localhost:3000

## Dependencies

- React 18.2+
- Framer Motion 10.16+
- react-dom 18.2+

## Component Usage

```jsx
import ServicesSection from './ServicesSection';

function App() {
  return (
    <div>
      <ServicesSection />
    </div>
  );
}
```

## Customization

Edit the `services` array in `ServicesSection.jsx` to add/modify services:

```javascript
const services = [
  {
    title: "Your Service",
    desc: "Service description here."
  }
];
```

## Animation Features

- **Stagger**: Cards animate sequentially with 0.15s delay between each
- **Fade-up**: Elements start 30px below and fade in
- **Hover**: Cards lift 8px on hover with enhanced shadow
- **Viewport triggers**: Animations play once when scrolling into view

## Styling

All styles are inline (CSS-in-JS) for easy portability. Modify the `styles` object in `ServicesSection.jsx` to customize colors, spacing, shadows, etc.

## Browser Support

Modern browsers supporting CSS Grid, Flexbox, and Intersection Observer API.
