type ProductVariantOption = {
  option: string;
  quantity: number;
};

type ProductVariantImages = {
  src: string;
  alt: string;
};

export type ProductVariant = {
  color?: string;
  options: ProductVariantOption[];
  images: ProductVariantImages[];
};

export type Product = {
  id: number;
  brand: string;
  name: string;
  desc?: string;
  src: string;
  slug: string;
  category: string;
  price: {
    current: number;
    discount?: number;
  };
  variants?: ProductVariant[];
  gender?: string;
  tags: String[];
  quantity: number;
};

export type Cart = {
  id: number;
  productId: number;
  brand: string;
  name: string;
  src: string;
  price: number;
  color?: string;
  size?: string;
  quantity: number;
};

export type CartItem = {
  id: number;
  productId: number;
  brand: string;
  name: string;
  src: string;
  price: number;
  color?: string;
  size?: string;
};

export type Carousel = {
  href: string;
  src: string;
  alt: string;
};

export type Campaigns = {
  brand: string;
  desc: string;
  src: string;
};
