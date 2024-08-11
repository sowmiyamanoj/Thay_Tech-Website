import { useTweet } from "react-tweet";
import { Tweet, TweetSkeleton, TweetNotFound } from "react-tweet";

const CustomTweetCard = ({ id }: { id: string }) => {
  const { data, error, isLoading } = useTweet(id);

  if (isLoading) return <TweetSkeleton />;
  if (error || !data) return <TweetNotFound />;

  return <Tweet id={id} />;
};

export default CustomTweetCard;
