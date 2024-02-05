import pain1 from "../../public/img/Painting-1.png";
import pain2 from "../../public/img/Painting-2.png";
import pain3 from "../../public/img/Painting-3.png";
import pain4 from "../../public/img/Painting-4.png";
import pain5 from "../../public/img/Painting-5.png";

import artist1 from "../../public/img/artist-1.png";
import artist2 from "../../public/img/artist-2.png";
import artist3 from "../../public/img/artist-3.png";

export const NavLinks = [
  {
    label: "paintings",
    href: "/",
  },
  {
    label: "drawings",
    href: "/drawings",
  },
  {
    label: "sculptures",
    href: "/sculptures",
  },
  {
    label: "arists",
    href: "/arists",
  },
];

export const CaruselItems = [
  {
    id: 1,
    label: "Wallowing Breeze",
    slug: "wallowing-breeze",
    description: "Image desc",
    technique: "Oil on canvas",
    year: "2008",
    artist: "Hettie Richards",
    dimensions: "26 x 23",
    price: "620",
    src: pain1,
  },
  {
    id: 2,
    label: "J Resistance",
    slug: "j-resistance",
    description: "Image desc",
    technique: "Gouache on paper",
    year: "2018",
    artist: "Ria Arante",
    dimensions: "20 x 22",
    price: "450",
    src: pain2,
  },
  {
    id: 3,
    label: "Warn Basket",
    slug: "warn-basket",
    description: "Image desc",
    technique: "Acrylic on wood",
    year: "2014",
    artist: "flora Powers",
    dimensions: "24 x 22",
    price: "600",
    src: pain3,
  },
  {
    id: 4,
    label: "The Vonnegut",
    slug: "the-vonnegut",
    description: "Image desc",
    technique: "Oil on canvas",
    year: "2018",
    artist: "Ria Arante",
    dimensions: "26 x 24",
    price: "740",
    src: pain4,
  },
  {
    id: 5,
    label: "Into the Walls",
    slug: "into-the-walls",
    description: "Image desc",
    technique: "Oil on canvas",
    year: "2020",
    artist: "Ria Arante",
    dimensions: "22 x 22",
    price: "450",
    src: pain5,
  },
];

export const artists = [
  {
    name: "Mike Lambert",
    art: "Painter",
    location: "Texas",
    src: artist1,
  },
  {
    name: "Eugenia Cohen",
    art: "Painter",
    location: "Amsterdam",
    src: artist2,
  },
  {
    name: "Jenny hubbard",
    art: "Painter",
    location: "California",
    src: artist3,
  },
];
