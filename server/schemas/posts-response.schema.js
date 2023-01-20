import S from "fluent-json-schema";

export const PostsResponseSchema = S.array().items(
  S.object()
    .prop("username", S.string())
    .prop("fullName", S.string())
    .prop(
      "posts",
      S.array().items(
        S.object()
          .definition(
            "post",
            S.object()
              .id("#post")
              .prop("title", S.string())
              .prop("description", S.string())
              .prop("date", S.string())
              .prop("link", S.string())
          )
          .ref("#post")
      )
    )
);
