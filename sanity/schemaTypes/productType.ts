import { defineField, defineType } from "sanity";
interface productType {
  _id: string;
  name: string;
  description: string;
  slug: { current: string };
  imageUrl: string;
  price: number;
  content: string;
}
export const productType = defineType({
  name: "product",
  title: "product",
  type: "document",
  fields: [
    defineField({
        name: "id",
        title: "ID",
        type: "string",
        validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: "content",
        title: "Content",
        type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverImage",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "markedPrice",
      title: "Marked Price",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
