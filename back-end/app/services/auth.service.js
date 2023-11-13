const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const User = db.user;

exports.signup = async (req) => {
    // Save User to Database
    try {
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
        });

        return user;

        // if (req.body.roles) {
        //     const roles = await Role.findAll({
        //         where: {
        //             name: {
        //                 [Op.or]: req.body.roles,
        //             },
        //         },
        //     });
        //
        //     const result = user.setRoles(roles);
        //     if (result) return user;
        // } else {
        //     // user has role = 1
        //     const result = user.setRoles([1]);
        //     if (result) return user;
        // }
    } catch (error) {
        throw Error(error.message)
    }
};

exports.login = async (req) => {
    try {
        const user = await User.findOne({
            where: {
                username: req.body.username,
            },
        });

        const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
                message: "Invalid Password!",
            });
        }

        const token = jwt.sign({id: user.id},
            config.secret,
            {
                algorithm: 'HS256',
                allowInsecureKeySizes: true,
                expiresIn: 86400, // 24 hours
            });

        // let authorities = [];
        // const roles = await user.getRoles();
        // for (let i = 0; i < roles.length; i++) {
        //     authorities.push("ROLE_" + roles[i].name.toUpperCase());
        // }

        req.session.token = token;

        return {
            id: user.id,
            username: user.username,
            email: user.email,
            roles: [1],
        };
    } catch (error) {
        throw Error(error.message);
    }
}