import { Shelf } from "../typings";

export const fetchPosts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getShelf`);

  const data = await res.json();
  const shelf: Shelf[] = data.shelf;

  return shelf;
};
