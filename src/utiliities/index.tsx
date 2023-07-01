import { StaticImageData } from "next/image";
import { Calender, Global, Key, Knc, Security, UserTick } from "../../public/image";

export interface ICard {
  img: any;
  title: string;
  text: string;
}

export const offer: ICard[] = [
  {
    img: Knc,
    title: 'Network monitoring',
    text: 'Lorem ipsum dolor sit amet consectetur. Et ornare posuere quisque morbi egestas convallis.',
  },
  {
    img: Security,
    title: 'Network monitoring',
    text: 'Lorem ipsum dolor sit amet consectetur. Et ornare posuere quisque morbi egestas convallis.',
  },
  {
    img: UserTick,
    title: 'Network monitoring',
    text: 'Lorem ipsum dolor sit amet consectetur. Et ornare posuere quisque morbi egestas convallis.',
  },
  {
    img: Global,
    title: 'Network monitoring',
    text: 'Lorem ipsum dolor sit amet consectetur. Et ornare posuere quisque morbi egestas convallis.',
  },
  {
    img: Key,
    title: 'Network monitoring',
    text: 'Lorem ipsum dolor sit amet consectetur. Et ornare posuere quisque morbi egestas convallis.',
  },
  {
    img: Calender,
    title: 'Network monitoring',
    text: 'Lorem ipsum dolor sit amet consectetur. Et ornare posuere quisque morbi egestas convallis.',
  },

]
