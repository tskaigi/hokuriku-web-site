export type PersonalSponsor = {
  name: string;
  image: string;
  href: `http://${string}` | `https://${string}` | "";
};

export const personalSponsorList: PersonalSponsor[] = [
  {
    name: "おおいし (bicstone)",
    image: "personalSponsors/bicstone_me.jpg",
    href: "https://x.com/bicstone_me",
  },
  {
    name: "kzhrk",
    image: "personalSponsors/kzhrk0430.jpg",
    href: "https://x.com/kzhrk0430",
  },
];
