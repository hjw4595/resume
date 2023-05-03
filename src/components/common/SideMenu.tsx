import { Link } from "react-router-dom";

const ITEM_LIST = [
  { title: "Intro", herf: "/" },
  { title: "Career", herf: "/" },
  { title: "Skill", herf: "/" },
  { title: "Other", herf: "/" },
];

interface Menu {
  title: string;
  herf: string;
}

const menuItem = (args: Menu) => <Link to={args.herf}>{args.title}</Link>;

function SideMenu() {
  const handleClickMenu = (id: string) => {
    const element = document.getElementById(`${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="sticky top-24 p-2">
      <span>목차</span>
      {ITEM_LIST.map((item) => {
        return (
          <div onClick={() => handleClickMenu(item.title)}>
            {menuItem(item)}
          </div>
        );
      })}
    </div>
  );
}

export default SideMenu;
