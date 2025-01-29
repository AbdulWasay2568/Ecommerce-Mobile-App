import multer from 'multer';
import express, { Request, Response } from 'express';
import path from 'path';
import { createProduct } from '../services/product.service';
import productRoutes from '../routes/product.routes';

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Define where to store files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

// Route to handle product creation with image upload
productRoutes.post('/', upload.single('image'), async (req: Request, res: Response) => {
  try {
    const { name, description, price, stock } = req.body;
    const image_url = req.file ? `/uploads/${req.file.filename}` : ''; // Handle image file
    
    const productData = { name, description, price: parseFloat(price), stock: parseInt(stock), image_url };
    const newProduct = await createProduct(productData); // createProduct from services
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Failed to create product' });
  }
});
