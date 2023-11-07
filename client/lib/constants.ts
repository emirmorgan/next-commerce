import { Carousel, Campaigns } from "@/lib/types";

export const categories: String[] = [
  "Womens",
  "Mens",
  "Kids",
  "Grocery & Essentials",
  "Electronics",
  "Home & Kitchen",
  "Beauty & Personal Care",
  "Sports & Outdoors",
  "Books",
  "Digital Products",
];

export const subcategories = [
  "Shoes",
  "Backpacks",
  "Shirts",
  "Phones",
  "Chairs",
];

export const colors = [
  { hex: "#FFF", label: "White" },
  { hex: "#000", label: "Black" },
  { hex: "#FF0000", label: "Red" },
  { hex: "#FFFF00", label: "Yellow" },
  { hex: "#0000FF", label: "Blue" },
  { hex: "#008000", label: "Green" },
  { hex: "#FFC0CB", label: "Pink" },
];

export const sorts = [
  { name: "dateDesc", value: "Posted: newest first" },
  { name: "dateAsc", value: "Posted: oldest first" },
  { name: "priceAsc", value: "Price: lowest first" },
  { name: "priceDesc", value: "Price: highest first" },
];

export const brands = ["Nike", "Adidas", "Lacoste", "The North Face"];

export const campaigns: Campaigns[] = [
  {
    brand: "The Nort Face",
    desc: "Get 15% off",
    src: "/assets/campaigns/1.webp",
  },
  {
    brand: "Nike",
    desc: "Save 25% on Nike Footwear.",
    src: "/assets/campaigns/2.webp",
  },
  {
    brand: "Adidas",
    desc: "Adidas -10% off, Higher Comfort With Supernova+.",
    src: "/assets/campaigns/3.webp",
  },
  {
    brand: "Lacoste",
    desc: "Lacoste up to 40% off.",
    src: "/assets/campaigns/4.webp",
  },
];

export const carouselItems: Carousel[] = [
  {
    href: "./",
    src: "/assets/carousel/1.webp",
    alt: "1",
  },
  {
    href: "./",
    src: "/assets/carousel/2.webp",
    alt: "2",
  },
  {
    href: "./",
    src: "/assets/carousel/3.webp",
    alt: "3",
  },
  {
    href: "./",
    src: "/assets/carousel/4.webp",
    alt: "4",
  },
];
