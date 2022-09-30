import { IProduct } from "../../ts/productTypes";

export type EditProdModalProps = {
  open: boolean;
  handleClose: () => void;
  editValue: IProduct
};
