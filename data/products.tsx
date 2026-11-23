
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  salePrice?: number;
  image: string;
  sizes: string[];
  description: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "SR001",
    name: "Men's Performance T-Shirt",
    category: "Men",
    price: 2500,
    image: "",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Premium breathable sports t-shirt for everyday training.",
    featured: true,
  },
  {
    id: "SR002",
    name: "Men's Sports Tracksuit",
    category: "Men",
    price: 5500,
    image: "",
    sizes: ["M", "L", "XL", "XXL"],
    description: "Comfortable tracksuit designed for athletic performance.",
    featured: true,
  },
  {
    id: "SR003",
    name: "Women's Training Leggings",
    category: "Women",
    price: 3200,
    image: "",
    sizes: ["S", "M", "L", "XL"],
    description: "Flexible leggings for workouts and sports activities.",
    featured: true,
  },
  {
    id: "SR004",
    name: "Women's Sports Top",
    category: "Women",
    price: 2200,
    image: "",
    sizes: ["S", "M", "L", "XL"],
    description: "Lightweight sports top with a comfortable fit.",
    featured: false,
  },
  {
    id: "SR005",
    name: "Kids Sports Tracksuit",
    category: "Kids",
    price: 3500,
    image: "",
    sizes: ["XS", "S", "M", "L"],
    description: "Comfortable sportswear for active kids.",
    featured: true,
  },
  {
    id: "SR006",
    name: "Running Sports Shoes",
    category: "Shoes",
    price: 6500,
    salePrice: 5500,
    image: "",
    sizes: ["39", "40", "41", "42", "43", "44"],
    description: "Lightweight running shoes with cushioned support.",
    featured: true,
  },
  {
    id: "SR007",
    name: "Cricket Training Jersey",
    category: "Cricket",
    price: 2800,
    image: "",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Professional cricket training jersey.",
    featured: true,
  },
  {
    id: "SR008",
    name: "Football Jersey",
    category: "Football",
    price: 3000,
    image: "",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Breathable football jersey for match days.",
    featured: false,
  },
  {
    id: "SR009",
    name: "Sports Cap",
    category: "Accessories",
    price: 1200,
    image: "",
    sizes: ["One Size"],
    description: "Adjustable cap for outdoor sports.",
    featured: false,
  },
  {
    id: "SR010",
    name: "Sports Hoodie",
    category: "Men",
    price: 4500,
    salePrice: 3800,
    image: "",
    sizes: ["M", "L", "XL", "XXL"],
    description: "Warm and comfortable athletic hoodie.",
    featured: true,
  },
  {
    id: "SR011",
    name: "Training Shorts",
    category: "Men",
    price: 1800,
    image: "",
    sizes: ["S", "M", "L", "XL"],
    description: "Lightweight shorts for daily training.",
    featured: false,
  },
  {
    id: "SR012",
    name: "Sports Gym Bag",
    category: "Accessories",
    price: 3500,
    image: "",
    sizes: ["One Size"],
    description: "Spacious bag for carrying sports equipment.",
    featured: false,
  },
];
