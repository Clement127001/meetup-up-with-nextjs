import classes from "./MeetupDetail.module.css";
const MeetupDetail = ({ image, title, description, address }) => {
  return (
    <section className={classes.detail}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{address}</p>
    </section>
  );
};

export default MeetupDetail;
