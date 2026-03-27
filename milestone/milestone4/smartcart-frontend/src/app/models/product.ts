export interface Product {
  id?: number;
  name: string;
  category: string;
  quantity: number;
  price: number;
  store_name: string;
  purchased: number | boolean;
}
