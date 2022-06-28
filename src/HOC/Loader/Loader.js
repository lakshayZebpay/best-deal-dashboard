import "./Loader.css";

const Loader = (props) => {
  const classType = `wave ${props.isError && "error"}`;
  const wave = Array(13)
    .fill(1)
    .map((el, i) => <div className={classType}></div>);

  return (
    <div>
      <div class="center">{wave}</div>
      <h4>{props.isError && "Error Occured"}</h4>
    </div>
  );
};

export default Loader;
