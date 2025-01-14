import ChuckImage from "../assets/chuck_norris.jpg";

interface Props {
  greeting: string;
}

const ChuckCard = ({ greeting }: Props) => (
  <>
    <h2>{greeting}</h2>

    <img src={ChuckImage} alt="A handsome man" />
  </>
);

export default ChuckCard;
