import "./styles.css";

// see the question on one side and when u click u see the answer on the other side
// when click the card turn into red, div.selected
// clicking a second time will turn the card back to the question without the red
// clicking on another card will close the first one if opened, only one open card at a time
// use one piece of state

// 1 create the cards with their questions
// 2 create function to flip the card and display the answer

export default function App() {
  return (
    <div className="flashcards">
      <FlashCards />
      <FlashCards />
      <FlashCards />
      <FlashCards />
      <FlashCards />
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  return <div>TODO</div>;
}
