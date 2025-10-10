# Multi Calculator Frontend

A React-based calculator application with user authentication and modern UI.

## Features

- 🔐 User Authentication (Login/Signup)
- 🧮 Multiple Calculator Types
- 🎨 Responsive Design with Tailwind CSS
- ⚡ Fast development with Vite
- 🔄 React Router for navigation

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Update the `.env` file with your backend URL:
```env
VITE_BACKEND_URL=http://localhost:5000
```

4. Start development server:
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Environment Variables

- `VITE_BACKEND_URL` - Backend API URL (required)

## Project Structure

```
src/
├── components/        # Reusable components
│   └── LoadingAnimation.jsx
├── pages/            # Page components
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   └── CalculatorList.jsx
├── App.jsx           # Main app component
├── main.jsx          # Entry point
└── index.css         # Global styles
```

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variable: `VITE_BACKEND_URL`
3. Deploy automatically on push

### Netlify
1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Set environment variable: `VITE_BACKEND_URL`

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
