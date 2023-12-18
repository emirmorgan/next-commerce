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
  quantity: number;
};

export type ProductImages = {
  src: string;
  alt: string;
};

export type ProductVariant = {
  id?: number;
  name: string;
  value: string;
  quantity: number;
};

export type ProductSimilar = {
  id: number;
  src: string;
  alt: string;
  slug: string;
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
  fullName: string;
  contactNumber: string;
  country: string;
  city: string;
  addressLine: string;
  addressLineSecond: string | null;
};

export type Order = {
  orderID: number;
  orderDate: string;
  orderTotal: string;
  orderStatus: string;
  orderInvoice: string;
  orderTrace?: string;
  address: OrderAddress;
  orderItems: OrderProduct[];
};

type OrderAddress = {
  fullName: string;
  contactNumber: string;
  country: string;
  city: string;
  addressLine: string;
  addressLineSecond?: string;
};

type OrderProduct = {
  brand: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
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

export type OrderProps = {
  totalOrders: number;
  pageSize: number;
  pageNumber: number;
  orders: OrderListProps[];
};

export type StatisticsProps = {
  totalSales: number;
  totalCustomer: number;
  totalProducts: number;
  totalOrders: number;
  visitors: VisitorData[];
  sales: Sales;
};

type Sales = {
  thisMonth: SaleData[];
  lastMonth: SaleData[];
};

type SaleData = {
  label: string;
  data: number;
};

type VisitorData = {
  label: string;
  percentage: number;
};

export type ProductRequest = {
  brand: string;
  name: string;
  price: number;
  discountPrice: number | null;
  date: string;
  slug: string;
  quantity: number;
  categoryId: number;
  subcategoryId: number;
  variants: any;
};
