import { twitterClient } from "./twitter-client";

const tweet = async () => {
  try {
    await twitterClient.v2.tweet("Hello, World!");
  } catch (e) {
    console.error(e);
  }
};

tweet();
