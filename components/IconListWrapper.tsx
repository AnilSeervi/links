import links from "../data/links.json";
import IconList from "./IconList";

export type linkType = [string, { index: number; href: string; icon: string }];

const linksArray: linkType[] = Object.entries(links).map(
  ([key, value], index) => [key, { ...value, index }]
);

const linksLength = linksArray.length;

const IconListWrapper = () => {
  return (
    <ul>
      {linksArray.map((link: linkType, index) => (
        <IconList link={link} key={index} length={linksLength} />
      ))}
    </ul>
  );
};

export default IconListWrapper;
