export interface ProductDetails {
    origin?: string;
    roast?: string;
    intensity?: string;
    notes?: string[];
    weight?: string;
    compatibility?: string;
    volume?: string;
    process?: string;
    units?: string;
  }
  

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  details: ProductDetails;
}
