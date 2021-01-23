const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const indexRouter = require('./routes/index');
const valveRouter = require('./routes/valve');
const job = require('./core/schedule');

const app = new Koa();

app.use(bodyParser())
    .use(indexRouter.routes())
    .use(indexRouter.allowedMethods())
    .use(valveRouter.routes())
    .use(valveRouter.allowedMethods())
    .listen(30000);

job.init();
    
console.log("===app start===");
