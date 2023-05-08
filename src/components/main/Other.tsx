export interface OtherContentTypes {
  title: string;
  period: string;
  contents: {
    project: string;
    description: string;
    skillList: string[];
    result: string[];
  }[];
}

interface Props {
  list: OtherContentTypes[];
}

const ContentItem = ({ title, period, contents }: OtherContentTypes) => {
  return (
    <div key={title} className="relative flex">
      <div className="w-[160px]">
        <div className="sticky top-0 ">
          <div>{title}</div>
          <div>{period}</div>
        </div>
      </div>
      {contents.length > 0 &&
        contents.map((project) => (
          <div className="flex-1 h-[500px]">
            <div>{project.description}</div>
            <div>{project.project}</div>
            <div>
              {project.skillList.map(() => (
                <div></div>
              ))}
            </div>
            <div>
              {project.result.map(() => (
                <div></div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

function Other({ list }: Props) {
  return <div>{list.map((item) => ContentItem(item))}</div>;
}

export default Other;
