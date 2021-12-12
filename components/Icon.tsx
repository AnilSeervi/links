interface pathType {
  path: string;
}
const Icon = ({ path }: pathType) => {
  return (
    <svg viewBox="0 0 24 24">
      <path d={path} fillRule="evenodd" />
    </svg>
  );
};
export default Icon;
