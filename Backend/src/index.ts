import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import cors from 'cors'; // Import CORS middleware

// Import route modules
import {authRoutes, userRouter, categoryRouter, productRouter, cartRouter, paymentRouter, orderRouter, shippingInfoRouter, productReviewRouter } from './api/routes';

// Load environment variables from .env file
dotenv.config({ path: '.env' });

// Initialize express application
const app: Express = express();

// Enable CORS for all routes (with specific origin or open to all)
app.use(cors({
    // origin: 'http://localhost:5173', // Allow requests only from this origin
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], // Allowed HTTP methods
    credentials: true // Enable if you're using cookies or authentication headers
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Initialize Prisma Client and log queries
export const prismaClient = new PrismaClient({
    log: ['query'],
});

// Simple route to test if backend is running
app.get('/', (req: Request, res: Response) => {
    res.send('Ecommerce Backend is running!');
});

// Define the API routes

app.use('/auth', authRoutes);
app.use('/users', userRouter);
app.use('/categories', categoryRouter);
app.use('/products', productRouter);
app.use('/carts', cartRouter);
app.use('/payments', paymentRouter);
app.use('/orders', orderRouter);
app.use('/shipping-info', shippingInfoRouter);
app.use('/product-reviews', productReviewRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
