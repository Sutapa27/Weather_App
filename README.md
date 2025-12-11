# 🌦️ Weather App

A simple and modern weather application built with **React**, styled using **Material UI**, and powered by the **OpenWeatherMap API**. The app shows real-time weather details for any city and can automatically detect the user's current location using the browser’s Geolocation API.

---

## 🚀 Features

* 🔍 **Search weather by city name**
* 📍 **Automatic current-location weather** (with graceful fallback if permission is denied)
* 🌤️ Dynamic background images based on weather conditions
* 🌡️ Real-time data:

  * Temperature
  * Feels-like temperature
  * Min & Max temperature
  * Humidity
  * Pressure
  * Visibility (converted to km)
  * Sunrise & Sunset
  * Wind Speed
  * Weather description
* 🎨 Clean and responsive UI using Material UI components
* 🌐 API key securely stored using `.env` with Vite
* ⚛️ Fully component-based architecture (WeatherApp, SearchBox, InfoBox)

---

## 🛠️ Tech Stack

* **React (Vite)**
* **Material UI (MUI)**
* **OpenWeatherMap API**
* **JavaScript (ES6+)**
* **Unsplash background images**
* **CSS / JSX**

---

## 📂 Folder Structure

```
src/
 ├── WeatherApp.jsx
 ├── SearchBox.jsx
 ├── InfoBox.jsx
 ├── Button.jsx
 ├── App.jsx
 ├── App.css
 └── main.jsx
```

---

## 🔑 Environment Variables (Vite)

Create a `.env` file in the project root:

```
VITE_WEATHER_API_KEY=your_api_key_here
```

The key is accessed using:

```js
import.meta.env.VITE_WEATHER_API_KEY
```

---

## 📦 How to Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 💡 Future Improvements

* Add 5-day / hourly forecast
* Add weather animations for rain, snow, clouds, etc.
* Add theme switch (light/dark mode)
* Save last searched city
* Deploy on Netlify / Vercel

---
Made with 🤍 By Sutapa
