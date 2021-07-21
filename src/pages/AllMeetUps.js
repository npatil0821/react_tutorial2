import { useState, useEffect } from "react";
import MeetUpList from "../components/meetups/MeetUpList";

function AllMeetUpsPage() {
  const [isLoading, setIsLoading] = useState(true); //used to start in loading state
  const [loadedMeetUps, setLoadedMeetUps] = useState([]);

  //useEffect takes 2 arguments: a function and an array of dependencies
  //function is executed based on the values passed as dependencies
  //if you pass an empty array as 2nd argument, function is only executed when component is first loaded
  //should add all external values the function relies on as dependencies
  //there are no external values in this case
  useEffect(() => {
    setIsLoading(true);
    //response is returned as promise from fetch()
    //read body of reponse with response.json()
    //response.json() also returns a promise
    fetch(
      "https://react-tutorial-68361-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = []; //will hold all meet ups

        //constructs single meet up
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key], //gets all key-value pairs from data[key]
          };

          meetups.push(meetup); //adds meetup item to array
        }

        setIsLoading(false); //sets loading state to false once data is gotten
        setLoadedMeetUps(meetups); //passes created meetups array
      });
  }, []);

  //informs user list is loading
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meet Ups</h1>
      <MeetUpList meetups={loadedMeetUps} />
    </section>
  );
}

export default AllMeetUpsPage;
