import { useEffect, useState } from "react";

function ToggleButton() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleClick = () => setDarkMode((prev) => !prev);
  useEffect(() => {
    setDarkMode(false);
  }, []);

  return (
    <div
      className={`relative flex items-center rounded-full
      bg-gray-500 w-24 h-8`}
      onClick={() => handleClick()}
    >
      <div
        className={`absolute duration-300 ${
          darkMode ? "translate-x-1 bg-black" : "translate-x-16 bg-white "
        } w-7 h-7 rounded-full
        `}
      ></div>
    </div>
  );
}

export default ToggleButton;
