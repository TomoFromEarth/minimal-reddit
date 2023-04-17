import { TiArrowDownOutline, TiArrowUpOutline, TiMessage } from "react-icons/ti";
import Skeleton from "react-loading-skeleton";
import getRandomNumber from "../utils/getRandomNumber";

const PostsLoading = () => {
  return (
    <article className="mb-4 flex rounded p-3">
      <div className="mr-3">
        <button
          type="button"
          className="pointer flex items-center rounded border-none bg-none p-0 text-green-500"
          aria-label="Up vote"
        >
          <TiArrowUpOutline className="text-base" />
        </button>
        <Skeleton className="m-0 w-[2ch] font-bold" />
        <button
          type="button"
          className="pointer flex items-center rounded border-none bg-none p-0 text-red-500"
          aria-label="Down vote"
        >
          <TiArrowDownOutline className="text-base" />
        </button>
      </div>
      <div className="w-full">
        <h3 className="m-0 mb-2">
          <Skeleton height={getRandomNumber(100, 200)} />
        </h3>
        <div className="hidden w-full rounded">
          <Skeleton height={250} />
        </div>
        <div className="mt-2 flex items-center justify-between border-t-2 pt-1 text-xs">
          <span>
            <Skeleton width={getRandomNumber(20, 50)} />
          </span>
          <span>
            <Skeleton width={getRandomNumber(50, 100)} />
          </span>
          <span className="flex items-center">
            <button type="button" className="pointer flex items-center rounded border-none bg-none p-0">
              <TiMessage className="pointer flex items-center rounded border-none bg-none p-0" />
            </button>
            <Skeleton width={getRandomNumber(10, 50)} />
          </span>
        </div>
      </div>
    </article>
  );
};

export default PostsLoading;
