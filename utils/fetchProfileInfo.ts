import { profileInfo } from "../typings";

export const fetchPosts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProfileInfo`
  );

  const data = await res.json();
  const Profile: profileInfo[] = data.Profile;

  return Profile;
};
