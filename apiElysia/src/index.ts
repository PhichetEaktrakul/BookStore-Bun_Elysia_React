import { Elysia } from "elysia";
import { swagger } from '@elysiajs/swagger'
import { store } from './store';
import cors from "@elysiajs/cors";

const app = new Elysia()
  .use(swagger())
  .use(
    cors({
      origin: 'http://localhost:5173', // Allow your frontend origin
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    })
  )
  .get("/", () => "Hello Elysia")
  .use(store)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);