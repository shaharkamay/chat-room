import validator from 'validator';

const validateSignUp = (req, res, next) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        req.validated = 
            validator.isAlpha(firstName)
            && validator.isAlpha(lastName)
            && validator.isEmail(email) 
            && validator.isStrongPassword(password, { minSymbols: 0 });

        if(req.validated) next();
        else next({ status: 400, message: 'Invalid inputs' })
    } catch (error) {
        next(error);
    }
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

export { validateSignUp, validateLogin };