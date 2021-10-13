interface BookProps {
  _id: string;
  images: string[];
  description: {
    descriptionHeader: string;
    descriptionBody: string;
  };
  author: string;
  title: string;
  price: string;
  id: string;
}

interface UserProps {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phoneNumber: string;
  state: string;
  city: string;
  id: string;
  password?: string;
}

interface OrderProps {
  customer_id: string;
  total: string;
  date_created: string;
  line_items: {
    name: string;
    quantity: string;
    total: string;
    product_id: string;
    price: string;
  }[];
}
