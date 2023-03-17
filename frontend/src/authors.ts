import type { Author } from "./models/author.model";

export const authors: Readonly<Author[]> = [
  {
    username: "sergeygultyayev",
    fullName: "Serhii Hultiaiev",
    type: "medium",
  },
  {
    username: "nazarii_romankiv",
    fullName: "Nazarii Romankiv",
    type: "medium",
  },
  {username: "stremann", fullName: "Roman Stremedlovskyi", type: "medium"},
  {username: "gin_mitch", fullName: "Michael Mullins", type: "medium"},
  {username: "ashiqsultan", fullName: "Ashiq Sultan", type: "dev.to"},
  {username: "krushenitskii", fullName: "Vladislav Krushenitskii", type: "medium"}
];
