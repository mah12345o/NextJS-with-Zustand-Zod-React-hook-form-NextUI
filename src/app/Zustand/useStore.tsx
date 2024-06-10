"use client";
import create from "zustand";

interface ProductState {
  toggleState: boolean;
  productsPrice: number;
  productsTitle: string;
  productsImage: string;
  productsId: number;
  productsDescription: string;
  productsCategory: string;
  setProductsPrice: (price: number) => void;
  setProductsTitle: (title: string) => void;
  setProductsImage: (img: string) => void;
  setProductsId: (id: number) => void;
  setProductsDescription: (des: string) => void;
  setProductsCategory: (category: string) => void;
  toggleModal: (
    price: number,
    title: string,
    img: string,
    id: number,
    category: string,
    des: string
  ) => void;
}

export const useStore = create<ProductState>((set) => ({
  toggleState: false,
  productsPrice: 0,
  productsTitle: "",
  productsImage: "",
  productsId: 0,
  productsDescription: "",
  productsCategory: "",

  setProductsPrice: (price) => set(() => ({ productsPrice: price })),
  setProductsTitle: (title) => set(() => ({ productsTitle: title })),
  setProductsImage: (img) => set(() => ({ productsImage: img })),
  setProductsId: (id) => set(() => ({ productsId: id })),
  setProductsDescription: (des) => set(() => ({ productsDescription: des })),
  setProductsCategory: (category) =>
    set(() => ({ productsCategory: category })),

  toggleModal: (price, title, img, id, category, des) =>
    set((state) => ({
      toggleState: !state.toggleState,
      productsPrice: price,
      productsTitle: title,
      productsImage: img,
      productsId: id,
      productsCategory: category,
      productsDescription: des,
    })),
}));
