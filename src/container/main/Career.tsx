import { useEffect, useState } from "react";
import { instanse } from "../../axios/config";

import Career, { CareerContent } from "components/main/Career";

interface ResponseTypes {
  data: CareerContent[];
}

function CareerContainer() {
  const [career, setCareer] = useState<CareerContent[]>([]);

  const getCareer = async () => {
    try {
      await instanse
        .get<ResponseTypes>("/Career.json")
        .then((res) => setCareer(res.data.data));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCareer();
  }, []);

  return <Career list={career} />;
}

export default CareerContainer;
