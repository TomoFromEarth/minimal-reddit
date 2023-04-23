import Skeleton from "react-loading-skeleton";
import Card from "./Card";

const SubredditsLoading = () => {
  return (
    <Card>
      <Skeleton height={100} />
    </Card>
  );
};

export default SubredditsLoading;
