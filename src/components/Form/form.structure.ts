import * as React from "react";

export interface IFromCard {
  name: string;
  description: string;
  attr1: number;
  attr2: number;
  attr3: number;
  image: string;
  rarity: string;
  trunfo: boolean;
}

export const defaultForm = {
  name: "",
  description: "",
  attr1: 0,
  attr2: 0,
  attr3: 0,
  image: "",
  rarity: "Normal",
  trunfo: false,
}

export interface IFormProps {
  info: IFromCard;
  setInfo: React.Dispatch<React.SetStateAction<IFromCard>>
  setCards: React.Dispatch<React.SetStateAction<IFromCard[]>>;
}
