import { IProductInput } from "@/types";
import { Document, model, Model, models, Schema } from "mongoose";


export interface IProduct extends Document, IProductInput {
    _id: string,
    createdAt: Date
    updatedAt: Date
}

const productSchema = new Schema<IProduct>({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    images: [String],
    brand: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    listPrice: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    },
    tags: { type: [String], default: ['New Arrivals'] },
    sizes:{ type: [String], default: ['S', 'M', 'L', 'XL', 'XXL'] },
    colors: { type: [String],default: ['BLUE', 'GREEN', 'RED', 'YELLOW', 'BLACK', 'WHITE', 'GRAY'] },
    avgRating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    ratingDistribution: 
    [
      {
         rating: {
             type: Number,
             required: true
         },
         count: {
             type: Number,
             required: true
         }
      },
    ] ,
    reviews: 
    [
      {
        type: Schema.Types.ObjectId,
        ref: 'Review',
        default: []
      }
    ],
    numSales: 
    {
        type: Number,
        required: true,
        default: 0
    },
    isPublished: 
    {
        type: Boolean,
        required: true,
        default: false
    },
}, 
   {
       timestamps: true
   }
)

const Product = (models.Product as Model<IProduct>) || 
model<IProduct>('Product', productSchema);
export default Product;


export type Data = {
    products: IProductInput[]
    headerMenus: { 
       name: string,
       href: string
    }[]
    carousels: { 
       image: string
       url: string
       title: string
       buttonCaption: string,
       isPublished: boolean
    }[]
}