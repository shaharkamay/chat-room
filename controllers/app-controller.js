import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const render = (req, res, next) => {
    try {
        res.sendFile(path.resolve(__dirname,"../build/index.html"));
    } catch (err) {
        next(err);
    }
}

export { render };