import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// @desc   Auth user & get token
// route   POST /api/users/auth
// access  Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Login user route' });
});

// @desc   Register a new user
// route   POST /api/users/
// access  Public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Register user route' });
});

// @desc   Logout user
// route   POST /api/users/logout
// access  Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'logout user' });
});

// @desc   Get user profile
// route   GET /api/users/profile
// access  Private - jwt required for access
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get user profile coming...' });
});

// @desc   Update user profile
// route   PUT /api/users/profile
// access  Private - jwt required for access
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Updating the user when this is ready' });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
}