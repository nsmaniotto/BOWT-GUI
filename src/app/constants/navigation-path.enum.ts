import { NavigationRootPathEnum } from "./navigation-root-path.enum";


export enum NavigationPathEnum {
  AUTH = `${NavigationRootPathEnum.ROOT}${NavigationRootPathEnum.AUTH}`,
  BOAT = `${NavigationRootPathEnum.ROOT}${NavigationRootPathEnum.BOAT}`
}
