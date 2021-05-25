import { Application, Router } from "oak";

const router = new Router();
router.get("/", (ctx) => {
  ctx.response.body = "Hello Heroku!";
});
router.get("/oak", (ctx) => {
  ctx.response.body = "Hello Oak!";
});
router.get("/docker", (ctx) => {
  ctx.response.body = "Hello Docker!";
});

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = parseInt(Deno.env.get("PORT"));
const port = PORT || 8070;

console.log("listening on port", port);

await app.listen({ port });
