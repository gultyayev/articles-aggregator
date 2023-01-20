import S from "fluent-json-schema";
import { Types } from "../enums/types.enum.js";

export const PostsRequestSchema = S.array()
  .items(
    S.object()
      .definition(
        "author",
        S.object()
          .id("#author")
          .prop("username", S.string().required())
          .prop("fullName", S.string().required())
          .prop("type", S.enum(Object.values(Types)).required())
      )
      .ref("#author")
  )
  .minItems(1);
