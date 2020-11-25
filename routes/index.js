const Router = require('koa-router');
const router = new Router();


router.get('/health', (ctx, next) => {
    ctx.body = 'success';
});


module.exports = router;
