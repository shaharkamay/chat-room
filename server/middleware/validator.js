import validator from 'validator';

const validateRegister = (req, res, next) => {
    
}

const validateLogin = (req, res, next) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        req.validated = validator.isEmail(email) && validator.isStrongPassword(password, { minSymbols: 0 });
        console.log(req.validated);
        next();
    } catch (error) {
        next(error);
    }
}

export { validateRegister, validateLogin };