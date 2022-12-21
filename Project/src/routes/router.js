//*.Router is the `Tsomet` of the application. It is responsible for the navigation between pages.

import PAGES from "../models/pageModel.js";
import { HOME_PAGE, ABOUT_PAGE } from "../services/domService.js";

export const onChangePage = (page) => {
  HOME_PAGE.className = "d-none";
  ABOUT_PAGE.className = "d-none";

  switch (page) {
    case PAGES.HOME:
      HOME_PAGE.className = "d-block";
      break;
    case PAGES.ABOUT:
      ABOUT_PAGE.className = "d-block";
      break;
  }
};
