## 1. FitLog — Gym Companion & Workout Library

FitLog is a dark, no-nonsense gym companion application built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. It allows users to explore various gym exercises, build a custom daily plan, save workouts for later, and track daily total training metrics in real time.

---

## 2. Project Links
- **Live Deployment:** [https://fit-pulse-azure.vercel.app/]
- **GitHub Repository:** [https://github.com/Forhad-Shorif/FIT-PULSE.git]

---

## 3. Key Features

1. **Interactive Workout Library:** Fetches and displays workout lifts from a custom REST API in a responsive grid layout.
2. **Dynamic My Plan & Saved System:** Uses React Context API to manage state globally across pages with live badges in the Navbar.
3. **Live Metrics Calculator:** Automatically computes total planned exercises, total duration in minutes, and estimated calories burned in real time.
4. **Sorting & Filtering Options:** Offers dynamic re-sorting of planned workouts by Duration, Calories, or Rating.
5. **Responsive & Modern Dark Theme:** Designed with Tailwind CSS & DaisyUI for mobile, tablet, and desktop viewports.

---

## 4. Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS & DaisyUI
- **Icons:** React Icons (`react-icons`)
- **State Management:** React Context API (`PlanContext`)
- **Data Source:** External REST API (`https://api.abcz.workers.dev/api/fitlog`)

---

## 5. Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Forhad-Shorif/FIT-PULSE.git
   cd fitlog
