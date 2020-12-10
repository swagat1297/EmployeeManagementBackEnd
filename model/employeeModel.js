const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'fristname required']
    },
    lastName: {
        type: String,
        required: [true, 'lastname required']
    },
    email: {
        type: String,
        required: [true, 'email required'],
        unique: [true, 'Email Exist']
    },

});
const employees = mongoose.model('employee', employeeSchema);
class employeeRegistrationModel {
    createNewEmployee(req, next) {
        try {
            return new Promise((resolve, reject) => {
                let employee = new employees(req);
                employee.save().then(result => {
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
            });
        } catch (error) {
            next(error);
        }
    }
    updateEmployee = (req, _id) => {
        try {
            const option = { new: true };
            return new Promise((resolve, reject) => {
                employees.findByIdAndUpdate(_id, req.body, option).then(data => {
                        resolve(data);

                }).catch((error) => {
                    reject(error);
                }); 
            });
        } catch (error) {
            return { message: "Error in Model", error: error};
        }
    }
    deleteEmployee = (req, next) => {
        try {
            console.log(req)
            return new Promise((resolve, reject) => {
                employees.findByIdAndDelete(req).then((result) => {
                    resolve(result);
                }).catch(error => {
                    reject(error);
                })
            })

        } catch (e) {
            next(e);
        }
    }
    showEmployee = (next) =>{
        try {
            return new Promise((resolve, reject) => {
                employees.find().then((result) => {
                    resolve(result);
                }).catch(error => {
                    reject(error);
                })
            })

        } catch (e) {
            next(e);
        }
    }

}

module.exports = new employeeRegistrationModel();