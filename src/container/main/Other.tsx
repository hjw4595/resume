import { useEffect, useState } from "react";
import { instanse } from "../../axios/config";

import Other, { OtherContentTypes } from "components/main/Other";

interface ResponseTypes {
  data: OtherContentTypes[];
}

function OtherContainer() {
  const [other, setOther] = useState<OtherContentTypes[]>([]);

  const getOther = async () => {
    try {
      await instanse
        .get<ResponseTypes>("/Other.json")
        .then((res) => setOther(res.data.data));
    } catch (e) {
      console.log(e);
    }
  };

  console.log(other);
  useEffect(() => {
    getOther();
  }, []);

  return <Other list={other} />;
}

export default OtherContainer;
