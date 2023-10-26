export type Product = {
  id: number;
  brand: string;
  name: string;
  slug: string;
  src: string;
  alt: string;
  price: number;
  date: string;
  color?: string;
  desc?: string;
  category: string;
  subcategory: string;
  images: ProductImages[];
  similarProducts: ProductSimilar[];
  variants: ProductVariant[];
  discountPrice: number;
  isFavorite: boolean;
};

export type ProductCardType = {
  id: number;
  brand: string;
  name: string;
  slug: string;
  src: string;
  alt: string;
  price: number;
  date: string;
  color?: string;
  discountPrice: number;
  isFavorite: boolean;
};

export type ProductImages = {
  src: string;
  alt: string;
};

export type ProductVariant = {
  name: string;
  value: string;
  quantity: number;
};

export type ProductSimilar = {
  id: number;
  src: string;
  alt: string;
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

export type OrderListProps = {
  orderId: number;
  name: string;
  contact: string;
  orderStatus: string;
  orderTotal: number;
  orderDate: string;
};
