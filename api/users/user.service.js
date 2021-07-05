const pool = require('../../config/config');

module.exports = {
  create: (data, callBack) => {
    pool.query(`
    INSERT INTO registration (firstName, lastName, gender, email, password)
                values(?,?,?,?,?)`,
      [data.firstName, data.lastName, data.gender, data.email, data.password],
      (err, result) => {
        if (err) {
          return callBack(err);
        }
        return callBack(null, result);
      },
    );
  },
  getUsers: (callBack) => {
    pool.query(`
    SELECT * FROM registration`,
      [],
      (err, result) => {
        if (err) {
          return callBack(err);
        }
        return callBack(null, result);
      },
    );
  },
  getUserById: (id, callBack) => {
    pool.query(`
    SELECT * FROM registration WHERE id=?`,
      [id],
      (err, result) => {
        if (err) {
          return callBack(err);
        }
        return callBack(null, result[0]);
      },
    );
  },
  updateUser: (data, callBack) => {
    pool.query(`
    UPDATE registration SET firstName=?, lastName=?, gender=?, email=?, password=? WHERE id=?`,
      [data.firstName, data.lastName, data.gender, data.email, data.password, data.id],
      (err, result) => {
        if (err) {
          return callBack(err);
        }
        return callBack(null, result);
      },
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(`
    DELETE FROM registration WHERE id=?`,
      [data.id],
      (err, result) => {
        if (err) {
          callBack(err);
        }
        return callBack(null, result);
      },
    );
  },
};
