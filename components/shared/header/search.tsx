import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { APP_NAME } from "@/lib/constants";
import { SearchIcon } from "lucide-react";

const categories = [
   "Clothing",
   "Accessories",
   "Shoes",
   "Jewelry",
   "Watches",
   "Electronics",
   "Home",
   "Beauty",
   "Pets", 'Men', 'Women', 'Girls', 'Boys'
]
export default async function Search() {
   return (
   
     <form action="/search" method="get" className="flex items-stretch h-10">
        <Select name="category">
          <SelectTrigger className="w-auto h-full dark:border-gray-200 bg-gray-100 text-black border-r  rounded-r-none rounded-l-md rtl:rounded-r-md rtl:rounded-l-none">
              <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent position="popper">
              <SelectItem value="All">All</SelectItem>
              {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                      {category}
                  </SelectItem>
              ))}
          </SelectContent>
        </Select>
        <Input type="search" 
               name="q" placeholder={`Search Site ${APP_NAME}`} 
               className="flex-1 rounded-none h-full dark:border-gray-200 bg-gray-100  text-black text-base"/>
         <button 
                 type="submit" 
                 className="bg-primary text-primary-foreground text-black rounded-s-none rounded-e-md h-full px-3 py-2">
           <SearchIcon className="h-6 w-6" />
         </button>      
     </form>
   )
}