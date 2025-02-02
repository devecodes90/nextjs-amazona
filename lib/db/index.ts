import mongoose from 'mongoose';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cached = (global as any).mongoose || { conn: null, promise: null };

export async function dbConnect( MONGOSE_URL = process.env.MONGODB_URI) {
   
   
   if (cached.conn) {
       return cached.conn;
   }

   if (!MONGOSE_URL) {
       throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
   }
   
   cached.promise = cached.promise || mongoose.connect(MONGOSE_URL);
   cached.conn = await cached.promise;
   return cached.conn;
}



