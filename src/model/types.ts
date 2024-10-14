export interface UIcomponentType {
  id: string;
  label: string;
  primaryKey: string;
  groupName: string;
}

export interface BoardProps {
  list: Array<UIcomponentType>;
}

export interface UIComponentSectionsProps {
  id:string;
  name: string;
  uiComponents: Array<UIcomponentType>;
}
