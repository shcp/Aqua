const Router = require('koa-router');
const router = new Router();


router.get('/health', async (ctx, next) => {
    console.log("==request health==");
    ctx.body = 'success';
});


module.exports = router;
