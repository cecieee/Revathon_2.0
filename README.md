# ISQIP - IEEE SB CEC

A modern web application built with React and Tailwind CSS for the IEEE Student Branch CEC ISQIP program.

## 🚀 Tech Stack

- **Frontend Framework:** React 19.1.0
- **Styling:** Tailwind CSS 4.1.8
- **Build Tool:** Vite 6.3.5
- **Language:** JavaScript (JSX)
- **Linting:** ESLint 9.25.0

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx
│   ├── Footer.jsx
│   ├── Leaderboard.jsx
│   ├── LoadingScreen.jsx
│   └── Navbar.jsx
├── pages/              # Main application pages
│   ├── CodeOfConduct.jsx
│   ├── Domain.jsx
│   ├── LandingPage.jsx
│   ├── Leaderboard.jsx
│   └── Schedule.jsx
├── sections/           # Page-specific sections
│   ├── Domain/
│   │   ├── Contact.jsx
│   │   ├── IndustryVisit.jsx
│   │   ├── Introduction.jsx
│   │   ├── Leaderboard.jsx
│   │   └── TrackDetails.jsx
│   └── LandingPage/
│       ├── About.jsx
│       ├── Benefits.jsx
│       ├── Countdown.jsx
│       ├── Domains.jsx
│       ├── Hero.jsx
│       ├── Organizers.jsx
│       ├── Prizes.jsx
│       └── RegisterNow.jsx
├── assets/             # Static assets
└── App.jsx            # Main application component
```

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ISQIP
```

2. Install dependencies:
```bash
npm install
```

## 🏃‍♂️ Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Styling

This project uses **Tailwind CSS 4.1.8** for styling. The main CSS file is located at [`src/App.css`](src/App.css) which imports Tailwind's utilities.

### Key Features:
- Utility-first CSS framework
- Responsive design capabilities
- Modern design system
- Fast development workflow

## 📦 Build & Deployment

To build the project for production:
```bash
npm run build
```

The built files will be generated in the `dist/` directory.

## 🧹 Code Quality

The project uses ESLint with React-specific rules configured in [`eslint.config.js`](eslint.config.js):
- TitleCasing
- React Hooks rules
- React Refresh for fast development
- Modern JavaScript standards


## 📄 License

This project is private and maintained by IEEE SB CEC.

---

*Built with ❤️ by IEEE SB CEC Team*