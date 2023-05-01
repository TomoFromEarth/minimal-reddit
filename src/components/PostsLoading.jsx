import Skeleton from "react-loading-skeleton";
import getRandomNumber from "../utils/getRandomNumber";

const PostsLoading = () => {
  return (
    <article className="mb-4 flex rounded-lg p-3">
      <div className="mr-3">
        <button
          type="button"
          className="pointer flex items-center rounded-lg border-none bg-none p-0 text-slate-500"
          aria-label="Up vote"
        >
          <Skeleton />
        </button>
        <Skeleton className="m-0 w-[2ch]" />
        <button
          type="button"
          className="pointer flex items-center rounded-lg border-none bg-none p-0 text-slate-500"
          aria-label="Down vote"
        >
          <Skeleton />
        </button>
      </div>
      <div className="w-full">
        <h3 className="m-0 mb-2">
          <Skeleton width={getRandomNumber(100, 200)} />
        </h3>
        <div className="w-full rounded-lg">
          <Skeleton height={250} />
        </div>
        <div className="mt-2 flex items-center justify-between pt-1">
          <span>
            <Skeleton width={getRandomNumber(20, 50)} />
          </span>
          <span>
            <Skeleton width={getRandomNumber(50, 100)} />
          </span>
          <span className="flex items-center">
            <button type="button" className="pointer flex items-center rounded-lg border-none bg-none p-0">
              <Skeleton />
            </button>
            <Skeleton width={getRandomNumber(10, 50)} />
          </span>
        </div>
      </div>
    </article>
  );
};

export default PostsLoading;
