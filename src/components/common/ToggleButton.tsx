import { useRecoilState } from "recoil";
import { darkmode } from "recoil/storage";

function ToggleButton() {
  const [mode, setMode] = useRecoilState(darkmode);

  const handleClick = () => setMode((prev) => !prev);

  return (
    <div
      className={`relative flex items-center rounded-full
      bg-gray-500 w-24 h-8`}
      onClick={() => handleClick()}
    >
      <div
        className={`absolute duration-300 ${
          mode ? "translate-x-1 bg-black" : "translate-x-16 bg-white "
        } w-7 h-7 rounded-full
        `}
      ></div>
    </div>
  );
}

export default ToggleButton;
