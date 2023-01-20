import axios from "axios";
import { TypeToParser } from "../enums/type-to-parser.enum.js";
import { Types } from "../enums/types.enum.js";

export class PostsService {
  static getPosts(profilesData) {
    return Promise.all(
      profilesData.map(async (p) => {
        const url =
          p.type === Types.Medium
            ? `https://medium.com/@${p.username}`
            : `https://dev.to/${p.username}`;
        const response = await axios.get(url);
        const parser = TypeToParser[p.type];

        p.posts = parser.getPosts(response.data, p.username);

        return p;
      })
    );
  }
}
