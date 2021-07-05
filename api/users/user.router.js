const { createUser, getAllUsers, getUserByUserId, updateUser,deleteUser } = require('./user.controller');
const router = require('express').Router();

router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/:id', getUserByUserId);
router.patch('/', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
