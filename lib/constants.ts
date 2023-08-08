import { Carousel, Cart, CartItem, Product, Promotions } from "@/lib/types";

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
    name: "Air Force 1 '07",
    slug: "air-force",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui nulla, auctor et libero non, aliquet fringilla nisi. In egestas elit eget risus consectetur fermentum.",
    src: "/assets/products/nike-airforce/airforce-1.webp",
    price: {
      current: 89.99,
      discount: 69.99,
    },
    variants: [
      {
        image: {
          src: "/assets/products/nike-airforce/airforce-1.webp",
          alt: "Nike Airforce 1 '07",
        },
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
        image: {
          src: "/assets/products/nike-airforce/airforce-2.webp",
          alt: "Nike Airforce 1 '07",
        },
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
        image: {
          src: "/assets/products/nike-airforce/airforce-3.webp",
          alt: "Nike Airforce 1 '07",
        },
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
    badges: {
      freeShipment: true,
      fastDelivery: true,
      newProduct: false,
    },
    tags: ["mens", "womens", "best-seller"],
    quantity: 15,
  },
  {
    id: 2,
    brand: "Nike",
    name: "Jordan Air 1 Low",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui nulla, auctor et libero non, aliquet fringilla nisi. In egestas elit eget risus consectetur fermentum.",
    src: "/assets/products/nike-jordan/jordan-1.webp",
    slug: "air-jordan",
    price: {
      current: 89.99,
      discount: 69.99,
    },
    variants: [
      {
        image: {
          src: "/assets/products/nike-jordan/jordan-1.webp",
          alt: "Jordan Air 1 Low",
        },
        options: [
          {
            option: "40",
            quantity: 1,
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
            quantity: 4,
          },
        ],
      },
      {
        image: {
          src: "/assets/products/nike-jordan/jordan-2.webp",
          alt: "Jordan Air 1 Low",
        },
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
      {
        image: {
          src: "/assets/products/nike-jordan/jordan-3.webp",
          alt: "Jordan Air 1 Low",
        },
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
            quantity: 0,
          },
          {
            option: "43",
            quantity: 4,
          },
        ],
      },
      {
        image: {
          src: "/assets/products/nike-jordan/jordan-4.webp",
          alt: "Jordan Air 1 Low",
        },
        options: [
          {
            option: "40",
            quantity: 9,
          },
          {
            option: "41",
            quantity: 1,
          },
          {
            option: "42",
            quantity: 0,
          },
          {
            option: "43",
            quantity: 3,
          },
        ],
      },
    ],
    badges: {
      freeShipment: true,
      fastDelivery: true,
      newProduct: false,
    },
    tags: ["mens", "womens", "best-seller"],
    quantity: 24,
  },
  {
    id: 3,
    brand: "Nike",
    name: "Nike Sportswear Tech Fleece",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui nulla, auctor et libero non, aliquet fringilla nisi. In egestas elit eget risus consectetur fermentum.",
    src: "/assets/products/nike-tech/nike-tech-1.webp",
    slug: "nike-tech",
    price: {
      current: 89.99,
      discount: 69.99,
    },
    variants: [
      {
        image: {
          src: "/assets/products/nike-tech/nike-tech-1.webp",
          alt: "Nike Sportswear Tech Fleece",
        },
        options: [
          {
            option: "S",
            quantity: 1,
          },
          {
            option: "M",
            quantity: 2,
          },
          {
            option: "L",
            quantity: 3,
          },
          {
            option: "XL",
            quantity: 4,
          },
          {
            option: "XXL",
            quantity: 0,
          },
        ],
      },
      {
        image: {
          src: "/assets/products/nike-tech/nike-tech-2.webp",
          alt: "Nike Sportswear Tech Fleece",
        },
        options: [
          {
            option: "S",
            quantity: 1,
          },
          {
            option: "M",
            quantity: 2,
          },
          {
            option: "L",
            quantity: 0,
          },
          {
            option: "XL",
            quantity: 0,
          },
          {
            option: "XXL",
            quantity: 1,
          },
        ],
      },
      {
        image: {
          src: "/assets/products/nike-tech/nike-tech-3.jfif",
          alt: "Nike Sportswear Tech Fleece",
        },
        options: [
          {
            option: "S",
            quantity: 0,
          },
          {
            option: "M",
            quantity: 0,
          },
          {
            option: "L",
            quantity: 3,
          },
          {
            option: "XL",
            quantity: 4,
          },
          {
            option: "XXL",
            quantity: 5,
          },
        ],
      },
    ],
    badges: {
      freeShipment: true,
      fastDelivery: true,
      newProduct: false,
    },
    tags: ["mens", "womens", "best-seller"],
    quantity: 26,
  },
  {
    id: 4,
    brand: "Lacoste",
    name: "Lacoste Polo",
    desc: "lorem ipsum",
    src: "/assets/products/lacoste-polo/lacoste-polo-1.webp",
    slug: "lacoste-polo",
    price: {
      current: 12.99,
    },
    variants: [
      {
        color: "White",
        image: {
          src: "/assets/products/lacoste-polo/lacoste-polo-1.webp",
          alt: "White Lacoste Polo",
        },
        options: [
          { option: "S", quantity: 3 },
          { option: "M", quantity: 0 },
          { option: "L", quantity: 1 },
          { option: "XL", quantity: 0 },
          { option: "XXL", quantity: 1 },
        ],
      },
      {
        color: "Black",
        image: {
          src: "/assets/products/lacoste-polo/lacoste-polo-2.webp",
          alt: "Black Lacoste Polo",
        },
        options: [
          { option: "S", quantity: 0 },
          { option: "M", quantity: 5 },
          { option: "L", quantity: 2 },
          { option: "XL", quantity: 1 },
          { option: "XXL", quantity: 0 },
        ],
      },
      {
        color: "Red",
        image: {
          src: "/assets/products/lacoste-polo/lacoste-polo-3.webp",
          alt: "Red Lacoste Polo",
        },
        options: [
          { option: "S", quantity: 3 },
          { option: "M", quantity: 3 },
          { option: "L", quantity: 4 },
          { option: "XL", quantity: 1 },
          { option: "XXL", quantity: 0 },
        ],
      },
      {
        color: "Green",
        image: {
          src: "/assets/products/lacoste-polo/lacoste-polo-4.webp",
          alt: "Green Lacoste Polo",
        },
        options: [
          { option: "S", quantity: 5 },
          { option: "M", quantity: 0 },
          { option: "L", quantity: 2 },
          { option: "XL", quantity: 4 },
          { option: "XXL", quantity: 0 },
        ],
      },
    ],
    badges: {
      freeShipment: false,
      fastDelivery: false,
      newProduct: false,
    },
    tags: ["mens"],
    quantity: 33,
  },
  {
    id: 5,
    brand: "Nivea",
    name: "Nivea Protect & Moisture Body Lotion",
    desc: "Lorem Ipsum",
    src: "/assets/products/nivea-sunscreen/nivea-sunscreen-1.webp",
    slug: "nivea-sunscreen",
    price: {
      discount: 12.99,
      current: 8.99,
    },
    badges: {
      freeShipment: false,
      fastDelivery: false,
      newProduct: false,
    },
    tags: ["Beauty & Personal Care"],
    quantity: 8,
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
