import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/auth.service";


export const registerUserController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const token = await registerUser({ email, password });
    res.status(201).json({ token });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
  


export const loginUserController = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    console.log('Login attempt:', { email, password }); // Log email and password

    try {
        const token = await loginUser({ email, password });
        console.log('Token:', token); // Log the generated token
        res.status(200).json({ token });
    } catch (error) {
        console.error('Login error:', "Invalid email or password"); // Log error message
        res.status(401).json({ message: "Invalid email or password" });
    }
};

