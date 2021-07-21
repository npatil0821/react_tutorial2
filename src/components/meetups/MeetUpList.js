import MeetUpItem from "./MeetUpItem";
import classes from "./MeetUpList.module.css";

function MeetUpList(props) {
  /* map() peforms a function on each item in an array
   * in this case, it outputs the title of each item as a <li> element
   *
   * React lists need key props for each item in the list
   */

  //render 1 meet up item for each object in meet up array
  //key is a react built-in prop for any component
  //can also pass meet up as a whole (meetup={meetup})
  // - but need to destructure inside the component for this
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetUpItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetUpList;
