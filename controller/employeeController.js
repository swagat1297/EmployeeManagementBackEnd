const employeeService = require("../service/employeeRegistrationService")
const response = {};
class employeeController {
    employeeRegistrationController = (req, res, next) => {
        try {
            employeeService.employeeRegistrationService(req.body).then((result) => {
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
    employeeUpdateController = (req, res) => {
        try {
            employeeService.employeeUpdateService(req).then((result) => {
                response.success = true;
                response.message = result.message;
                response.data = result.data;
                return res.status(200).send(response);
            }).catch((error) => {
                response.success = false;
                response.message = error.message;
                response.error = error.error;
                return res.status(400).send(response);
            })
        } catch (e) {
            return { message: "Error in controller", error: e};
        }
    }



    employeeDeleteController = (req, res, next) => {
        try {
            employeeService.employeeDeleteService(req).then((result) => {
                response.success = true;
                response.message = result.message;
                response.data = result.data;
                return res.status(200).send(response);
            }).catch((error) => {
                response.success = false;
                response.message = error.message;
                response.error = error.error;
                return res.status(400).send(response);
            })
        } catch (e) {
            next(e);
        }
    }
    employeeShowController = (req, res, next) => {
        try {
            employeeService.employeeShowService(req).then((result) => {
                response.success = true;
                response.message = result.message;
                response.data = result.data;
                return res.status(200).send(response);
            }).catch((error) => {
                response.success = false;
                response.message = error.message;
                response.error = error.error;
                return res.status(400).send(response);
            })
        } catch (e) {
            next(e);
        }
    }
}


module.exports = new employeeController();