interface Content {
  company: string;
  period: string;
  contents: {
    project: string;
    description: string;
    skillList: string[];
    result: string[];
  };
}

interface Props {
  list: Content[];
}

const ContentItem = ({ company, period, contents }: Content) => {
  return (
    <div className="relative flex">
      <div className="w-[160px]">
        <div className="sticky top-0 ">
          <div>{company}</div>
          <div>{period}</div>
        </div>
      </div>
      <div className="flex-1 h-[500px]">
        <div>{contents.description}</div>
        <div>{contents.project}</div>
        <div>
          {contents.skillList.map(() => (
            <div></div>
          ))}
        </div>
        <div>
          {contents.result.map(() => (
            <div></div>
          ))}
        </div>
      </div>
    </div>
  );
};

function Career({ list }: Props) {
  return <div>{list.map((item) => ContentItem(item))}</div>;
}

export default Career;
