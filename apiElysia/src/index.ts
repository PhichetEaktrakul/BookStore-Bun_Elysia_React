// Import necessary modules and middleware
import { Elysia } from "elysia";
import { swagger } from '@elysiajs/swagger';
import { store } from './store'; // Import the store instance
import cors from "@elysiajs/cors";

const app = new Elysia()
  .use(swagger()) // Enable Swagger for API documentation
  .use(
    cors({
      origin: 'http://localhost:5173', // Allow requests from the frontend origin
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    })
  )
  .use(store) 
  .get("/", () => "Hello Elysia") 
  .listen(3000); // Listen on port 3000

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);