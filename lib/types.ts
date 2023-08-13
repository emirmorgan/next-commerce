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
  desc: string;
  src: string;
  video?: string;
  slug: string;
  price: {
    current: number;
    discount?: number;
  };
  variants?: ProductVariant[];
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
