
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  createdAt: number;
}

export type ViewMode = 'catalog' | 'admin';

export interface AdminCredentials {
  password: string;
}
