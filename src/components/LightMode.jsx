import { React, useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { Mode } from "../store/color";

const LightMode = () => {
  const current = useStore(Mode);
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      Mode.setKey("mode", true);
      document.documentElement.classList.remove("dark");
    } else {
      Mode.setKey("mode", false);
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      {current.mode ? (
        <div onClick={() => handleClick()}>
          <svg
            className="cursor-pointer"
            width="25px"
            height="25px"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="invisible_box" data-name="invisible box">
                <rect width="48" height="48" fill="none" />
              </g>
              <g id="Q3_icons" data-name="Q3 icons">
                <path
                  fill="#1c2445"
                  d="M24.2,5h-.1a19.2,19.2,0,0,0-17,21.1A19.2,19.2,0,0,0,24.2,42.9h2.1a19.2,19.2,0,0,0,14.4-6.4A.9.9,0,0,0,40,35H38.1c-8.8-.5-16.6-8.4-16.9-17.1A17.4,17.4,0,0,1,25,6.6,1,1,0,0,0,24.2,5Z"
                />
              </g>
            </g>
          </svg>
        </div>
      ) : (
        <div onClick={() => handleClick()}>
          <svg
            className="cursor-pointer"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#a)" fill="#fdb833">
              <path
                fill="#fdb833"
                d="M12 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1ZM4.929 3.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414L4.93 3.515ZM1 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H1ZM18 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM17.657 16.243a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.414-1.414l-2.828-2.828ZM7.757 17.657a1 1 0 1 0-1.414-1.414L3.515 19.07a1 1 0 1 0 1.414 1.414l2.828-2.828ZM20.485 4.929a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414l2.828-2.828ZM13 19a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#ffffff" d="M0 0h24v24H0z" />
              </clipPath>
            </defs>
          </svg>
        </div>
      )}
    </div>
  );
};
export default LightMode;
