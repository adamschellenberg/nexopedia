import React, { useState, useEffect } from 'react';
import './ThemeToggle.css';
import LightThemeIcon from "../../assets/images/light-mode-icon.png";
import DarkThemeIcon from "../../assets/images/dark-mode-icon.png";
import { useMediaQuery } from 'react-responsive';

export const ThemeToggle = () => {
  const [isDark, setIsDark]= useState(false);

  // const systemPrefersDark = useMediaQuery(
  //   {
  //     query: "(prefers-color-scheme: dark)",
  //   },
  //   undefined,
  //   (isSystemDark) => setIsDark(isSystemDark)
  // );

  const toggleIsDark = () => {
    if(isDark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }

  


  return (
    <button className="theme-switch-container" onClick={toggleIsDark}>
        <input type="checkbox" id="theme-switch" />
        <label for="theme-switch" class="theme-icons-label">
            <img src={DarkThemeIcon} className="theme-icon" id="dark-theme-icon" />
            <img src={LightThemeIcon} className="theme-icon" id="light-theme-icon" />
            <span class="theme-ball" />
        </label>

    </button>
  )
}
