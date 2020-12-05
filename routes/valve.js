const Router = require('koa-router');

const valveStatus = {
    open: 1,
    close: 2
};

const router = new Router({
    prefix: '/valve'
});

router.get('/:id', (ctx, next) => {

});

router.put('/:id', (ctx, next) => {
    const status = ctx.params.status;
    switch (status) {
        case valveStatus.open:
            break;
        case valveStatus.close:
            break;
        default:
            break;
    }
    ctx.body = 'success';
});

router.put('/demo', (ctx, next) => {
    const vStatus = ctx.params.valveStatus;
    var result = 'success';
    switch (vStatus) {
        case valveStatus.open:
            break;
        case valveStatus.close:
            break;
        default:
            result = 'fail';
            break;
    }
    ctx.body = result;
})



module.exports = router;
