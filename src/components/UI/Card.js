import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  /*To include any className that is set on the Card */
  /* WHITE SPACE "card " need to have */

  /*Props children passes in all the contents inbetween it */
  return <div className={classes}>{props.children}</div>;
}

export default Card;
