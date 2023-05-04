import Footer from "components/common/Footer";
import Header from "components/common/Header";
import SideMenu from "components/common/SideMenu";
import CareerContainer from "container/main/Career";
import IntroContainer from "container/main/Intro";
import OtherContainer from "container/main/Other";
import SkillContainer from "container/main/Skill";

function Main() {
  return (
    <>
      <header className="grid-row-1 h-[48px] bg-gray-400">
        <Header />
      </header>
      <main>
        <div className=" grid grid-cols-6">
          <div className="col-span-5 bg-slate-100">
            <div className="p-8">
              <div id="Intro" className="">
                <IntroContainer />
              </div>
              <div id="Career" className="">
                <CareerContainer />
              </div>
              <div id="Skill" className="">
                <SkillContainer />
              </div>
              <div id="Other" className="">
                <OtherContainer />
              </div>
            </div>
          </div>
          <aside className="relative">
            <SideMenu />
          </aside>
        </div>
      </main>
      <footer className="h-[48px] bg-gray-400">
        <Footer />
      </footer>
    </>
  );
}

export default Main;
