import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetUpForm.module.css";

function NewMeetUpForm(props) {
  const titleInputRef = useRef(); //create a reference object
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  //function is triggered when submission occurs
  function submitHandler(event) {
    event.preventDefault(); //prevents the default HTTP request sent by the HTML

    const enteredTitle = titleInputRef.current.value; //gets current value of title when form is submitted
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetUp(meetupData);
  }

  //since 'for' is a keyword in JS, need to use 'htmlFor' for the HTML attribute
  //if you have a button in an HTML form that doesn't have the attribute 'type=button',
  //the button will submit the form
  //use onSubmit prop to listen for submission
  //React passes an event object argument to the function (submitHandler) used for the onSubmit prop
  //ref is a built-in React prop; it can be used to get access to value of a DOM element
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image URL</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meet Up</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetUpForm;
