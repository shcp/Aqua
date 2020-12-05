const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const indexRouter = require('./routes/index');
const valveRouter = require('./routes/valve');

const app = new Koa();

app.use(bodyParser())
    .use(indexRouter.routes())
    .use(indexRouter.allowedMethods())
    .use(valveRouter.routes())
    .use(valveRouter.allowedMethods())
    .listen(30000);
    
console.log("===app start===");
