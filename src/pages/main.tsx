import Footer from "components/common/Footer";
import Header from "components/common/Header";
import MainContainer from "../container/main";

function Main() {
  return (
    <>
      <header className="grid-row-1 h-[48px] bg-gray-400">
        <Header />
      </header>
      <main>
        <MainContainer />
      </main>
      <footer className="h-[48px] bg-gray-400">
        <Footer />
      </footer>
    </>
  );
}

export default Main;
