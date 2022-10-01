import { IProduct } from '../../ts/productTypes';

export type EditProdModalProps = {
  isOpen: boolean;
  toggleModal: () => void;
  editValue: IProduct;
};
