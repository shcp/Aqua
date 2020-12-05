const Router = require('koa-router');
const gpio = require('./../core/driver/gpio');

const valveStatus = {
    open: 1,
    close: 2
};

const router = new Router({
    prefix: '/valve'
});

router.put('/demo', async (ctx, next) => {
    let request = ctx.request;
    let reqBody = request.body;
    console.log(reqBody);
    var result = 'success' + reqBody.status;
    switch (reqBody.status) {
        case valveStatus.open:
            gpio.openValve();
            result = "open success";
            break;
        case valveStatus.close:
            gpio.closeValve();
            result = "close success";
            break;
        default:
            result = 'fail';
            break;
    }
    ctx.body = result;
})


module.exports = router;
