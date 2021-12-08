import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import fs from 'fs';
import path from 'path';

const render = (req, res, next) => {
    try {
        const html = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} />
        );
        const indexFile = path.resolve('./build/index.html');
        fs.readFile(indexFile, 'utf8', (err, data) => {
            if (err) {
                console.error('Something went wrong:', err);
                return res.status(500).send('Oops, better luck next time!');
            }
            return res.send(
                data.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
            );
        });
    } catch (err) {
        next(err);
    }
}

export { render };