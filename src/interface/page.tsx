import { ReactNode } from "react";

export interface products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  productName: string;
  Price: number;
}

export interface ReactChildren {
  children: ReactNode;
}
