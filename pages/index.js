import MeetupList from "../components/meetups/MeetupList";

const dummyMeetups = [
  {
    id: "meet1",
    image:
      "https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "The fest - 2023",
    description:
      "Enjoy the feast of the year and help us to support the orphans",
    address: "cross cut road,Coimbatore",
  },
  {
    id: "meet2",
    image:
      "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Rahman Roadster",
    description:
      "Get the vibe and melt with the voice of the music hurricane - A R Rahman",
    address: "Koddysey,Coimbatore",
  },
];

export default function MeetupListPage() {
  return <MeetupList meetups={dummyMeetups} />;
}
