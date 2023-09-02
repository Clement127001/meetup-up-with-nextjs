import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  const formSubmitHandler = (meetup) => {
    console.log(meetup);
  };

  return <NewMeetupForm onAddMeetup={formSubmitHandler} />;
}
