import { useState } from 'react';

export const useToggle = (): [boolean, () => void] => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return [isOpen, toggleModal];
};
