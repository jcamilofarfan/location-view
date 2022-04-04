import { ChildrenLocation } from "./child-location";

export interface ParentLocation {
  id: number;
  name: string;
  area: number;
  locationChildren: ChildrenLocation[];
}
