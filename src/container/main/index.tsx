import SideMenu from "components/common/SideMenu";
import Career from "components/main/Career";
import Intro from "components/main/Intro";

const CAREER = [
  {
    company: "adsasd",
    period: "1~2",
    contents: { project: "asd", description: "asd", skillList: [], result: [] },
  },
  {
    company: "cxvcxv",
    period: "3~4",
    contents: { project: "asd", description: "asd", skillList: [], result: [] },
  },
];

const INTRO = {
  name: "asd",
  contects: { phone: "000-0000-0000", github: "asd", email: "asd" },
  shortIntro: "321321321asd",
};

function MainContainer() {
  return (
    <div className=" grid grid-cols-6">
      <div className="col-span-5 bg-slate-100">
        <div className="p-8">
          <div id="Intro" className="">
            <Intro intro={INTRO} />
          </div>
          <div id="Career" className="">
            <Career list={CAREER} />
          </div>
        </div>
      </div>
      <aside className="relative">
        <SideMenu />
      </aside>
    </div>
  );
}

export default MainContainer;
