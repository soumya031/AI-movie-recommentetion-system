# AI Movie Recommendation System

An AI-powered movie recommendation system built with React and TypeScript. This application allows users to receive personalized movie suggestions using advanced AI models.

## Features
- AI-driven movie recommendations
- User-friendly interface
- Real-time loading indicators
- Error handling and feedback
- Modular, component-based architecture

## Installation

1. **Clone the repository:**
   ```bash
   git clone <https://github.com/soumya031/AI-movie-recommentetion-system/edit/main/README.md>
   cd "AI movie recommentetion system"
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Usage
- Enter your movie preferences or a prompt in the input form.
- Submit to receive AI-generated movie recommendations.
- Browse the recommended movies and explore details.

## Project Structure
```
AI movie recommentetion system/
├── App.tsx                  # Main application component
├── components/              # Reusable UI components
│   ├── ErrorDisplay.tsx
│   ├── Header.tsx
│   ├── InputForm.tsx
│   ├── Loader.tsx
│   ├── MovieCard.tsx
│   └── Welcome.tsx
├── services/
│   └── geminiService.ts     # Handles AI service integration
├── types.ts                 # TypeScript type definitions
├── index.tsx                # App entry point
├── index.html               # HTML template
├── package.json             # Project metadata and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite build configuration
└── README.md                # Project documentation
```

## Technologies Used
- [React](https://react.dev/) (TypeScript)
- [Vite](https://vitejs.dev/)
- [python] ( your AI backend)

## Contributing
Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License
This project is licensed under the MIT License.
