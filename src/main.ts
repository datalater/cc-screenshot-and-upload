import { twitterClient } from "../lib/twitter-client";
import { readFileInRoot } from "../lib/file";
import { todayInAsiaSeoul } from "../lib/date";
import { TOTAL_SLIDE_FILE_NAME_WITH_EXTENSION } from "../lib/constant";

async function main() {
  const totalSlide = readFileInRoot(TOTAL_SLIDE_FILE_NAME_WITH_EXTENSION);

  for (let i = 0; i < Number(totalSlide); i++) {
    try {
      const mediaId = await twitterClient.v1.uploadMedia(`${i + 1}.png`);
      await twitterClient.v2.tweet({
        text: `${todayInAsiaSeoul()} 배너 ${i + 1}번째 이미지입니다.`,
        media: {
          media_ids: [mediaId],
        },
      });
    } catch (e) {
      console.error(e);
    }
  }
}

main();
