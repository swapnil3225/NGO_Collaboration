import express from 'express'
import { registerUser, loginUser, updateUser, getUserDetails } from '../controllers/usersController.js'
import auth from '../middlewares/authUser.js'

// Creating an instance of Express router
const router = express.Router()

// Register user route
router.post('/', registerUser)

// Login user route
router.post('/login', loginUser)

// Update user route
router.put('/update', auth, updateUser);
router.get('/details', auth, getUserDetails);  // New route for fetching user details

export { router as usersRoutes }