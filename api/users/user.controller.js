const { create, getUsers, getUserById, updateUser, deleteUser } = require('./user.service');
const { genSaltSync, hashSync } = require('bcrypt');

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: 'DB connection error',
        });
      }
      return res.status(200).json({
        success: 1,
        data: result,
      });
    });
  },
  getUserByUserId: (req, res) => {
    const id = req.params.id;
    getUserById(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      } else if (!results) {
        return res.json({
          success: 0,
          message: 'Record not found',
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getAllUsers: (req, res) => {
    getUsers((err, results) => {
      if (err) {
        console.log(err);
        return;
      } else if (!results) {
        return res.json({
          success: 0,
          message: 'Record not found',
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  updateUser: (req, res) => {
    const body = req.body
    const salt = genSaltSync(10)
    body.password =hashSync(body.password, salt)
    updateUser(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      } else if (!results) {
        return res.json({
          success: 0,
          message: 'Update Record not found',
        });
      }
      return res.json({
        success: 1,
        data: "Updated Successfully",
      });
    });
  },
  deleteUser: (req, res) => {
    const data = req.body
    deleteUser(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      } else if (!results) {
        return res.json({
          success: 0,
          message: 'Delete Record not found',
        });
      }
      return res.json({
        success: 1,
        data: "User Deleted Successfully",
      });
    });
  }
};
