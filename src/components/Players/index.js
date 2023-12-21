import "./index.css";

const Players = (props) => {
  const { details } = props;
  const { name, speed, startTime } = details;

  return (
    <>
      <li className="list-items">
        <p>{name}</p>
        <p>{speed}</p>
        <p>{startTime}</p>
        <p>-</p>
      </li>
    </>
  );
};
export default Players;
