import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppTabNavigator } from "./AppTabNavigator";
import customSideBarMenu from "./CustomSideBarMenu";

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppTabNavigator,
    },
  },
  {
    contentComponent: customSideBarMenu,
  },
  {
    initialRouteName: "Home",
  }
);
