# Project Setup Instructions

## Prerequisites
1. Install Node.js from [nodejs.org](https://nodejs.org/) (LTS version recommended)
2. Restart your terminal after installation

## Installation Steps

### Option 1: Using npm (comes with Node.js)
```bash
npm install
npm run dev
```

### Option 2: Using Bun (faster alternative)
```bash
# Install Bun first
powershell -c "irm bun.sh/install.ps1 | iex"

# Then install dependencies and run
bun install
bun run dev
```

## What's New in the Restructured Routing

### New Routes Added:
- `/streams` - Overview of all academic streams
- `/streams/arts` - Arts & Humanities stream details
- `/streams/commerce` - Commerce stream details  
- `/streams/science` - Science stream details
- `/courses` - Course exploration page
- `/colleges` - College finder page
- `/chat` - Alternative route to chatbot

### Improved Organization:
- Separated routing logic into `src/routes/index.tsx`
- Created dedicated pages for each stream
- Better navigation structure
- Enhanced user experience with detailed stream information

### New Pages Created:
- `StreamsPage.tsx` - Stream selection with career info
- `CoursesPage.tsx` - Course exploration wrapper
- `CollegesPage.tsx` - College finder wrapper
- `ArtsPage.tsx` - Arts stream details
- `CommercePage.tsx` - Commerce stream details
- `SciencePage.tsx` - Science stream details

## Running the Project
After installation, the project will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5001 (if running backend)

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run dev:all` - Start both frontend and backend
