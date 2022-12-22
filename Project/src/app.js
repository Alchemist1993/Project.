//*#MODULE IMPORTS
import {
  ABOUT_PAGE_LINK,
  HOME_PAGE_LINK,
  PIC_PAGE_LINK,
  LOGIN_PAGE_LINK,
  LINK_HOME_PAGE,
} from "./services/domService.js";
import PAGES from "./models/pageModel.js";
import { onChangePage } from "./routes/router.js";
//*# END OF MODULE IMPORTS

//*#region האזנה לאירועים
HOME_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.HOME));
ABOUT_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.ABOUT));
PIC_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.PIC));
LOGIN_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.LOGIN));
LINK_HOME_PAGE.addEventListener(`click`, () => onChangePage(PAGES.HOME));
//*endregion..
