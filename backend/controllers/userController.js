import asyncHandler from 'express-async-handler';

// @desc    Auth user & get token
// route   POST /api/users/auth
// access  Public
const authUser = async (req, res) => {
  res.status(200).json({ message: 'Login user route' });
};

export {
  authUser,

}