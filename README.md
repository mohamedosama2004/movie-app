# 🎬 Movie Home

A modern, responsive movie discovery application built with React 19 and powered by The Movie Database (TMDB) API. Browse trending movies, view detailed information, and enjoy a sleek dark-themed interface.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

- 🔥 **Trending Movies** - Discover the most popular movies of the week
- 🎥 **Detailed Movie Info** - View comprehensive details including ratings, runtime, budget, and more
- 📱 **Fully Responsive** - Optimized for all screen sizes with mobile-first design
- 🌙 **Dark Theme** - Beautiful dark UI with smooth animations and transitions
- 🔐 **User Authentication** - Login and signup functionality
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎨 **Modern UI/UX** - Gradient effects, hover animations, and polished interactions

## 🛠️ Tech Stack

| Technology         | Purpose                     |
| ------------------ | --------------------------- |
| **React 19**       | Frontend UI library         |
| **Vite 7**         | Build tool & dev server     |
| **Tailwind CSS 4** | Utility-first CSS framework |
| **React Router 7** | Client-side routing         |
| **Lucide React**   | Beautiful icon library      |
| **React Toastify** | Toast notifications         |
| **TMDB API**       | Movie data source           |

## 📁 Project Structure

```
movie-app/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── FilmCard/       # Movie card component
│   │   ├── Footer/         # Footer component
│   │   ├── Loading/        # Loading spinner
│   │   └── Navbar/         # Navigation bar
│   ├── pages/              # Page components
│   │   ├── Home page/      # Trending movies display
│   │   ├── Movie Details/  # Individual movie details
│   │   ├── Login Page/     # User login
│   │   ├── SignUp page/    # User registration
│   │   └── Not Found/      # 404 error page
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # App entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
└── package.json            # Dependencies & scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/mohamedosama2004/movie-app.git
   cd movie-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

| Command           | Description                 |
| ----------------- | --------------------------- |
| `npm run dev`     | Start development server    |
| `npm run build`   | Build for production        |
| `npm run preview` | Preview production build    |
| `npm run lint`    | Run ESLint for code quality |

## 🌐 API Reference

This project uses [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api) to fetch movie data.

### Endpoints Used

- **Trending Movies**: `GET /trending/movie/week`
- **Movie Details**: `GET /movie/{movie_id}`

## 📸 Screenshots

### 1. Sign Up Page
![Sign Up Page](https://raw.githubusercontent.com/mohamedosama2004/movie-app/main/Screenshot%202026-01-28%20143326.png)
Create a new account with email and password, or use social login options (Google, Facebook, X/Twitter).

### 2. Login Page
![Login Page](https://raw.githubusercontent.com/mohamedosama2004/movie-app/main/Screenshot%202026-01-28%20143140.png)
Welcome back screen with email/password authentication and "Remember me" functionality.

### 3. Loading Screen
![Loading Screen](https://raw.githubusercontent.com/mohamedosama2004/movie-app/main/Screenshot%202026-01-28%20143237.png)
Animated Pac-Man style loading screen with the tagline "LOADING YOUR CINEMATIC EXPERIENCE".

### 4. Home Page - Movie Grid
![Home Page](https://raw.githubusercontent.com/mohamedosama2004/movie-app/main/Screenshot%202026-01-28%20143347.png)
Browse trending movies in a responsive grid layout with ratings, release dates, and quick action buttons.

### 5. Movie Details Page
![Movie Details](https://raw.githubusercontent.com/mohamedosama2004/movie-app/main/Screenshot%202026-01-28%20143554.png)
Detailed movie information including backdrop image, poster, rating, runtime, genre tags, overview, and action buttons (Watch Now, Add to Favorites, Share).

## 🎨 Key Components

### FilmCard

Interactive movie card with:

- Hover effects and animations
- Rating badge with star icon
- Favorite button
- Quick action buttons for play and details

### Navbar

Responsive navigation with:

- Animated logo
- Desktop and mobile menu support
- Active link highlighting

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for providing the movie data API
- [Lucide](https://lucide.dev/) for the beautiful icon set
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

<p align="center">Made with ❤️ and React</p>