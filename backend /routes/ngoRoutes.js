import express from "express";
import { registerNGO, loginNGO, updateNGO, getNGODetails } from "../controllers/ngosController.js";
import auth from "../middlewares/authNGO.js";

const router = express.Router();

router.post('/', registerNGO);
router.post('/login', loginNGO);
router.put('/update', auth, updateNGO);
router.get('/details', auth, getNGODetails);  // Correct route for fetching NGO details

export { router as ngoRoutes };