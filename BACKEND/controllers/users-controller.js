const HttpError = require('../models/http-error');

let DUMMY_USERS = [
    {
        id: 'u1',
        name: 'Max Schwarz',
        email: 'test@test.com',
        password: 'testers'
    },
    {
        id: 'u2',
        name: 'Manuel',
        email: 'test2@test.com',
        password: 'testers'
    }
];

const getUsers = (req, res, next) => {
    res.json({ users: DUMMY_USERS });
};

const signup = (req, res, next) => {
    const { name, email, password } = req.body;
    const hasUser = DUMMY_USERS.find((user) => user.email === email);
    if (hasUser) {
        throw new HttpError('Could not create user, email already exists.', 422);
    }
    const createdUser = {
        id: Date.now().toString(),
        name,
        email,
        password
    };
    DUMMY_USERS.push(createdUser);
    res.status(201).json({ user: createdUser });
};

const login = (req, res, next) => {
    const { email, password } = req.body;
    const identifiedUser = DUMMY_USERS.find((user) => user.email === email);
    if (!identifiedUser || identifiedUser.password !== password) {
        throw new HttpError('Could not identify user, credentials seem to be wrong.', 401);
    }
    res.json({ message: 'Logged in!' });
};

exports.getUsers = getUsers;

exports.signup = signup;

exports.login = login;