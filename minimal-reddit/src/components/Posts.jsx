import { useState } from "react";
import Card from "../components/Card";

const Post = ({ post, onToggleComments }) => {
  const [vote, setVote] = useState(0);

  const onHandleVote = (newValue) => {
    if (newValue === vote) {
      setVote(0);
    } else if (newValue === 1) {
      setVote(1);
    } else {
      setVote(-1);
    }
  };

  return (
    <article key={post.id}>
      <Card>
        <div className="flex">
          <div className="flex flex-col items-center mr-3"></div>
        </div>
      </Card>
    </article>
  );
};

export default Post;
