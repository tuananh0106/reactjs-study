import React from "react";

export default function Theme({ nameTheme, theme, setTheme }) {
    console.log(nameTheme, theme);
  return (
    <span
      onClick={() => setTheme({ nameTheme })}
      className={theme === nameTheme ? `${theme} activeTheme` : nameTheme}
    ></span>
  );
}
