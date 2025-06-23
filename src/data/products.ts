export type Product = {
  id: number;
  title: string;
  code: string;
  price: number;
  originalPrice?: number;
  brand: string;
  image: string;
  colors: string[];
};

export const products: Product[] = [
  {
    id: 1,
    title: "Μπουφάν Κοριτσιού Pink Star",
    code: "JK-001",
    price: 29.99,
    originalPrice: 39.99,
    brand: "PinkStar",
    image: "/images/product1.jpg",
    colors: ["ροζ", "άσπρο"]
  },
  {
    id: 2,
    title: "Παλτό Καρό",
    code: "CT-002",
    price: 39.99,
    brand: "CheckMate",
    image: "/images/product2.jpg",
    colors: ["γκρι", "μαύρο"]
  },
  {
    id: 3,
    title: "Αδιάβροχο με Καπέλο",
    code: "RC-003",
    price: 24.99,
    originalPrice: 29.99,
    brand: "RainyDays",
    image: "/images/product3.jpg",
    colors: ["μπλε"]
  }
];
