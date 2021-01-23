const Router = require('koa-router');
const gpio = require('./../core/driver/gpio');

const valveStatus = {
    open: 1,
    close: 2
};

const router = new Router({
    prefix: '/valve'
});

router.put('/test', async (ctx, next) => {
    let request = ctx.request;
    let body = request.body;
    console.log(body);
    var result = 'success' + body.status;
    switch (body.status) {
        case valveStatus.open:
            gpio.outPutHigh(body.pin);
            result = "open " + body.pin + " success";
            break;
        case valveStatus.close:
            gpio.outPutLow(body.pin);
            result = "close " + body.pin + " success";
            break;
        default:
            result = 'fail';
            break;
    }
    ctx.body = result;
});

router.get('/takeOpen', async (ctx) => {
    let pina = 37;
    let pinb = 35;
    gpio.outPutHigh(pina);
    gpio.outPutHigh(pinb)
    ctx.body = "success";
});

router.get('/takeClose', async (ctx) => {
    let pina = 37;
    let pinb = 35;
    gpio.outPutLow(pina);
    gpio.outPutLow(pinb)
    ctx.body = "success";
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
