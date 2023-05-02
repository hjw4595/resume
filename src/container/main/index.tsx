import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import SideMenu from "../../components/common/SideMenu";
import Career from "../../components/main/Career";
import Intro from "../../components/main/Intro";

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
    <div className="grid">
      <header className="grid-row-1 h-[48px] bg-gray-400">
        <Header />
      </header>

      <main className="grid grid-cols-6">
        <aside className="border-black border-r-2 ">
          <SideMenu />
        </aside>
        <div className="col-span-5 bg-slate-100">
          <div className="p-8">
            <div className="">
              <Intro intro={INTRO} />
            </div>
            <div className="">
              <Career list={CAREER} />
            </div>
          </div>
        </div>
      </main>

      <footer className="h-[48px] bg-gray-400">
        <Footer />
      </footer>
    </div>
  );
}

export default MainContainer;
