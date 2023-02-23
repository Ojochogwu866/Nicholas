import { Author } from "../typings";

export const fetchAuthor = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAuthor`);

  const data = await res.json();
  const author: Author = data.author;
  return author;
};
