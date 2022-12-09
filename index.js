const serverless = require("serverless-http");
const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  ctx.body = {
    message: "Hello, this is the home page of a serverless endpoint",
  };
});

router.get("/new", (ctx) => {
  ctx.body = { message: "It seems you are a new user!" };
});

router.get("/regular", (ctx) => {
  ctx.body = { message: "Welcome to the regular room!" };
});

router.get("/vip", (ctx) => {
  ctx.body = { message: "Shhh, this is a VIP thing" };
});

app.use(router.routes());

module.exports.handler = serverless(app);
