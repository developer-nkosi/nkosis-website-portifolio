# Developer Nkosi Portfolio

A modern, responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript. Features a 3D animated particle wave background, interactive tilt effects, automatic dark mode, and a clean glassmorphism design.

## Live Demo

[View Portfolio](https://developer-nkosi.github.io/nkosis-website-portifolio/)

## Features

- Responsive design (mobile, tablet, desktop)
- Automatic light/dark mode (follows system preference)
- 3D animated particle wave background (Three.js)
- Interactive tilt hover effects (Vanilla Tilt.js)
- Glassmorphism navigation, footer, and About Me section
- Floating scroll-to-top button
- Animated hamburger menu (mobile) with slide-in drawer
- Smooth scroll navigation
- Contact form with pill-shaped button
- Clickable social icons (email, LinkedIn, GitHub)
- Skills showcase with categorized cards
- Project gallery with hover overlays
- Resume download section
- Frosted glass About Me text for readability

## Tech Stack

| Category | Technology |
|----------|------------|
| Markup | HTML5 |
| Styling | CSS3 (Custom Properties, Flexbox, Grid, Backdrop-filter, Dark Mode) |
| Animation | Three.js (r128) |
| Tilt Effects | Vanilla Tilt.js (1.8.1) |
| Icons | Font Awesome (6.4.0), DevIcons |
| Language | Vanilla JavaScript |

## Design Approach

- **Color System**: CSS custom properties with automatic dark mode via `prefers-color-scheme`
- **Layout**: CSS Grid for project/skill cards, Flexbox for navigation and sections
- **Effects**: Backdrop-filter blur (glassmorphism), 3D transforms, smooth transitions
- **Readable Overlays**: Frosted glass backgrounds on text over animated backgrounds
- **Responsive**: Mobile-first with breakpoints at 576px, 768px, and 992px
- **Animations**: Keyframe animations, hover transitions, Three.js particle wave
- **Dark Mode**: Automatic detection of system light/dark preference

## Project Structure

```
nkosis-website-portifolio/
├── index.html      # Main HTML file
├── style.css       # All styles with dark mode support
├── scrpit.js       # JavaScript functionality
├── profile.png     # Profile photo
├── site.png        # Favicon
├── Resume.pdf      # Downloadable resume
├── LICENSE         # GNU LGPL v2.1
└── README.md       # This file
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or package managers required

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/developer-nkosi/nkosis-website-portifolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd nkosis-website-portifolio
   ```

3. Open `index.html` in your browser:
   ```bash
   # On Windows
   start index.html

   # On macOS
   open index.html

   # On Linux
   xdg-open index.html
   ```

### Deployment (GitHub Pages)

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be live at `https://username.github.io/repo-name/`

## How to Build Your Own

1. **Copy the HTML structure** from `index.html` - sections include Navigation, Hero, About, Projects, Skills, Resume, Contact, and Footer

2. **Customize the CSS variables** in `style.css`:
   ```css
   :root {
       --primary: #2563eb;    /* Light mode accent */
       --secondary: #1e40afbd;
       --bg-body: rgba(240, 234, 234, 0.212);
       --bg-card: #ffffff;
       --text-primary: #1f2937;
       --text-secondary: #6b7280;
   }

   @media (prefers-color-scheme: dark) {
       :root {
           --primary: #3b82f6;    /* Dark mode accent */
           --bg-body: rgba(15, 23, 42, 0.95);
           --bg-card: #1e293b;
           --text-primary: #f1f5f9;
           --text-secondary: #94a3b8;
       }
   }
   ```

3. **Add frosted glass effect** to any section for readability over animated backgrounds:
   ```css
   .my-section {
       background: rgba(255, 255, 255, 0.15);
       backdrop-filter: blur(12px);
       -webkit-backdrop-filter: blur(12px);
       padding: 35px;
       border-radius: 16px;
       border: 1px solid rgba(255, 255, 255, 0.2);
   }
   ```

4. **Add your content**:
   - Replace profile photo (`profile.png`)
   - Update project links and descriptions
   - Modify skills sections
   - Add your contact information

5. **Include the CDN libraries** in the `<head>`:
   ```html
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
   <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/vanilla-tilt@1.8.1/dist/vanilla-tilt.min.js" defer></script>
   ```

## Sections

| Section | Description |
|---------|-------------|
| Navigation | Fixed navbar with floating hamburger menu on mobile |
| Hero | Animated title with tagline and CTA button |
| About | Bio text with frosted glass background + profile image (tilt effect) |
| Projects | 6-card grid with hover overlays and tech tags |
| Skills | 4 categorized skill cards (Languages, Frameworks, Databases, Technical) |
| Resume | Download button + highlight cards (Education, Skills, Projects, Goal) |
| Contact | Clickable social icons + pill-shaped form button |
| Footer | Social links and copyright |
| Scroll-to-Top | Floating button appears after scrolling 400px |

## Key Features Explained

### Automatic Dark Mode
The site uses `@media (prefers-color-scheme: dark)` to automatically detect and apply your system's light or dark mode preference. No toggle button needed.

### Frosted Glass (Glassmorphism)
The About Me section uses `backdrop-filter: blur(12px)` with a semi-transparent background to create a frosted glass effect. This ensures text remains readable over the animated Three.js background while still showing the animation through the blur.

### Particle Wave Background
The Three.js background creates a wave animation using square particles that move in a sine wave pattern.

### Clickable Contact Icons
Social icons (email, LinkedIn, GitHub) are wrapped in anchor tags so clicking the icon directly opens the link or triggers the email client.

## Known Issues

- Filename typo: `scrpit.js` should be `script.js`

## License

This project is licensed under the GNU Lesser General Public License v2.1 - see the [LICENSE](LICENSE) file for details.

## Author

**Wongani Kasawala Nkosi** (Developer Nkosi)
- GitHub: [developer-nkosi](https://github.com/developer-nkosi)
- LinkedIn: [Wongani Nkosi](https://www.linkedin.com/in/wongani-nkosi-36b53b297)
- Email: eugenenkose@gmail.com
