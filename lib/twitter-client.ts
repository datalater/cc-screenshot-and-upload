import { TwitterApi } from "twitter-api-v2";

const API_KEY = "";
const API_SECRET = "";
const ACCESS_TOKEN = "";
const ACCESS_SECRET = "";
const BEARER_TOKEN = "";

const client = new TwitterApi({
  appKey: API_KEY,
  appSecret: API_SECRET,
  accessToken: ACCESS_TOKEN,
  accessSecret: ACCESS_SECRET,
});

const bearer = new TwitterApi(BEARER_TOKEN);

export const twitterClient = client.readWrite;
export const twitterBearer = bearer.readOnly;
