import axios from "axios";

const URL = "http://localhost:3000/";

export async function submitDetailForScrapeJob(
  messageBody: Object,
  title: string
) {
  try {
    const res = await axios({
      method: "post",
      url: URL + "scrape-jobs",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        messageBody,
        title,
      },
    });

    return res.data;
  } catch (err) {
    throw new Error("Oops, somthing happen.");
  }
}
