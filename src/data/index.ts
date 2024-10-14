import { UIComponentSectionsProps, UIcomponentType } from "../model/types";

export const listOfTypoComponents: Array<UIcomponentType> = [
  {
    id: "1",
    label: "h1",
    primaryKey: "",
    groupName: "typography",
  },
  {
    id: "2",
    label: "h2",
    primaryKey: "",
    groupName: "typography",
  },
  {
    id: "3",
    label: "h3",
    primaryKey: "",
    groupName: "typography",
  },
  {
    id: "4",
    label: "h4",
    primaryKey: "",
    groupName: "typography",
  },
  {
    id: "5",
    label: "h5",
    primaryKey: "",
    groupName: "typography",
  },
  {
    id: "6",
    label: "h6",
    primaryKey: "",
    groupName: "typography",
  },
];

export const layoutComponents: Array<UIcomponentType> = [
  {
    id: "1",
    label: "Stack",
    primaryKey: "",
    groupName: "Layout",
  },
  {
    id: "2",
    label: "Box",
    primaryKey: "",
    groupName: "Layout",
  },
];

export const AllComponents: Array<UIComponentSectionsProps> = [
  {
    id: "1",
    name: "Typography",
    uiComponents: listOfTypoComponents,
  },
  {
    id: "2",
    name: "Layout",
    uiComponents: layoutComponents,
  },
];
