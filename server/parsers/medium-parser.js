import { parse } from "node-html-parser";

export class MediumParser {
  static getPosts(html, username) {
    const root = parse(html);
    const articles = root.querySelectorAll("article").slice(0, 3);

    return articles.map((article) => {
      const links = article.querySelectorAll("a");
      // Title idx is (kind of) the most reliable anchor to find data and description around
      const titleIdx = links.findIndex((link) => link.querySelector("h2"));

      // Sometimes there are two spans, first one containing a separator
      // Recently published articles don't have span, so we query for p
      let date = links[titleIdx - 1].querySelectorAll("span").at(-1)?.text ?? links[titleIdx - 1].querySelector("p").text;
      const title = links[titleIdx].querySelector("h2").text;
      // Sometimes title and descriptions share the a tag
      const description =
        links[titleIdx].querySelector("p")?.text ||
        links[titleIdx + 1].querySelector("p").text;

      // Medium is not adding Year for this year's articles. So we add it manually
      if (/[A-Za-z]{3}\s\d{1,2}$/.test(date)) {
        date += `, ${new Date().getFullYear()}`
      }

      const postLink = links[titleIdx].getAttribute("href").split("?")[0];
      // If there is only one "/" then the link should have the username
      // otherwise it already has correct path
      // The workaround is needed because profiles with branded pages don't have
      // prefixes in posts URLs and hence invalid link would be created otherwise
      const prefix = postLink.match(/\//g).length === 1 ? `/@${username}` : "";
      const link = "https://medium.com" + prefix + postLink;

      return { title, description, date, link };
    });
  }
}
