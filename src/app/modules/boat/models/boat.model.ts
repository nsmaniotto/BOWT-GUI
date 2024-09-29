export class Boat {
  id?: number;
  name?: string;
  description?: string;
}

export enum BoatFieldMinLength {
  NAME = 3,
  DESCRIPTION = 5
}

export enum BoatFieldMaxLength {
  NAME = 15,
  DESCRIPTION = 100
}
