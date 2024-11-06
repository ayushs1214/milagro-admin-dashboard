// Add to existing types
export interface ProductPrice {
  value: number;
  unit: 'box' | 'piece' | 'sqft';
  minThreshold?: number; // Admin-only minimum selling price
}

export interface ProductSpecifications {
  tileSize: string;
  thickness: string;
  color: string;
  applicationAreas: string[];
  finishType: string;
  baseMaterial: string;
  length: string;
  piecesPerBox: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: ProductPrice;
  moq: number;
  category: string;
  images: string[];
  specifications: ProductSpecifications;
  stock: number;
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}