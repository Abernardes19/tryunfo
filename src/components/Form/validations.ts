import { IFromCard } from "./form.structure";

export const validateAttr = (value: number): boolean => value <= 90 && value >= 0;

export const validateAllAttr = ({attr1, attr2, attr3}: IFromCard, name: string, value: number): boolean => {
  let allAttrs = {attr1, attr2, attr3};
  allAttrs = {...allAttrs, [name]: value}
  return Object.values(allAttrs)
    .reduce((prev, cur) => prev + Number(cur), 0) <= 210;
}

export const validadeBtn = (info: IFromCard) => {
  return Object.values(info).some((e) => e === "" || e === 0)
}