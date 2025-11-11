import { createContext } from "react";

export const DropdownContext = createContext<{
  isOpen: boolean;
  defaultValue: string;
  setIsOpen: (isOpen: boolean | ((prev: boolean) => boolean)) => void;
  onSelectItem: (item: string) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
  onChangeValue: (value: string) => void;
}>({
  isOpen: false,
  defaultValue: '',
  setIsOpen: () => {},
  onSelectItem: () => {},
  searchValue: '',
  setSearchValue: () => {},
  onChangeValue: () => {},
});