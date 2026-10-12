# MultiCalc - Advanced Calculator Suite

A comprehensive React-based calculator application suite with user authentication, responsive design, and 9 specialized calculators for different real-world scenarios.

## 🚀 Features

- 🔐 **User Authentication** - Secure login/signup system
- 🧮 **9 Specialized Calculators** - Covering various real-world use cases
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- 🎨 **Modern UI/UX** - Beautiful gradients and animations
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development
- 🔄 **React Router** - Smooth navigation between calculators
- 🎯 **Touch-Friendly** - Optimized for mobile interactions

## 🧮 Available Calculators

### 1. **Basic Calculator** 🧮
- Standard arithmetic operations (+, -, ×, ÷)
- Real-time expression display
- **Use Cases**: Shopping bills, daily expenses, quick calculations

### 2. **Scientific Calculator** 🔬
- Advanced mathematical functions (sin, cos, tan, log, ln)
- Trigonometric operations
- Power and square root functions
- **Use Cases**: Engineering calculations, physics problems, research

### 3. **Loan Calculator** 🏠
- Monthly payment calculations
- Total interest computation
- Loan term analysis
- **Use Cases**: Home loans, car loans, personal loans, financial planning

### 4. **BMI Calculator** ⚖️
- Body Mass Index calculation
- Health category classification
- Metric and Imperial units support
- **Use Cases**: Health monitoring, fitness tracking, medical assessments

### 5. **Currency Converter** 💱
- Real-time currency conversion
- Multiple currency support (USD, EUR, GBP, JPY, CAD, AUD)
- **Use Cases**: International travel, online shopping, business transactions

### 6. **CGPA Calculator** 🎓
- Cumulative Grade Point Average calculation
- Subject-wise grade management
- Credit hours tracking
- Performance level assessment
- **Use Cases**: Academic planning, scholarship applications, graduation requirements

### 7. **Age Calculator** 📅
- Precise age calculations
- Date difference computations
- Multiple time unit displays (years, months, days, hours)
- **Use Cases**: Age verification, event planning, milestone tracking

### 8. **Unit Converter** 📏
- Length, weight, and temperature conversions
- Multiple unit categories
- Precise conversion factors
- **Use Cases**: Cooking, construction, international measurements

### 9. **Tip Calculator** 💰
- Real-time tip and bill calculation
- Split-bill computation per person
- Quick-select percentage presets (10%, 15%, 18%, 20%)
- **Use Cases**: Dining out, group expenses, hospitality tipping

## 🌐 Live Application
- **Live Demo**: [https://multical-c.vercel.app](https://multical-c.vercel.app)
- **Backend API**: [https://multical-c-backend.onrender.com](https://multical-c-backend.onrender.com)

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation Steps

1. **Clone the repository:**
```bash
git clone <repository-url>
cd MultiCalc/Frontend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create environment file:**
```bash
cp .env.example .env
```

4. **Configure environment variables:**
```env
VITE_BACKEND_URL=http://localhost:5000
VITE_APP_NAME=MultiCalc
VITE_API_VERSION=v1
```

5. **Start development server:**
```bash
npm run dev
```

6. **Open in browser:**
```
http://localhost:5173
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── LoadingAnimation.jsx
│   ├── Header.jsx
│   └── Footer.jsx
├── pages/               # Main page components
│   ├── Home.jsx         # Landing page
│   ├── Login.jsx        # User authentication
│   ├── Signup.jsx       # User registration
│   └── CalculatorList.jsx # Calculator selection
├── calcs/               # Individual calculator components
│   ├── BasicCalculator.jsx      # Basic arithmetic
│   ├── ScientificCalculator.jsx # Advanced math functions
│   ├── LoanCalculator.jsx       # Loan & mortgage calculations
│   ├── BMICalculator.jsx        # Body Mass Index
│   ├── CurrencyConverter.jsx    # Currency exchange
│   ├── CGPACalculator.jsx       # Academic grade calculator
│   ├── AgeCalculator.jsx        # Age & date calculations
│   └── UnitConverter.jsx        # Unit conversions
├── utils/               # Utility functions
│   ├── api.js          # API calls
│   ├── auth.js         # Authentication helpers
│   └── constants.js    # App constants
├── hooks/               # Custom React hooks
│   ├── useAuth.js      # Authentication hook
│   └── useLocalStorage.js # Local storage hook
├── context/             # React context providers
│   └── AuthContext.jsx # Authentication context
├── assets/              # Static assets
│   ├── images/         # Image files
│   └── icons/          # Icon files
├── styles/              # CSS and styling
│   └── components/     # Component-specific styles
├── App.jsx              # Main application component
├── main.jsx             # Application entry point
├── index.css            # Global styles and Tailwind imports
└── vite.config.js       # Vite configuration
```

## 📜 Available Scripts

```bash
# Development
npm run dev              # Start development server with hot reload

# Build & Production
npm run build            # Build optimized production bundle

# Code Quality
npm run lint             # Run ESLint for code quality
npm run lint:fix         # Auto-fix ESLint issues
npm run format           # Format code with Prettier
npm run type-check       # TypeScript type checking

```

## 🌍 Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `VITE_BACKEND_URL` | Backend API base URL | `http://localhost:5000` | Yes |
| `VITE_APP_NAME` | Application name | `MultiCalc` | No |
| `VITE_API_VERSION` | API version | `v1` | No |
| `VITE_ENVIRONMENT` | Environment mode | `development` | No |

## 🚀 Deployment

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Auto-deploy on every push to main branch

```bash
# Manual deployment
npm run build
npx vercel --prod
```



## 🔧 Tech Stack

### Core Technologies
- **React 19** - Latest React with concurrent features
- **Vite 5** - Next-generation frontend build tool
- **React Router v6** - Declarative routing for React

### Styling & UI
- **Tailwind CSS 3** - Utility-first CSS framework
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic CSS vendor prefixing

### Development Tools
- **ESLint** - JavaScript/React linting
- **Prettier** - Code formatting

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest 2 versions |
| Firefox | Latest 2 versions |
| Safari | Latest 2 versions |
| Edge | Latest 2 versions |
| Mobile Safari | iOS 12+ |
| Chrome Mobile | Android 8+ |

## 🎯 Responsive Breakpoints




## 🔒 Security Features

- Input validation and sanitization
- Secure authentication flow
- Environment variable protection

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- 📧 Email:sudharsan638294@gmail.com
---

**Built with ❤️ for students, professionals, and anyone who needs reliable calculations on the go!**
