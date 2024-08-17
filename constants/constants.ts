import { Icons } from "../components/Icons";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import Colors from "./Colors";

export const constant = {
  SPACING: 16,
  borderRadius: 10,
  titleFontSize: 18,
  textFontSize: 16,
  subTextFontSize: 14,
};

export const ScreensArray = [
  {
    route: "Home",
    label: "Home",
    type: Icons.Feather,
    icon: "home",
    component: Home,
  },
  {
    route: "Profile",
    label: "Profile",
    type: Icons.AntDesign,
    icon: "user",
    component: Profile,
  },
  {
    route: "Settings",
    label: "Settings",
    type: Icons.FontAwesome5,
    icon: "tools",
    component: Settings,
  },
];

export const drawerMenu = [
  {
    title: "Settings",
    bg: Colors.menu1,
    type: Icons.Feather,
    icon: "settings",
    route: "Settings",
    menuList: [
      { title: "Change Theme" },
      { title: "Notify Me" },
      { title: "Notify Me2" },
      { title: "Notify Me3" },
      { title: "Notify Me4" },
    ],
  },
  {
    title: "Todo's",
    bg: Colors.menu2,
    type: Icons.Feather,
    icon: "check-square",
    route: "Todo",
    menuList: [
      { title: "Eat" },
      { title: "Code" },
      { title: "Sleep" },
      { title: "Sleep1" },
      { title: "Sleep2" },
      { title: "Sleep3" },
    ],
  },
  {
    title: "Projects",
    bg: Colors.menu3,
    type: Icons.Octicons,
    icon: "project",
    route: "Project",
    menuList: [
      { title: "Portfolio" },
      { title: "Note-APP" },
      { title: "RN-Ui" },
    ],
  },
];
