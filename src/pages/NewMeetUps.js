import { useHistory } from "react-router-dom";
import NewMeetUpForm from "../components/meetups/NewMeetUpForm";

function NewMeetUpPage() {
  const history = useHistory(); //needed to redirect after creating meetup

  function addMeetUpHandler(meetupData) {
    //firebase requires .json being added to the end of its API strings
    //most APIs send GET request by default; need to send POST request to store data
    //HTTP request bodies need to be in JSON format
    //use JSON.stringify(object) to make a JSON string from a JavaScript object
    //use Content-type in headers to specify the data being sent is JSON
    //use .then() to do something with the promise returned by fetch()
    //history.replace('/') redirects to homepage (/)
    fetch(
      "https://react-tutorial-68361-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meet Up</h1>
      <NewMeetUpForm onAddMeetUp={addMeetUpHandler} />
    </section>
  );
}

export default NewMeetUpPage;
