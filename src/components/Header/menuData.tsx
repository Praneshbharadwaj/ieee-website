import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Events",
    path: "/events",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5,
    title: "Blog",
    path: "/blogs",
    newTab: false,
  },
  {
    id: 6,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 62,
        title: "Events Page",
        path: "/events",
        newTab: false,
      },
      {
        id: 63,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 64,
        title: "Blog Grid Page",
        path: "/blogs",
        newTab: false,
      },
    ],
  },
];
export default menuData;
