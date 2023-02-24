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
interface Slug {
  _type: "slug";
  current: string;
}
interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  stye: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}
interface MainImage {
  _type: "image";
  asset: Reference;
}
interface Title {
  _type: "string";
  current: string;
}
interface span {
  _key: string;
  _type;
  span;
  marks: string[];
  text: string;
}
export interface ProfileInfo extends SanityBody {
  _type: "profileInfo";
  backgroundInformation: string;
  profileImage: Image;
}
export interface Post extends SanityBody {
  _id: string;
  _type: "post";
  author: Author;
  body: Block[];
  mainImage: Image;
  title: string;
  slug: Slug;
  description: string;
  publishedAt: datetime;
}
export interface Author extends SanityBody {
  _type: "author";
  name: string;
  slug: Slug;
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
