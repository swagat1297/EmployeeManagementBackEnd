const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jst = require("jsonwebtoken");
const Schema = mongoose.Schema;

const newSchema = new Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    mobileNumber: {
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 12
    },
});
const users = mongoose.model('user', newSchema);
// if (!user.isModified('password')) return next();

// // generate a salt
// bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
//     if (err) return next(err);

//     // hash the password along with our new salt
//     bcrypt.hash(user.password, salt, function (err, hash) {
//         if (err) return next(err);

//         // override the cleartext password with the hashed one
//         users.password = hash;
//         next();
//     });
// });
class UserModule {
    userRegistrationModel(req, next) {
        try {
            return new Promise((resolve, reject) => {
                let userDetails = new users(req);
                userDetails.save().then(result => {
                    resolve(result);
                }).catch(error => {
                    reject(error);
                });
            });
        } catch (error) {
            next(error);
        }
    }
    userLoginModel(req, next) {
        try {
            console.log(req);
            return new Promise((resolve, reject) => {
                users.findOne(req.email).then(data => {
                    console.log("login true ", data);
                    if (req.password == data.password) {
                        resolve(data);
                    } else {
                        reject(error);
                    }
                }).catch(error => {
                    reject({ message: "fail to login", error: error });
                })
            });
        } catch (e) {
            next(e);
        }
    }


}


module.exports = new UserModule();
