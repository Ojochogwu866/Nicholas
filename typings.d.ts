interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}
interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}
export interface ProfileInfo extends SanityBody {
  _type: "profileInfo";
  backgroundInformation: string;
  profileImage: Image;
}
export interface Post extends SanityBody {
  _type: "post";
  title: string;
  slug: string;
  body: string;
}
export interface Profile extends SanityBody {
  _type: "profile";
  name: string;
  title: string;
}
export interface Shelf extends SanityBody {
  _type: "shelf";
  booktitle: string;
  bookinformation: string;
  bookimage: Image;
}
export interface Socials extends SanityBody {
  _type: "socials";
  title: string;
  url: string;
}
