import { faker } from "@faker-js/faker";

interface Product {
  name: string;
  price: string;
  description: string;
  image: string;
}

export const getProducts = (count: number): Product[] => {
  const products: Product[] = [];

  for (let i = 0; i < count; i++) {
    const product: Product = {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentence(),
      image: faker.image.urlLoremFlickr({
        width: 128,
        height: 128,
        category: "fashion",
      }),
    };
    products.push(product);
  }

  return products;
};
