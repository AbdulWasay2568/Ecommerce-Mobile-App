import { Router } from "express";
import { registerUserController, loginUserController } from "../controllers/auth.controller";

const authRoutes: Router = Router();

authRoutes.post('/register', registerUserController);
authRoutes.post('/login', loginUserController);




export default authRoutes;


// import passport from "passport";

// authRoutes.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// authRoutes.get('/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
//     const user = req.user;
//     const token = jwt.sign({ userID: user.userID, role: user.role }, process.env.JWT_SECRET!, { expiresIn: '1h' });
//     res.status(200).json({ token });
// });
