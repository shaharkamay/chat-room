import morgan from 'morgan';

function morganHandler(req, res, next) {
  morgan.token("body", function (req, res) {
    return JSON.stringify(req.body);
  });
  next();
}

export default morganHandler;
