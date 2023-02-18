import { profileInfo } from "../typings";

export const fetchProfileInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProfileInfo`
  );

  const data = await res.json();
  const ProfileInfo: profileInfo = data.ProfileInfo;

  return ProfileInfo;
};
