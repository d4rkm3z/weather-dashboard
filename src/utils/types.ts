import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface IMenuElement {
  icon: IconDefinition;
  text: string;
}

export interface IMenu {
  title: string;
  content: IMenuElement[];
}
