// app/api/products.ts
import { client  } from "@/sanity/lib/client";
import { type SanityDocument } from "next-sanity";


export async function getProducts() {
  const query = `*[_type == "product"]{
    _id,
    title,
    description,
    productImage {
      asset -> {
        _id,
        url
      }
    },
    price,
    tags,
    discountPercentage,
    isNew
  }`;

  const products = await client.fetch<SanityDocument[]>(query);
  return products.map((product) => ({
    id: product._id,
    title: product.title,
    image: product.productImage?.asset?.url || '', // Ensure the image URL is accessible
    // excerpt: product.description,
    excerpt: product.description.length > 50 ? product.description.substring(0, 50) + '...' : product.description, // Truncate if longer than 50 characters
    description: product.description,
    currentPrice: product.price,
    markedPrice: product.price * (1 + product.dicountPercentage / 100),
  }));
}

// export const products = [
//     {
//       id: 1,
//       title: "Elegant Sofa Set",
//       image: "https://source.unsplash.com/400x300/?sofa",
//       excerpt: "A modern and comfortable sofa set for your living room.",
//       currentPrice: 999,
//       markedPrice: 1299,
//       ratings: 4.5,
//       description: "This elegant sofa set is crafted with high-quality materials, ensuring both style and durability. Available in various colors to suit your decor."
//     },
//     {
//       id: 2,
//       title: "Minimalist Dining Table",
//       image: "https://source.unsplash.com/400x300/?dining-table",
//       excerpt: "A sleek dining table perfect for modern interiors.",
//       currentPrice: 599,
//       markedPrice: 799,
//       ratings: 4.7,
//       description: "This minimalist dining table adds a contemporary touch to any dining space. Designed for functionality and style."
//     },
//     {
//       id: 3,
//       title: "Ergonomic Office Chair",
//       image: "https://source.unsplash.com/400x300/?office-chair",
//       excerpt: "Stay comfortable during long hours of work.",
//       currentPrice: 199,
//       markedPrice: 249,
//       ratings: 4.3,
//       description: "An ergonomic office chair designed for maximum comfort and support, perfect for home or office use."
//     },
//     {
//       id: 4,
//       title: "Cozy Armchair",
//       image: "https://source.unsplash.com/400x300/?armchair",
//       excerpt: "A plush armchair for relaxation and style.",
//       currentPrice: 299,
//       markedPrice: 399,
//       ratings: 4.6,
//       description: "This cozy armchair is ideal for reading or lounging, adding a touch of elegance to any room."
//     },
//     {
//       id: 5,
//       title: "Modern Coffee Table",
//       image: "https://source.unsplash.com/400x300/?coffee-table",
//       excerpt: "A stylish coffee table to complement your living room.",
//       currentPrice: 149,
//       markedPrice: 199,
//       ratings: 4.4,
//       description: "This modern coffee table features a sleek design with durable materials, perfect for everyday use."
//     },
//     {
//       id: 6,
//       title: "Luxury Bed Frame",
//       image: "https://source.unsplash.com/400x300/?bed",
//       excerpt: "A luxurious bed frame for a restful night's sleep.",
//       currentPrice: 899,
//       markedPrice: 1199,
//       ratings: 4.8,
//       description: "This luxury bed frame combines style and functionality, crafted from premium materials."
//     },
//     {
//       id: 7,
//       title: "Compact TV Stand",
//       image: "https://source.unsplash.com/400x300/?tv-stand",
//       excerpt: "A compact and modern TV stand for your media needs.",
//       currentPrice: 199,
//       markedPrice: 259,
//       ratings: 4.2,
//       description: "This TV stand is designed to fit in compact spaces while providing ample storage."
//     },
//     {
//       id: 8,
//       title: "Contemporary Bookshelf",
//       image: "https://source.unsplash.com/400x300/?bookshelf",
//       excerpt: "A modern bookshelf for your reading collection.",
//       currentPrice: 299,
//       markedPrice: 349,
//       ratings: 4.5,
//       description: "This contemporary bookshelf offers a sleek design with multiple compartments for storage."
//     },
//     {
//       id: 9,
//       title: "Outdoor Lounge Chair",
//       image: "https://source.unsplash.com/400x300/?lounge-chair",
//       excerpt: "A stylish lounge chair for your patio or garden.",
//       currentPrice: 249,
//       markedPrice: 299,
//       ratings: 4.6,
//       description: "This outdoor lounge chair is weather-resistant and designed for ultimate comfort."
//     },
//     {
//       id: 10,
//       title: "Modern Wardrobe",
//       image: "https://source.unsplash.com/400x300/?wardrobe",
//       excerpt: "A spacious and modern wardrobe for your bedroom.",
//       currentPrice: 799,
//       markedPrice: 999,
//       ratings: 4.7,
//       description: "This modern wardrobe features multiple compartments and a sleek design to organize your belongings."
//     },
//     {
//       id: 11,
//       title: "Dining Chair Set",
//       image: "https://source.unsplash.com/400x300/?dining-chair",
//       excerpt: "A set of modern dining chairs for your dining area.",
//       currentPrice: 399,
//       markedPrice: 499,
//       ratings: 4.5,
//       description: "These dining chairs are ergonomically designed with a contemporary look to enhance your dining space."
//     },
//     {
//       id: 12,
//       title: "Modern Desk",
//       image: "https://source.unsplash.com/400x300/?desk",
//       excerpt: "A modern desk for your home office setup.",
//       currentPrice: 349,
//       markedPrice: 399,
//       ratings: 4.4,
//       description: "This modern desk offers ample space and a sleek design, perfect for work or study."
//     },
//     {
//       id: 13,
//       title: "Elegant Nightstand",
//       image: "https://source.unsplash.com/400x300/?nightstand",
//       excerpt: "A stylish nightstand to complement your bedroom decor.",
//       currentPrice: 129,
//       markedPrice: 179,
//       ratings: 4.6,
//       description: "This elegant nightstand features a minimalist design with storage options for your bedside essentials."
//     },
//     {
//       id: 14,
//       title: "Chic Wall Shelf",
//       image: "https://source.unsplash.com/400x300/?wall-shelf",
//       excerpt: "A chic wall shelf for displaying decor and essentials.",
//       currentPrice: 99,
//       markedPrice: 149,
//       ratings: 4.3,
//       description: "This wall shelf is a versatile and stylish addition to any room, offering functionality and elegance."
//     },
//     {
//       id: 15,
//       title: "Rustic Coffee Table",
//       image: "https://source.unsplash.com/400x300/?rustic-coffee-table",
//       excerpt: "A rustic coffee table for a cozy living room.",
//       currentPrice: 249,
//       markedPrice: 299,
//       ratings: 4.5,
//       description: "This rustic coffee table is crafted with a warm finish and sturdy construction, perfect for any home."
//     },
//     {
//       id: 16,
//       title: "Elegant Chaise Lounge",
//       image: "https://source.unsplash.com/400x300/?chaise-lounge",
//       excerpt: "A luxurious chaise lounge for your relaxation.",
//       currentPrice: 699,
//       markedPrice: 899,
//       ratings: 4.8,
//       description: "This elegant chaise lounge combines style and comfort, making it a perfect addition to any room."
//     }
//   ];