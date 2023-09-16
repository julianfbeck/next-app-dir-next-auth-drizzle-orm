import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

const DATABASE_URL = process.env.DATABASE_URL as string;

const queryClient = postgres(DATABASE_URL);

export const db = drizzle(queryClient);
