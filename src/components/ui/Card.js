import classes from "./Card.module.css";

//use props.children to get any content passed between the tags of a component
function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
