//*.Router is the `Tsomet` of the application. It is responsible for the navigation between pages..

import PAGES from "../models/pageModel.js";
import {
  HOME_PAGE,
  ABOUT_PAGE,
  PIC_PAGE,
  LOGIN_PAGE,
  ERROR_404_PAGE,
} from "../services/domService.js";

export const onChangePage = (page) => {
  HOME_PAGE.className = "d-none";
  ABOUT_PAGE.className = "d-none";
  PIC_PAGE.className = "d-none";
  LOGIN_PAGE.className = "d-none";
  ERROR_404_PAGE.className = "d-none";
  switch (page) {
    case PAGES.HOME:
      HOME_PAGE.className = "d-block";
      break;
    case PAGES.ABOUT:
      ABOUT_PAGE.className = "d-block";
      break;
    case PAGES.PIC:
      PIC_PAGE.className = "d-block";
      break;
    case PAGES.LOGIN:
      LOGIN_PAGE.className = "d-block";
      break;
    default:
      ERROR_404_PAGE.className = "d-block";
      break;
  }
};
