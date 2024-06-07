import { ReactNode } from "react";

export interface products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface ReactChildren {
  children: ReactNode;
}
