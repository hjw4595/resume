import { useEffect, useState } from "react";
import { instanse } from "../../axios/config";

import Intro, { IntroContentTypes } from "components/main/Intro";

interface ResponsTypes {
  data: IntroContentTypes;
}

function IntroContainer() {
  const [intro, setIntro] = useState<IntroContentTypes>({
    name: "",
    contects: {
      phone: "",
      github: "",
      email: "",
    },
    shortIntro: "",
  });

  const getIntro = async () => {
    try {
      await instanse
        .get<ResponsTypes>("/Intro.json")
        .then((res) => setIntro(res.data.data));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getIntro();
  }, []);

  return <Intro intro={intro} />;
}

export default IntroContainer;
