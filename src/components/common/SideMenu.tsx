import { Link } from "react-router-dom";

const ITEM_LIST = [
  { title: "1", herf: "/" },
  { title: "2", herf: "/" },
  { title: "3", herf: "/" },
  { title: "4", herf: "/" },
];

interface Menu {
  title: string;
  herf: string;
}

const menuItem = (args: Menu) => <Link to={args.herf}>{args.title}</Link>;

function SideMenu() {
  return (
    <div className="p-2">
      {ITEM_LIST.map((item) => {
        return <div>{menuItem(item)}</div>;
      })}
    </div>
  );
}

export default SideMenu;
