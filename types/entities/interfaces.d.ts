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
}
