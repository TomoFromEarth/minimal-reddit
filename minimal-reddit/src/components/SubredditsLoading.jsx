import Skeleton from "react-loading-skeleton";

const SubredditsLoading = () => {
  return (
    <div className="flex items-center justify-start p-4">
      <Skeleton className="mr-6" circle={true} height={35} width={35} />
      <div className="w-full flex-1">
        <Skeleton height={50} />
      </div>
    </div>
  );
};

export default SubredditsLoading;
