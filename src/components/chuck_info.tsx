interface Props {
  noOfWhales: number;
  noOfKicks: number;
}

const ChuckInfo = ({ noOfWhales, noOfKicks }: Props) => (
  <>
    <p>Number of Whales Saved: {noOfWhales}</p>

    <p>Number of Round House Kicks (in the last day): {noOfKicks}</p>
  </>
);

export default ChuckInfo;
