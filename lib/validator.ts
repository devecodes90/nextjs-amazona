import { z } from "zod";
import { formatNumberWithDecimals } from "./utils";

const Price = (field: string) => {
   return z.coerce
     .number()
     .refine((value) => /^\d+(\.\d{1,2})?$/.test(formatNumberWithDecimals(value)), 
      `${field} must have exactly 2 decimal places`)
  
}

export const ProductInputSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long" ),
  slug: z.string().min(3, "Slug must be at least 3 characters long" ),
  category: z.string().min(1, "Category is required" ),
  images: z.array(z.string()).min(1, "Image is required" ),
  brand: z.string().min(1, "Brand is required" ),
  description: z.string(),
  isPublished: z.boolean().default(true),
  price: Price('Price'),
  listPrice: Price('List Price'),
  countInStock: z.coerce.number().int().nonnegative("Count in stock must be a positive number" ),
  tags: z.array(z.string()).default([]),
  sizes: z.array(z.string()).default([]),
  colors: z.array(z.string()).default([]),
  avgRating: z.coerce.number().int().nonnegative("Average rating must be a positive number" ),
  numReviews: z.coerce.number().int().nonnegative("Number of reviews must be a positive number" ),
  ratingDistribution: z.array(z.object({
    rating: z.number(),
    count: z.coerce.number().int().nonnegative("Count must be a positive number" ),}))
  .max(5),
  reviews: z.array(z.string()).default([]),
  numSales: z.coerce.number().int().nonnegative("Number of sales must be a positive number" ),
});


