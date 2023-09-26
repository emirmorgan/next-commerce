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
  price: number;
  discountPrice: number;
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

export type User = {
  id: number;
  email: string;
  address: UserAddress;
  role: string;
};

export type UserAddress = {
  title: string;
  contactNumber: string;
  details: string;
};

export type Order = {
  orderID: number;
  orderDate: string;
  orderStatus: string;
  deliveryAddress: string;
  deliveryContact: string;
  deliveryInvoice: string;
  deliveryTrace: string;
  orderItems: OrderItem[];
};

type OrderItem = {
  brand: string;
  name: string;
  image: string;
  color?: string;
  size?: string;
  price: string;
  quantity: number;
};

export type ProductCardType = {
  brand: string;
  name: string;
  slug: string;
  src: string;
  alt: string;
  price: number;
  discountPrice: number;
  isFavorite: boolean;
};
