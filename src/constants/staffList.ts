export type Staff = {
  name: string;
  image: string;
  href: `http://${string}` | `https://${string}` | "";
};

export const staffList: Staff[] = [
  {
    name: "takumi",
    image: "/staff/takumi.jpg",
    href: "https://x.com/1ye_q",
  },
];
