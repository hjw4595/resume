import { useEffect, useState } from "react";
import { instanse } from "../../axios/config";

import Skill, { SkillItemTypes } from "components/main/Skill";

interface ResponsTypes {
  data: SkillItemTypes[];
}

function SkillContainer() {
  const [skill, setSkill] = useState<SkillItemTypes[]>([]);

  const getCareer = async () => {
    try {
      await instanse
        .get<ResponsTypes>("/Skill.json")
        .then((res) => setSkill(res.data.data));
    } catch (e) {
      console.log(e);
    }
  };

  console.log(skill);

  useEffect(() => {
    getCareer();
  }, []);

  return <Skill list={skill} />;
}

export default SkillContainer;
