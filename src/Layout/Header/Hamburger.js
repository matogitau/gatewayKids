import classes from "./Hamburger.module.css";

const Hamburger = (props) => {
  return (
    <label htmlFor="check">
      {/* if you are to perform any action
       you have to target the checkbox  */}
      <input type="checkbox" id="check" onClick={props.onclick} />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

export default Hamburger;
