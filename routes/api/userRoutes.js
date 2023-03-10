const router = require('express').Router();
const {
  getAllUsers,                  //Assigment 26 example
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userId
router
.route('/:userId')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);


module.exports = router;



