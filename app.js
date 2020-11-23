const Koa = require('koa');
const Router = require('koa-router');
const requireDir = require('require-directory');

const app = new Koa();
const routerModules = requireDir(module, './routes', { visit: loadRouter });

function loadRouter(obj) {
    if (obj instanceof Router) {
        app.use(obj.routes())
            .use(obj.allowedMethods());
    }
}

app.listen(30000);
