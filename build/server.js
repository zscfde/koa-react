const Koa = require('koa');
const app = new Koa();
const path = require('path');
const staticCache = require('koa-static-cache');
const Router = require('koa-router')();

Router.get('/', ctx => {
    ctx.status = 200;
    ctx.body = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <title></title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="css/style.css" rel="stylesheet">
        </head>
        <body>
        <div id="root"> Hello </div>
        <script src="./bundle.js"></script>
        </body>
    </html>
    `;
});

app.use(staticCache(path.join(__dirname, './'), {}));

app.use(Router.routes());

app.listen(3000);
