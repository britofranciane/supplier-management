export interface Supplier {
  id?: number;
  name: string;
  email: string;
  description: string;
  contacts: Contact[];
  address: Address;
  cep?: string;
  state?: string;
  city?: string;
  street?: string;
  number?: string;
  reference?: string;
}

export interface Contact {
  nameContact: string;
  phone: string;
}

export interface Address {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  reference?: string;
}
