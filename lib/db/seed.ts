import { cwd } from "process";
import { dbConnect } from ".";
import { loadEnvConfig } from "@next/env";
import data from "../data";
import Product from "./models/Product.model";


loadEnvConfig(cwd());


const main = async () => {
  try {
     const { products } = data;
     await dbConnect(process.env.MONGODB_URI);
     
     await Product.deleteMany({});
     const createdproducts = await Product.insertMany(products);
     
     console.log({createdproducts, message: "products created successfully"});
     process.exit(0);
  
  } catch (error) {
    console.log(error);
    throw new Error("Failed to seed products");
  }
  
}

main()