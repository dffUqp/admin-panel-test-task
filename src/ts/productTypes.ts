export interface IProduct {
  id: number;
  name: string;
  imageUrl: string;
  count: number;
  size: {
    width: number;
    height: number;
  };
  weight: string;
  comments?: ProductComment[];
}

export type ProductComment = {
  id: number;
  productId: number;
  description: string;
  date: string;
};

export type EditedProduct = {
  name: string;
  imageUrl: string;
  count: number;
  size: {
    width: number;
    height: number;
  };
  weight: string;
};

export type EditedComment = {
  productId: number;
  description: string;
  date: string;
};
