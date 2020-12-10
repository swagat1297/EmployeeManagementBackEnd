const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const employeeController = require("../controller/employeeController");

router.post("/user/Registration", userController.userRegistrationController);
router.post("/user/Login", userController.userLoginController);



router.post("/employee/addEmployee", employeeController.employeeRegistrationController);
router.delete("/employee/deleteEmployee/:id", employeeController.employeeDeleteController);
router.put("/employee/UpdateEmployee/:id", employeeController.employeeUpdateController);
router.get("/employee/showAllEmployee", employeeController.employeeShowController)

module.exports = router;
 