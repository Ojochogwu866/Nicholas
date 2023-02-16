import { Profile } from "../typings";

export const fetchPosts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProfile`);

  const data = await res.json();
  const profile: Profile[] = data.profile;

  return profile;
};
