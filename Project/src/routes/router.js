//*.Router is the `Tsomet` of the application. It is responsible for the navigation between pages...

import PAGES from "../models/pageModel.js";
import {
  HOME_PAGE,
  ABOUT_PAGE,
  PIC_PAGE,
  LOGIN_PAGE,
  ERROR_404_PAGE,
} from "../services/domService.js";

//*#Switch between pages Method
// export const onChangePage = (page) => {
//   HOME_PAGE.className = "d-none";
//   ABOUT_PAGE.className = "d-none";
//   PIC_PAGE.className = "d-none";
//   LOGIN_PAGE.className = "d-none";
//   ERROR_404_PAGE.className = "d-none";
//   switch (page) {
//     case PAGES.HOME:
//       HOME_PAGE.className = "d-block";
//       break;
//     case PAGES.ABOUT:
//       ABOUT_PAGE.className = "d-block";
//       break;
//     case PAGES.PIC:
//       PIC_PAGE.className = "d-block";
//       break;
//     case PAGES.LOGIN:
//       LOGIN_PAGE.className = "d-block";
//       break;
//     default:
//       ERROR_404_PAGE.className = "d-block";
//       break;
//   }
// };
//*#End of Switch between pages Method

const pageToDoMap = [
  {
    page: PAGES.HOME,
    dom: HOME_PAGE,
  },
  {
    page: PAGES.ABOUT,
    dom: ABOUT_PAGE,
  },
  {
    page: PAGES.PIC,
    dom: PIC_PAGE,
  },
  {
    page: PAGES.LOGIN,
    dom: LOGIN_PAGE,
  },
  {
    page: PAGES.ERROR_404,
    dom: ERROR_404_PAGE,
  },
];

export const onChangePage = (page) => {
  pageToDoMap.forEach((pageMap) => (pageMap.dom.className = "d-none")); // Hide all pages
  const pageMap = pageToDoMap.find((pageMap) => pageMap.page === page); // Find the page that was clicked
  if (pageMap) return (pageMap.dom.className = "d-block"); // Show the page that was clicked
  return (ERROR_404_PAGE.className = "d-block"); // Show the 404 page
};
