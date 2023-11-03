import { number, object, string } from "yup";

const productCreateSchema = object({
  brand: string().required("Brand is required."),
  name: string().required("Name is required."),
  slug: string().required("Slug is required."),
  price: number().required("Price is required"),
  discountPrice: number(),
  categoryId: number().required("Category is required"),
  subcategoryId: number().required("Subcategory is required"),
});

export default productCreateSchema;
