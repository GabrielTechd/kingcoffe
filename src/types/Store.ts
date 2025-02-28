export interface Store {
  id: number;
  name: string;
  city: string;
  address: string;
  phone: string;
  hours: string;
  image: string;
  description: string;
}

export interface StoreProps {
  store: Store;
}
