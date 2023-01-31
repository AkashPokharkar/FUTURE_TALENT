import classes from './Cart.module.css'

const Card = (props) => {
  return (
    <section
      className={`${classes.card}  ${props.className ? props.className : ""}`}
    >
      {props.children}
    </section>
  );
};

export default Card;