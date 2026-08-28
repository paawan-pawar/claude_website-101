# FreshCart - Grocery Ecommerce Website

A modern, premium, and fully responsive grocery ecommerce website built with React and Tailwind CSS.

## Features

- ✨ **Modern UI/UX**: Clean, professional design with smooth animations
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Premium Design**: SaaS-style layout with gradients and modern styling
- 🚀 **Fast Performance**: Optimized React components
- 💅 **Tailwind CSS**: Utility-first CSS framework for rapid development

## Sections

1. **Hero Section** - Eye-catching introduction with CTA buttons
2. **Navbar** - Sticky, responsive navigation with mobile menu
3. **Features** - Showcase key platform benefits with icon cards
4. **How It Works** - 3-step process visualization
5. **About/Why Choose Us** - Platform benefits and mission
6. **Testimonials** - Customer reviews with ratings
7. **Pricing** - 3-tier pricing plans (Basic, Pro, Enterprise)
8. **FAQ** - Interactive accordion for common questions
9. **Footer** - Comprehensive footer with links and newsletter

## Technology Stack

- **React** - Frontend framework
- **Tailwind CSS** - Styling
- **JavaScript (ES6+)** - Programming language

## Installation

1. Navigate to the project directory:
```bash
cd grocery-ecommerce
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and visit:
```
http://localhost:3000
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
grocery-ecommerce/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── About.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Pricing.jsx
│   │   ├── FAQ.jsx
│   │   └── Footer.jsx
│   ├── App.js
│   ├── index.css
│   └── index.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Content
Update component files in `src/components/` to modify text, images, and features.

### Animations
Modify animations in `tailwind.config.js` under the `extend` section.

## Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deploy to Netlify
1. Run `npm run build`
2. Drag and drop the `build` folder to Netlify

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

For questions or support, reach out to our team.

---

Built with ❤️ using React and Tailwind CSS
