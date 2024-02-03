import { TwitterApi } from "twitter-api-v2";

const API_KEY = "NF83m7ccNb9qSI86xX5bTGDIJ";
const API_SECRET = "DxGMVUawOcuQmGXy1RSZBgylXVlzfT9ujJMyya5mX33c0ez00y";
const ACCESS_TOKEN = "1753590039047704576-FmgZ3vH6JSa1ShLIYsyJYc0hzQPcAb";
const ACCESS_SECRET = "z6NpbXz508QjlIBERVs2JXdeAhBYECsCcDpXk9BmSsus0";
const BEARER_TOKEN = "AAAAAAAAAAAAAAAAAAAAAAzXsAEAAAAAVJJxdWGjh9SbSootSFJgfv01nKc%3DEA7EOWJPyTRwUnb6p36stw7YVZGVFk4g5VJL7sgAOYNtLfE5yx";

const client = new TwitterApi({
  appKey: API_KEY,
  appSecret: API_SECRET,
  accessToken: ACCESS_TOKEN,
  accessSecret: ACCESS_SECRET,
});

const bearer = new TwitterApi(BEARER_TOKEN);

export const twitterClient = client.readWrite;
export const twitterBearer = bearer.readOnly;
