const userService = require("../service/registrationService");
const response = {};
class userController {
    userRegistrationController = (req, res, next) => {
        try {
            userService.userRegistrationService(req.body).then((result) => {
                response.success = true;
                response.message = result.message;
                response.data = result.data;
                return res.status(200).send(response);
            }).catch((error) => {
                response.success = false;
                response.message = error.message;
                response.error = error.error;
                return res.status(400).send(response);
            });
        } catch (e) {
            next(e);
        }
    }
    userLoginController = (req, res) => {
        try {
            userService.userLoginService(req.body).then((result) => {
                response.success = true;
                response.message = result.message;
                response.data = result.data;
                return res.status(200).send(response);
            }).catch((error) => {
                response.success = false;
                response.message = error.message;
                response.error = error.error;
                return res.status(400).send(response);
            });
        } catch (e) {
            return {mesage: 'failed login', error: e};
        }
    }

}
module.exports = new userController();






















