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
      <div>
        <div className="flex">
          <main className="bg-slate-100">
            <div className="p-8">
              <section id="Intro" className="mb-8">
                <IntroContainer />
              </section>
              <section id="Career" className="mb-8">
                <CareerContainer />
              </section>
              <section id="Skill" className="mb-8">
                <SkillContainer />
              </section>
              <section id="Other" className="">
                <OtherContainer />
              </section>
            </div>
          </main>

          <aside className="relative w-fit">
            <SideMenu />
          </aside>
        </div>
      </div>
       <footer className="h-[48px] bg-gray-400">
        <Footer />
      </footer>
    </>
  );
}

export default Main;
