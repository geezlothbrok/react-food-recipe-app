import React, { useEffect, useState } from "react";
import "./Settings.css";
import { FaCheck } from "react-icons/fa";

function Settings() {
  const [theme, setTheme] = useState("light");

  const primaryColors = [
    "rgb(255, 0, 86)",
    "rgb(33, 150, 243)",
    "rgb(255, 193, 7)",
    "rgb(0, 200, 83)",
    "rgb(156, 39, 176)",
  ];

  const themes = [
    {
      "--background-color": "#fff",
      "--background-light": "#fff",
      "--shadow-color": "rgba(0, 0, 0, 0.2)",
      "--text-color": "#0A0A0A",
      "--text-light": "#575757",
    },
    {
      "--background-color": "rgb(29, 29, 29)",
      "--background-light": "rgb(77, 77, 77)",
      "--shadow-color": "rgba(0, 0, 0, 0.2)",
      "--text-color": "#ffffff",
      "--text-light": "#eceaea",
    },
  ];

  const [settings, setSettings] = useState({
    "--background-color": "#fff",
    "--background-light": "#fff",
    "--primary-color": "rgb(255, 0, 86)",
    "--shadow-color": "rgba(0, 0, 0, 0.2)",
    "--text-color": "#0A0A0A",
    "--text-light": "#575757",
    "--font-size": "16px",
  });
  const [primaryColor, setPrimaryColor] = useState(0);

  const [fontSize, setFontSize] = useState(1);

  const fontSizes = [
    {
      title: "small",
      value: "12px",
    },
    {
      title: "medium",
      value: "16px",
    },
    {
      title: "large",
      value: "20px",
    },
  ];

  //function to change theme
  const changeTheme = (i) => {
    const _theme = { ...themes[i] };
    setTheme(i === 0 ? "light" : "dark");
    //update settings
    let _settings = { ...settings };
    for (let key in _theme) {
      _settings[key] = _theme[key];
    }
    setSettings(_settings);
  };

  //change color
  const changeColor = (i) => {
    const _color = primaryColors[i]
    let _settings = { ...settings }
    _settings["--primary-color"] = _color
    setPrimaryColor(i)
    setSettings(_settings)
  };

  //change font size
  const changeFontSize = (i) => {
    const _size = fontSizes[i]
    let _settings = { ...settings }
    _settings["--font-size"] = _size.value
    setFontSize(i)
    setSettings(_settings)
  };

  useEffect(() => {
    const root = document.documentElement;
    for (let key in settings) {
      root.style.setProperty(key, settings[key]);
    }
  }, [settings]);

  
  return (
    <div className="">
      <div className="section d-block container">
        <h2>Preferred theme</h2>
        <div className="options-container">
          <div className="option light" onClick={() => changeTheme(0)}>
            {theme === "light" && (
              <div className="check">
                <FaCheck />
              </div>
            )}
          </div>

          <div className="option dark" onClick={() => changeTheme(1)}>
            {theme === "dark" && (
              <div className="check">
                <FaCheck />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="section d-block container">
        <h2>Primary colors</h2>
        <div className="options-container">
          {primaryColors.map((color, index) => (
            <div
              key={index}
              className="option"
              style={{ backgroundColor: color }}
              onClick={() => changeColor(index)}
            >
              {primaryColor === index && (
                <div className="check">
                  <FaCheck />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="section d-block container">
        <h2>Font size</h2>
        <div className="options-container">
          {fontSizes.map((font, index) => (
            //   <div className="option light" style={{backgroundColor: color}}>
            //   {primaryColor === index && (
            //     <div className="check">
            //       <FaCheck />
            //     </div>
            //   )}
            // </div>
            <button className="btn" onClick={()=> changeFontSize(index)}>
              <span>{font.title}</span> {fontSize === index && <FaCheck />}{" "}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Settings;
