import { Carousel, Product, Promotions } from "@/lib/types";

export const categories: String[] = [
  "Best Sellers",
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

export const promotions: Promotions[] = [
  {
    brand: "Nivea",
    desc: "Get 15% off, It's Beauty Month.",
    src: "/assets/promotions/1.jpg",
  },
  {
    brand: "Nike",
    desc: "Save 25% on Nike Footwear.",
    src: "/assets/promotions/2.jpg",
  },
  {
    brand: "Adidas",
    desc: "Adidas -10% off, Higher Comfort With Supernova+.",
    src: "/assets/promotions/3.jpg",
  },
  {
    brand: "Lacoste",
    desc: "Lacoste up to 40% off.",
    src: "/assets/promotions/4.jpg",
  },
];

export const products: Product[] = [
  {
    id: 1,
    brand: "Nike",
    name: "Air Jordan",
    slug: "air-jordan",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui nulla, auctor et libero non, aliquet fringilla nisi. In egestas elit eget risus consectetur fermentum.",
    src: "/assets/products/nike/air-jordan/v1-1.webp",
    video: "/assets/products/nike/air-jordan/video.mov",
    price: {
      current: 89.99,
      discount: 69.99,
    },
    variants: [
      {
        images: [
          {
            src: "/assets/products/nike/air-jordan/v1-1.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-jordan/v1-2.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-jordan/v1-3.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-jordan/v1-4.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-jordan/v1-5.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-jordan/v1-6.webp",
            alt: "Air Jordan",
          },
        ],
        options: [
          {
            option: "40",
            quantity: 0,
          },
          {
            option: "41",
            quantity: 0,
          },
          {
            option: "42",
            quantity: 3,
          },
          {
            option: "43",
            quantity: 0,
          },
        ],
      },
      {
        images: [
          {
            src: "/assets/products/nike/air-jordan/v2-1.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-jordan/v2-2.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-jordan/v2-3.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-jordan/v2-4.jfif",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-jordan/v2-5.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-jordan/v2-6.webp",
            alt: "Air Jordan",
          },
        ],
        options: [
          {
            option: "40",
            quantity: 0,
          },
          {
            option: "41",
            quantity: 0,
          },
          {
            option: "42",
            quantity: 3,
          },
          {
            option: "43",
            quantity: 0,
          },
        ],
      },
      {
        images: [
          {
            src: "/assets/products/nike/air-jordan/v3-1.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-jordan/v3-2.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-jordan/v3-3.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-jordan/v3-4.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-jordan/v3-5.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-jordan/v3-6.webp",
            alt: "Air Jordan",
          },
        ],
        options: [
          {
            option: "40",
            quantity: 0,
          },
          {
            option: "41",
            quantity: 0,
          },
          {
            option: "42",
            quantity: 2,
          },
          {
            option: "43",
            quantity: 3,
          },
        ],
      },
      {
        images: [
          {
            src: "/assets/products/nike/air-jordan/v4-1.jfif",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-jordan/v4-2.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-jordan/v4-3.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-jordan/v4-4.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-jordan/v4-5.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-jordan/v4-6.webp",
            alt: "Air Jordan",
          },
        ],
        options: [
          {
            option: "40",
            quantity: 1,
          },
          {
            option: "41",
            quantity: 1,
          },
          {
            option: "42",
            quantity: 2,
          },
          {
            option: "43",
            quantity: 3,
          },
        ],
      },
    ],
    tags: ["mens", "womens", "best-seller"],
    quantity: 36,
  },
  {
    id: 2,
    brand: "Nike",
    name: "Air Force",
    slug: "air-force",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui nulla, auctor et libero non, aliquet fringilla nisi. In egestas elit eget risus consectetur fermentum.",
    src: "/assets/products/nike/air-force/v1-1.webp",
    video: "/assets/products/nike/air-force/video.mov",
    price: {
      current: 89.99,
      discount: 69.99,
    },
    variants: [
      {
        images: [
          {
            src: "/assets/products/nike/air-force/v1-1.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-force/v1-2.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-force/v1-3.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-force/v1-4.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-force/v1-5.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-force/v1-6.webp",
            alt: "Air Jordan",
          },
        ],
        options: [
          {
            option: "40",
            quantity: 0,
          },
          {
            option: "41",
            quantity: 0,
          },
          {
            option: "42",
            quantity: 3,
          },
          {
            option: "43",
            quantity: 0,
          },
        ],
      },
      {
        images: [
          {
            src: "/assets/products/nike/air-force/v2-1.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-force/v2-2.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-force/v2-3.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-force/v2-4.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-force/v2-5.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-force/v2-6.webp",
            alt: "Air Jordan",
          },
        ],
        options: [
          {
            option: "40",
            quantity: 0,
          },
          {
            option: "41",
            quantity: 0,
          },
          {
            option: "42",
            quantity: 3,
          },
          {
            option: "43",
            quantity: 0,
          },
        ],
      },
      {
        images: [
          {
            src: "/assets/products/nike/air-force/v3-1.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-force/v3-2.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-force/v3-3.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-force/v3-4.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-force/v3-5.webp",
            alt: "Air Jordan",
          },
          {
            src: "/assets/products/nike/air-force/v3-6.webp",
            alt: "Air Jordan",
          },
        ],
        options: [
          {
            option: "40",
            quantity: 0,
          },
          {
            option: "41",
            quantity: 0,
          },
          {
            option: "42",
            quantity: 2,
          },
          {
            option: "43",
            quantity: 3,
          },
        ],
      },
    ],
    tags: ["mens", "womens", "best-seller"],
    quantity: 36,
  },
];

export const carouselItems: Carousel[] = [
  {
    href: "./",
    src: "/assets/carousel/1.jpg",
    alt: "1",
  },
  {
    href: "./",
    src: "/assets/carousel/2.jpg",
    alt: "2",
  },
  {
    href: "./",
    src: "/assets/carousel/3.jpg",
    alt: "3",
  },
  {
    href: "./",
    src: "/assets/carousel/4.jpg",
    alt: "4",
  },
];
