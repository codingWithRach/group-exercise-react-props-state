import Joke from "../joke";

interface Props {
  joke: Joke;
}

// An alternative way of declaring a component is to write it as a function which
// returns a JSX.Element
function ChuckJokes({ joke }: Props): JSX.Element {
  return (
    <>
      <p>{joke.joke}</p>
    </>
  );
}

export default ChuckJokes;
