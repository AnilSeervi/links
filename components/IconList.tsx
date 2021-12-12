import Icon from "./Icon";
import { linkType } from "./IconListWrapper";

interface propType {
  link: linkType;
  length: number;
}

const IconList = ({ link, length }: propType) => {
  const [title, { href, icon, index }]: linkType = link;
  const angle: number = (360 / length) * index - 90;
  return (
    <li style={{ color: "#fff", ["--rotate" as string]: `${angle}deg` }}>
      <span
        className="icon-wrapper"
        style={{
          ["--rotate" as string]: `${-angle}deg`,
        }}
      >
        <a
          {...{ href, title }}
          className="rotate-counterclockwise-animation"
          rel="noopener noreferrer"
          aria-label={title}
          target="_blank"
        >
          <Icon path={icon} />
        </a>
      </span>
    </li>
  );
};

export default IconList;
