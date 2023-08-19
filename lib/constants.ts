import { Carousel, Product, Campaigns } from "@/lib/types";

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

export const promotions: Campaigns[] = [
  {
    brand: "The Nort Face",
    desc: "Get 15% off",
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
    gender: "Unisex",
    category: "Shoes",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui nulla, auctor et libero non, aliquet fringilla nisi. In egestas elit eget risus consectetur fermentum.",
    src: "/assets/products/nike/air-jordan/v1-1.webp",
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
    tags: ["best-seller", "air-jordan"],
    quantity: 36,
  },
  {
    id: 2,
    brand: "Nike",
    name: "Air Force",
    slug: "air-force",
    gender: "Unisex",
    category: "Shoes",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui nulla, auctor et libero non, aliquet fringilla nisi. In egestas elit eget risus consectetur fermentum.",
    src: "/assets/products/nike/air-force/v1-1.webp",
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
            alt: "Air Force",
          },
          {
            src: "/assets/products/nike/air-force/v2-2.webp",
            alt: "Air Force",
          },
          {
            src: "/assets/products/nike/air-force/v2-3.webp",
            alt: "Air Force",
          },
          {
            src: "/assets/products/nike/air-force/v2-4.webp",
            alt: "Air Force",
          },
          {
            src: "/assets/products/nike/air-force/v2-5.webp",
            alt: "Air Force",
          },
          {
            src: "/assets/products/nike/air-force/v2-6.webp",
            alt: "Air Force",
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
            alt: "Air Force",
          },
          {
            src: "/assets/products/nike/air-force/v3-2.webp",
            alt: "Air Force",
          },
          {
            src: "/assets/products/nike/air-force/v3-3.webp",
            alt: "Air Force",
          },
          {
            src: "/assets/products/nike/air-force/v3-4.webp",
            alt: "Air Force",
          },
          {
            src: "/assets/products/nike/air-force/v3-5.webp",
            alt: "Air Force",
          },
          {
            src: "/assets/products/nike/air-force/v3-6.webp",
            alt: "Air Force",
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
    tags: ["best-seller", "air-force"],
    quantity: 36,
  },
  {
    id: 3,
    brand: "Nike",
    name: "Air Max",
    slug: "air-max",
    gender: "Unisex",
    category: "Shoes",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui nulla, auctor et libero non, aliquet fringilla nisi. In egestas elit eget risus consectetur fermentum.",
    src: "/assets/products/nike/air-max/v1-1.webp",
    price: {
      current: 89.99,
      discount: 69.99,
    },
    variants: [
      {
        images: [
          {
            src: "/assets/products/nike/air-max/v1-1.webp",
            alt: "Air Max",
          },
          {
            src: "/assets/products/nike/air-max/v1-2.jfif",
            alt: "Air Max",
          },
          {
            src: "/assets/products/nike/air-max/v1-3.webp",
            alt: "Air Max",
          },
          {
            src: "/assets/products/nike/air-max/v1-4.webp",
            alt: "Air Max",
          },
          {
            src: "/assets/products/nike/air-max/v1-5.jfif",
            alt: "Air Max",
          },
          {
            src: "/assets/products/nike/air-max/v1-6.webp",
            alt: "Air Max",
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
            src: "/assets/products/nike/air-max/v2-1.webp",
            alt: "Air Max",
          },
          {
            src: "/assets/products/nike/air-max/v2-2.webp",
            alt: "Air Max",
          },
          {
            src: "/assets/products/nike/air-max/v2-3.webp",
            alt: "Air Max",
          },
          {
            src: "/assets/products/nike/air-max/v2-4.jfif",
            alt: "Air Max",
          },
          {
            src: "/assets/products/nike/air-max/v2-5.webp",
            alt: "Air Max",
          },
          {
            src: "/assets/products/nike/air-max/v2-6.webp",
            alt: "Air Max",
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
            src: "/assets/products/nike/air-max/v3-1.webp",
            alt: "Air Max",
          },
          {
            src: "/assets/products/nike/air-max/v3-2.webp",
            alt: "Air Max",
          },
          {
            src: "/assets/products/nike/air-max/v3-3.webp",
            alt: "Air Max",
          },
          {
            src: "/assets/products/nike/air-max/v3-4.webp",
            alt: "Air Max",
          },
          {
            src: "/assets/products/nike/air-max/v3-5.webp",
            alt: "Air Max",
          },
          {
            src: "/assets/products/nike/air-max/v3-6.webp",
            alt: "Air Max",
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
    tags: ["air-max", "best-seller"],
    quantity: 36,
  },
  {
    id: 4,
    brand: "Nike",
    name: "Blazer",
    slug: "blazer",
    gender: "Unisex",
    category: "Shoes",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui nulla, auctor et libero non, aliquet fringilla nisi. In egestas elit eget risus consectetur fermentum.",
    src: "/assets/products/nike/blazer/v1-1.webp",
    price: {
      current: 89.99,
      discount: 69.99,
    },
    variants: [
      {
        images: [
          {
            src: "/assets/products/nike/blazer/v1-1.webp",
            alt: "Nike Blazer",
          },
          {
            src: "/assets/products/nike/blazer/v1-2.jfif",
            alt: "Nike Blazer",
          },
          {
            src: "/assets/products/nike/blazer/v1-3.webp",
            alt: "Nike Blazer",
          },
          {
            src: "/assets/products/nike/blazer/v1-4.webp",
            alt: "Nike Blazer",
          },
          {
            src: "/assets/products/nike/blazer/v1-5.webp",
            alt: "Nike Blazer",
          },
          {
            src: "/assets/products/nike/blazer/v1-6.webp",
            alt: "Nike Blazer",
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
            src: "/assets/products/nike/blazer/v2-1.webp",
            alt: "Nike Blazer",
          },
          {
            src: "/assets/products/nike/blazer/v2-2.webp",
            alt: "Nike Blazer",
          },
          {
            src: "/assets/products/nike/blazer/v2-3.webp",
            alt: "Nike Blazer",
          },
          {
            src: "/assets/products/nike/blazer/v2-4.webp",
            alt: "Nike Blazer",
          },
          {
            src: "/assets/products/nike/blazer/v2-5.webp",
            alt: "Nike Blazer",
          },
          {
            src: "/assets/products/nike/blazer/v2-6.webp",
            alt: "Nike Blazer",
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
    ],
    tags: ["nike-blazer", "best-seller"],
    quantity: 36,
  },
  {
    id: 5,
    brand: "Nike",
    name: "Dunk",
    slug: "dunk",
    gender: "Unisex",
    category: "Shoes",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui nulla, auctor et libero non, aliquet fringilla nisi. In egestas elit eget risus consectetur fermentum.",
    src: "/assets/products/nike/dunk/v1-1.webp",
    price: {
      current: 89.99,
      discount: 69.99,
    },
    variants: [
      {
        images: [
          {
            src: "/assets/products/nike/dunk/v1-1.webp",
            alt: "Nike Dunk",
          },
          {
            src: "/assets/products/nike/dunk/v1-2.webp",
            alt: "Nike Dunk",
          },
          {
            src: "/assets/products/nike/dunk/v1-3.webp",
            alt: "Nike Dunk",
          },
          {
            src: "/assets/products/nike/dunk/v1-4.webp",
            alt: "Nike Dunk",
          },
          {
            src: "/assets/products/nike/dunk/v1-5.webp",
            alt: "Nike Dunk",
          },
          {
            src: "/assets/products/nike/dunk/v1-6.webp",
            alt: "Nike Dunk",
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
            src: "/assets/products/nike/dunk/v2-1.webp",
            alt: "Nike Dunk",
          },
          {
            src: "/assets/products/nike/dunk/v2-2.webp",
            alt: "Nike Dunk",
          },
          {
            src: "/assets/products/nike/dunk/v2-3.webp",
            alt: "Nike Dunk",
          },
          {
            src: "/assets/products/nike/dunk/v2-4.webp",
            alt: "Nike Dunk",
          },
          {
            src: "/assets/products/nike/dunk/v2-5.webp",
            alt: "Nike Dunk",
          },
          {
            src: "/assets/products/nike/dunk/v2-6.webp",
            alt: "Nike Dunk",
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
    ],
    tags: ["nike-dunk"],
    quantity: 36,
  },
  {
    id: 6,
    brand: "Nike",
    name: "Mercurial",
    slug: "mercurial",
    gender: "Unisex",
    category: "Shoes",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui nulla, auctor et libero non, aliquet fringilla nisi. In egestas elit eget risus consectetur fermentum.",
    src: "/assets/products/nike/mercurial/v1-1.webp",
    price: {
      current: 89.99,
      discount: 69.99,
    },
    variants: [
      {
        images: [
          {
            src: "/assets/products/nike/mercurial/v1-1.webp",
            alt: "Nike Mercurial",
          },
          {
            src: "/assets/products/nike/mercurial/v1-2.webp",
            alt: "Nike Mercurial",
          },
          {
            src: "/assets/products/nike/mercurial/v1-3.webp",
            alt: "Nike Mercurial",
          },
          {
            src: "/assets/products/nike/mercurial/v1-4.webp",
            alt: "Nike Mercurial",
          },
          {
            src: "/assets/products/nike/mercurial/v1-5.webp",
            alt: "Nike Mercurial",
          },
          {
            src: "/assets/products/nike/mercurial/v1-6.webp",
            alt: "Nike Mercurial",
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
            src: "/assets/products/nike/mercurial/v2-1.webp",
            alt: "Nike Mercurial",
          },
          {
            src: "/assets/products/nike/mercurial/v2-2.webp",
            alt: "Nike Mercurial",
          },
          {
            src: "/assets/products/nike/mercurial/v2-3.webp",
            alt: "Nike Mercurial",
          },
          {
            src: "/assets/products/nike/mercurial/v2-4.webp",
            alt: "Nike Mercurial",
          },
          {
            src: "/assets/products/nike/mercurial/v2-5.webp",
            alt: "Nike Mercurial",
          },
          {
            src: "/assets/products/nike/mercurial/v2-6.webp",
            alt: "Nike Mercurial",
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
    ],
    tags: ["nike-mercurial"],
    quantity: 36,
  },
  {
    id: 7,
    brand: "Nike",
    name: "Pegasus",
    slug: "pegasus",
    gender: "Unisex",
    category: "Shoes",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui nulla, auctor et libero non, aliquet fringilla nisi. In egestas elit eget risus consectetur fermentum.",
    src: "/assets/products/nike/pegasus/v1-1.webp",
    price: {
      current: 89.99,
      discount: 69.99,
    },
    variants: [
      {
        images: [
          {
            src: "/assets/products/nike/pegasus/v1-1.webp",
            alt: "Nike Pegasus",
          },
          {
            src: "/assets/products/nike/pegasus/v1-2.webp",
            alt: "Nike Pegasus",
          },
          {
            src: "/assets/products/nike/pegasus/v1-3.webp",
            alt: "Nike Pegasus",
          },
          {
            src: "/assets/products/nike/pegasus/v1-4.webp",
            alt: "Nike Pegasus",
          },
          {
            src: "/assets/products/nike/pegasus/v1-5.webp",
            alt: "Nike Pegasus",
          },
          {
            src: "/assets/products/nike/pegasus/v1-6.webp",
            alt: "Nike Pegasus",
          },
        ],
        options: [
          {
            option: "40",
            quantity: 5,
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
            quantity: 5,
          },
        ],
      },
      {
        images: [
          {
            src: "/assets/products/nike/pegasus/v2-1.webp",
            alt: "Nike Pegasus",
          },
          {
            src: "/assets/products/nike/pegasus/v2-2.webp",
            alt: "Nike Pegasus",
          },
          {
            src: "/assets/products/nike/pegasus/v2-3.webp",
            alt: "Nike Pegasus",
          },
          {
            src: "/assets/products/nike/pegasus/v2-4.webp",
            alt: "Nike Pegasus",
          },
          {
            src: "/assets/products/nike/pegasus/v2-5.webp",
            alt: "Nike Pegasus",
          },
          {
            src: "/assets/products/nike/pegasus/v2-6.webp",
            alt: "Nike Pegasus",
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
    ],
    tags: ["nike-pegasus"],
    quantity: 36,
  },
  {
    id: 8,
    brand: "Adidas",
    name: "Superstar",
    slug: "superstar",
    gender: "Unisex",
    category: "Shoes",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui nulla, auctor et libero non, aliquet fringilla nisi. In egestas elit eget risus consectetur fermentum.",
    src: "/assets/products/adidas/superstar/v1-1.avif",
    price: {
      current: 89.99,
      discount: 69.99,
    },
    variants: [
      {
        images: [
          {
            src: "/assets/products/adidas/superstar/v1-1.avif",
            alt: "Adidas Superstar",
          },
          {
            src: "/assets/products/adidas/superstar/v1-2.avif",
            alt: "Adidas Superstar",
          },
          {
            src: "/assets/products/adidas/superstar/v1-3.avif",
            alt: "Adidas Superstar",
          },
          {
            src: "/assets/products/adidas/superstar/v1-4.avif",
            alt: "Adidas Superstar",
          },
          {
            src: "/assets/products/adidas/superstar/v1-5.avif",
            alt: "Adidas Superstar",
          },
          {
            src: "/assets/products/adidas/superstar/v1-6.avif",
            alt: "Adidas Superstar",
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
            src: "/assets/products/adidas/superstar/v2-1.avif",
            alt: "Adidas Superstar",
          },
          {
            src: "/assets/products/adidas/superstar/v2-2.avif",
            alt: "Adidas Superstar",
          },
          {
            src: "/assets/products/adidas/superstar/v2-3.avif",
            alt: "Adidas Superstar",
          },
          {
            src: "/assets/products/adidas/superstar/v2-4.avif",
            alt: "Adidas Superstar",
          },
          {
            src: "/assets/products/adidas/superstar/v2-5.avif",
            alt: "Adidas Superstar",
          },
          {
            src: "/assets/products/adidas/superstar/v2-6.avif",
            alt: "Adidas Superstar",
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
    ],
    tags: ["adidas-superstar"],
    quantity: 36,
  },
  {
    id: 9,
    brand: "Adidas",
    name: "Everyset",
    slug: "everyset",
    gender: "Unisex",
    category: "Shoes",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui nulla, auctor et libero non, aliquet fringilla nisi. In egestas elit eget risus consectetur fermentum.",
    src: "/assets/products/adidas/everyset/v1-1.avif",
    price: {
      current: 89.99,
      discount: 69.99,
    },
    variants: [
      {
        images: [
          {
            src: "/assets/products/adidas/everyset/v1-1.avif",
            alt: "Adidas Everyset",
          },
          {
            src: "/assets/products/adidas/everyset/v1-2.avif",
            alt: "Adidas Everyset",
          },
          {
            src: "/assets/products/adidas/everyset/v1-3.avif",
            alt: "Adidas Everyset",
          },
          {
            src: "/assets/products/adidas/everyset/v1-4.avif",
            alt: "Adidas Everyset",
          },
          {
            src: "/assets/products/adidas/everyset/v1-5.avif",
            alt: "Adidas Everyset",
          },
          {
            src: "/assets/products/adidas/everyset/v1-6.avif",
            alt: "Adidas Everyset",
          },
        ],
        options: [
          {
            option: "40",
            quantity: 0,
          },
          {
            option: "41",
            quantity: 2,
          },
          {
            option: "42",
            quantity: 0,
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
            src: "/assets/products/adidas/everyset/v2-1.avif",
            alt: "Adidas Everyset",
          },
          {
            src: "/assets/products/adidas/everyset/v2-2.avif",
            alt: "Adidas Everyset",
          },
          {
            src: "/assets/products/adidas/everyset/v2-3.avif",
            alt: "Adidas Everyset",
          },
          {
            src: "/assets/products/adidas/everyset/v2-4.avif",
            alt: "Adidas Everyset",
          },
          {
            src: "/assets/products/adidas/everyset/v2-5.avif",
            alt: "Adidas Everyset",
          },
          {
            src: "/assets/products/adidas/everyset/v2-6.avif",
            alt: "Adidas Everyset",
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
    ],
    tags: ["adidas-everyset"],
    quantity: 36,
  },
  {
    id: 10,
    brand: "Adidas",
    name: "Galaxy 5",
    slug: "galaxy5",
    gender: "Unisex",
    category: "Shoes",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui nulla, auctor et libero non, aliquet fringilla nisi. In egestas elit eget risus consectetur fermentum.",
    src: "/assets/products/adidas/galaxy5/v1-1.avif",
    price: {
      current: 89.99,
      discount: 69.99,
    },
    variants: [
      {
        images: [
          {
            src: "/assets/products/adidas/galaxy5/v1-1.avif",
            alt: "Adidas Galaxy 5",
          },
          {
            src: "/assets/products/adidas/galaxy5/v1-2.avif",
            alt: "Adidas Galaxy 5",
          },
          {
            src: "/assets/products/adidas/galaxy5/v1-3.avif",
            alt: "Adidas Galaxy 5",
          },
          {
            src: "/assets/products/adidas/galaxy5/v1-4.avif",
            alt: "Adidas Galaxy 5",
          },
          {
            src: "/assets/products/adidas/galaxy5/v1-5.avif",
            alt: "Adidas Galaxy 5",
          },
          {
            src: "/assets/products/adidas/galaxy5/v1-6.avif",
            alt: "Adidas Galaxy 5",
          },
        ],
        options: [
          {
            option: "40",
            quantity: 5,
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
            src: "/assets/products/adidas/galaxy5/v2-1.avif",
            alt: "Adidas Galaxy 5",
          },
          {
            src: "/assets/products/adidas/galaxy5/v2-2.avif",
            alt: "Adidas Galaxy 5",
          },
          {
            src: "/assets/products/adidas/galaxy5/v2-3.avif",
            alt: "Adidas Galaxy 5",
          },
          {
            src: "/assets/products/adidas/galaxy5/v2-4.avif",
            alt: "Adidas Galaxy 5",
          },
          {
            src: "/assets/products/adidas/galaxy5/v2-5.avif",
            alt: "Adidas Galaxy 5",
          },
          {
            src: "/assets/products/adidas/galaxy5/v2-6.avif",
            alt: "Adidas Galaxy 5",
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
    ],
    tags: ["adidas-galaxy5"],
    quantity: 36,
  },
  {
    id: 10,
    brand: "Adidas",
    name: "Run 60s",
    slug: "run60s",
    gender: "Unisex",
    category: "Shoes",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui nulla, auctor et libero non, aliquet fringilla nisi. In egestas elit eget risus consectetur fermentum.",
    src: "/assets/products/adidas/run60s/v1-1.avif",
    price: {
      current: 89.99,
      discount: 69.99,
    },
    variants: [
      {
        images: [
          {
            src: "/assets/products/adidas/run60s/v1-1.avif",
            alt: "Adidas Run 60s",
          },
          {
            src: "/assets/products/adidas/run60s/v1-2.avif",
            alt: "Adidas Run 60s",
          },
          {
            src: "/assets/products/adidas/run60s/v1-3.avif",
            alt: "Adidas Run 60s",
          },
          {
            src: "/assets/products/adidas/run60s/v1-4.avif",
            alt: "Adidas Run 60s",
          },
          {
            src: "/assets/products/adidas/run60s/v1-5.avif",
            alt: "Adidas Run 60s",
          },
          {
            src: "/assets/products/adidas/run60s/v1-6.avif",
            alt: "Adidas Run 60s",
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
    ],
    tags: ["adidas-run60s"],
    quantity: 36,
  },
  {
    id: 11,
    brand: "Adidas",
    name: "Baseball Cap",
    slug: "adidas-baseball-cap",
    gender: "Unisex",
    category: "Caps",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui nulla, auctor et libero non, aliquet fringilla nisi. In egestas elit eget risus consectetur fermentum.",
    src: "/assets/products/adidas/baseball-cap/v1-1.avif",
    price: {
      current: 12.99,
      discount: 9.99,
    },
    variants: [
      {
        images: [
          {
            src: "/assets/products/adidas/baseball-cap/v1-1.avif",
            alt: "Adidas Baseball Cap",
          },
        ],
        options: [
          {
            option: "S",
            quantity: 8,
          },
          {
            option: "M",
            quantity: 5,
          },
          {
            option: "L",
            quantity: 0,
          },
        ],
      },
      {
        images: [
          {
            src: "/assets/products/adidas/baseball-cap/v2-1.avif",
            alt: "Adidas Baseball Cap",
          },
        ],
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
            quantity: 9,
          },
        ],
      },
    ],
    tags: ["adidas-baseball-cap"],
    quantity: 36,
  },
  {
    id: 12,
    brand: "Lacoste",
    name: "Polo",
    slug: "polo",
    gender: "Unisex",
    category: "Shirts",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui nulla, auctor et libero non, aliquet fringilla nisi. In egestas elit eget risus consectetur fermentum.",
    src: "/assets/products/lacoste/polo/v1-1.webp",
    price: {
      current: 49.99,
      discount: 44.99,
    },
    variants: [
      {
        color: "White",
        images: [
          {
            src: "/assets/products/lacoste/polo/v1-1.webp",
            alt: "White Lacoste Polo",
          },
          {
            src: "/assets/products/lacoste/polo/v1-2.webp",
            alt: "White Lacoste Polo",
          },
          {
            src: "/assets/products/lacoste/polo/v1-3.webp",
            alt: "White Lacoste Polo",
          },
          {
            src: "/assets/products/lacoste/polo/v1-4.webp",
            alt: "White Lacoste Polo",
          },
          {
            src: "/assets/products/lacoste/polo/v1-5.webp",
            alt: "White Lacoste Polo",
          },
        ],
        options: [
          {
            option: "S",
            quantity: 8,
          },
          {
            option: "M",
            quantity: 5,
          },
          {
            option: "L",
            quantity: 0,
          },
          {
            option: "XL",
            quantity: 7,
          },
        ],
      },
      {
        color: "Black",
        images: [
          {
            src: "/assets/products/lacoste/polo/v2-1.webp",
            alt: "Black Lacoste Polo",
          },
          {
            src: "/assets/products/lacoste/polo/v2-2.webp",
            alt: "Black Lacoste Polo",
          },
          {
            src: "/assets/products/lacoste/polo/v2-3.webp",
            alt: "Black Lacoste Polo",
          },
          {
            src: "/assets/products/lacoste/polo/v2-4.webp",
            alt: "Black Lacoste Polo",
          },
          {
            src: "/assets/products/lacoste/polo/v2-5.webp",
            alt: "Black Lacoste Polo",
          },
          {
            src: "/assets/products/lacoste/polo/v2-6.webp",
            alt: "Black Lacoste Polo",
          },
        ],
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
            quantity: 9,
          },
          {
            option: "XL",
            quantity: 9,
          },
        ],
      },
    ],
    tags: ["lacoste-polo"],
    quantity: 36,
  },
  {
    id: 13,
    brand: "Lacoste",
    name: "Shirt",
    slug: "lacoste-shirt",
    gender: "Unisex",
    category: "Shirts",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui nulla, auctor et libero non, aliquet fringilla nisi. In egestas elit eget risus consectetur fermentum.",
    src: "/assets/products/lacoste/shirt/v1-1.webp",
    price: {
      current: 49.99,
      discount: 44.99,
    },
    variants: [
      {
        color: "White",
        images: [
          {
            src: "/assets/products/lacoste/shirt/v1-1.webp",
            alt: "White Lacoste Shirt",
          },
          {
            src: "/assets/products/lacoste/shirt/v1-2.webp",
            alt: "White Lacoste Shirt",
          },
          {
            src: "/assets/products/lacoste/shirt/v1-3.webp",
            alt: "White Lacoste Shirt",
          },
          {
            src: "/assets/products/lacoste/shirt/v1-4.webp",
            alt: "White Lacoste Shirt",
          },
        ],
        options: [
          {
            option: "S",
            quantity: 8,
          },
          {
            option: "M",
            quantity: 5,
          },
          {
            option: "L",
            quantity: 0,
          },
          {
            option: "XL",
            quantity: 7,
          },
        ],
      },
      {
        color: "Black",
        images: [
          {
            src: "/assets/products/lacoste/shirt/v2-1.webp",
            alt: "Black Lacoste Shirt",
          },
          {
            src: "/assets/products/lacoste/shirt/v2-2.webp",
            alt: "Black Lacoste Shirt",
          },
          {
            src: "/assets/products/lacoste/shirt/v2-3.webp",
            alt: "Black Lacoste Shirt",
          },
          {
            src: "/assets/products/lacoste/shirt/v2-4.webp",
            alt: "Black Lacoste Shirt",
          },
        ],
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
            quantity: 9,
          },
          {
            option: "XL",
            quantity: 9,
          },
        ],
      },
      {
        color: "Blue",
        images: [
          {
            src: "/assets/products/lacoste/shirt/v3-1.webp",
            alt: "Blue Lacoste Polo",
          },
          {
            src: "/assets/products/lacoste/shirt/v3-2.webp",
            alt: "Blue Lacoste Polo",
          },
          {
            src: "/assets/products/lacoste/shirt/v3-3.webp",
            alt: "Blue Lacoste Polo",
          },
          {
            src: "/assets/products/lacoste/shirt/v3-4.webp",
            alt: "Blue Lacoste Polo",
          },
          {
            src: "/assets/products/lacoste/shirt/v3-5.webp",
            alt: "Blue Lacoste Polo",
          },
        ],
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
            quantity: 9,
          },
          {
            option: "XL",
            quantity: 9,
          },
        ],
      },
    ],
    tags: ["lacoste-shirt"],
    quantity: 36,
  },
  {
    id: 14,
    brand: "The North Face",
    name: "The North Face Jester Backpack",
    slug: "jester-backpack",
    gender: "Unisex",
    category: "Backpacks",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui nulla, auctor et libero non, aliquet fringilla nisi. In egestas elit eget risus consectetur fermentum.",
    src: "/assets/products/the-north-face/jester-backpack/v1-1.webp",
    price: {
      current: 59.99,
      discount: 54.99,
    },
    variants: [
      {
        images: [
          {
            src: "/assets/products/the-north-face/jester-backpack/v1-1.webp",
            alt: "The North Face Jester Backpack",
          },
          {
            src: "/assets/products/the-north-face/jester-backpack/v1-2.webp",
            alt: "The North Face Jester Backpack",
          },
          {
            src: "/assets/products/the-north-face/jester-backpack/v1-3.webp",
            alt: "The North Face Jester Backpack",
          },
          {
            src: "/assets/products/the-north-face/jester-backpack/v1-4.webp",
            alt: "The North Face Jester Backpack",
          },
          {
            src: "/assets/products/the-north-face/jester-backpack/v1-5.webp",
            alt: "The North Face Jester Backpack",
          },
        ],
        options: [
          {
            option: "S",
            quantity: 5,
          },
          {
            option: "M",
            quantity: 0,
          },
          {
            option: "L",
            quantity: 0,
          },
        ],
      },
      {
        images: [
          {
            src: "/assets/products/the-north-face/jester-backpack/v2-1.webp",
            alt: "The North Face Jester Backpack",
          },
          {
            src: "/assets/products/the-north-face/jester-backpack/v2-2.webp",
            alt: "The North Face Jester Backpack",
          },
          {
            src: "/assets/products/the-north-face/jester-backpack/v2-3.webp",
            alt: "The North Face Jester Backpack",
          },
          {
            src: "/assets/products/the-north-face/jester-backpack/v2-4.webp",
            alt: "The North Face Jester Backpack",
          },
          {
            src: "/assets/products/the-north-face/jester-backpack/v2-5.webp",
            alt: "The North Face Jester Backpack",
          },
          {
            src: "/assets/products/the-north-face/jester-backpack/v2-6.webp",
            alt: "The North Face Jester Backpack",
          },
        ],
        options: [
          {
            option: "S",
            quantity: 0,
          },
          {
            option: "M",
            quantity: 5,
          },
          {
            option: "L",
            quantity: 9,
          },
        ],
      },
      {
        images: [
          {
            src: "/assets/products/the-north-face/jester-backpack/v3-1.webp",
            alt: "The North Face Jester Backpack",
          },
          {
            src: "/assets/products/the-north-face/jester-backpack/v3-2.webp",
            alt: "The North Face Jester Backpack",
          },
          {
            src: "/assets/products/the-north-face/jester-backpack/v3-3.webp",
            alt: "The North Face Jester Backpack",
          },
          {
            src: "/assets/products/the-north-face/jester-backpack/v3-4.webp",
            alt: "The North Face Jester Backpack",
          },
          {
            src: "/assets/products/the-north-face/jester-backpack/v3-5.webp",
            alt: "The North Face Jester Backpack",
          },
          {
            src: "/assets/products/the-north-face/jester-backpack/v3-6.webp",
            alt: "The North Face Jester Backpack",
          },
        ],
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
            quantity: 9,
          },
        ],
      },
    ],
    tags: ["the-north-face-jester-backpack"],
    quantity: 36,
  },
  {
    id: 15,
    brand: "The North Face",
    name: "The North Face Easy T-Shirt",
    slug: "easy-tshirt",
    gender: "Unisex",
    category: "Shirts",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui nulla, auctor et libero non, aliquet fringilla nisi. In egestas elit eget risus consectetur fermentum.",
    src: "/assets/products/the-north-face/easy-tshirt/v1-1.webp",
    price: {
      current: 59.99,
      discount: 54.99,
    },
    variants: [
      {
        images: [
          {
            src: "/assets/products/the-north-face/easy-tshirt/v1-1.webp",
            alt: "The North Face Jester Backpack",
          },
          {
            src: "/assets/products/the-north-face/easy-tshirt/v1-2.webp",
            alt: "The North Face Jester Backpack",
          },
        ],
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
            quantity: 0,
          },
          {
            option: "XL",
            quantity: 1,
          },
        ],
      },
      {
        images: [
          {
            src: "/assets/products/the-north-face/easy-tshirt/v2-1.webp",
            alt: "The North Face Jester Backpack",
          },
          {
            src: "/assets/products/the-north-face/easy-tshirt/v2-2.webp",
            alt: "The North Face Jester Backpack",
          },
          {
            src: "/assets/products/the-north-face/easy-tshirt/v2-3.webp",
            alt: "The North Face Jester Backpack",
          },
          {
            src: "/assets/products/the-north-face/easy-tshirt/v2-4.webp",
            alt: "The North Face Jester Backpack",
          },
        ],
        options: [
          {
            option: "S",
            quantity: 1,
          },
          {
            option: "M",
            quantity: 0,
          },
          {
            option: "L",
            quantity: 9,
          },
          {
            option: "XL",
            quantity: 5,
          },
        ],
      },
      {
        images: [
          {
            src: "/assets/products/the-north-face/easy-tshirt/v3-1.webp",
            alt: "The North Face Easy T-Shirt",
          },
          {
            src: "/assets/products/the-north-face/easy-tshirt/v3-2.webp",
            alt: "The North Face Easy T-Shirt",
          },
          {
            src: "/assets/products/the-north-face/easy-tshirt/v3-3.webp",
            alt: "The North Face Easy T-Shirt",
          },
          {
            src: "/assets/products/the-north-face/easy-tshirt/v3-4.webp",
            alt: "The North Face Easy T-Shirt",
          },
        ],
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
            quantity: 9,
          },
          {
            option: "XL",
            quantity: 0,
          },
        ],
      },
      {
        images: [
          {
            src: "/assets/products/the-north-face/easy-tshirt/v4-1.webp",
            alt: "The North Face Easy T-Shirt",
          },
          {
            src: "/assets/products/the-north-face/easy-tshirt/v4-2.webp",
            alt: "The North Face Easy T-Shirt",
          },
          {
            src: "/assets/products/the-north-face/easy-tshirt/v4-3.webp",
            alt: "The North Face Easy T-Shirt",
          },
        ],
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
            quantity: 9,
          },
          {
            option: "XL",
            quantity: 1,
          },
        ],
      },
    ],
    tags: ["the-north-face-easy-tshirt"],
    quantity: 36,
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
