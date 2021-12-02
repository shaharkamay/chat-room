import validator from 'validator';

const validateRegister = (req, res, next) => {
    
}

const validateLogin = (req, res, next) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        req.validated = validator.isEmail(email) && validator.isStrongPassword(password, { minSymbols: 0 });
        if(req.validated) next();
        else next({ status: 400, message: 'Invalid email or password' })
    } catch (error) {
        next(error);
    }
}

export { validateRegister, validateLogin };