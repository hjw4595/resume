export interface SkillItemTypes {
  category: string;
  list: {
    title: string;
    description?: string;
  }[];
}

interface Props {
  list: SkillItemTypes[];
}

const ItemCard = ({ category, list }: SkillItemTypes) => (
  <div key={category}>
    <div>{category}</div>
    <div>
      {list.map((item) => (
        <div key={item.title}>
          <div>{item.title}</div>
          <div>{item.description ?? ""}</div>
        </div>
      ))}
    </div>
  </div>
);

function Skill({ list }: Props) {
  return <div>{list.map((item) => ItemCard(item))}</div>;
}

export default Skill;
