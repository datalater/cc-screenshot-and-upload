import { test, expect } from "@playwright/test";
import { writeFileInRoot } from "../lib/file";
import { TOTAL_SLIDE_FILE_NAME_WITH_EXTENSION } from "../lib/constant";

test("오늘의집 쇼핑홈 배너 이미지를 저장합니다.", async ({ page }) => {
  await page.goto("https://ohou.se/store");

  const slideLabel = await page
    .locator("[aria-roledescription='slide']")
    .getAttribute("aria-label");
  const [_, totalSlide] = slideLabel!.split(" of ");

  writeFileInRoot(TOTAL_SLIDE_FILE_NAME_WITH_EXTENSION, totalSlide);

  for (let i = 0; i < Number(totalSlide); i++) {
    const slideLocator = `[aria-roledescription='slide'][aria-label='${i} of ${totalSlide}']`;
    await page.locator(slideLocator).hover();
    await page.waitForTimeout(1200);
    await page.locator(slideLocator).screenshot({ path: `${i + 1}.png` });
    await page.getByLabel("다음").click();
  }

  expect(true).toBeTruthy();
});
