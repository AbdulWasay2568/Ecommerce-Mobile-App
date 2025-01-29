import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prismaClient from "../../prisma/prisma.client";

interface RegisterUserInput {
    email: string;
    password: string;
}

interface LoginUserInput {
    email: string;
    password: string;
}

export const registerUser = async (input: RegisterUserInput) => {
    const { email, password } = input;

    try {
        const existingUser = await prismaClient.user.findUnique({ where: { email } });
        if (existingUser) {
            throw new Error("Email is already registered.");
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = await prismaClient.user.create({
            data: {
                email,
                password: hashedPassword,
            },
        });

        // Generate JWT token
        const token = jwt.sign(
            { userID: newUser.userID, role: newUser.role },
            process.env.JWT_SECRET!,
            { expiresIn: "1h" }
        );

        return { token, message: "User registered successfully." };

    } catch (error: any) {
        if (error.message === "Email is already registered.") {
            throw new Error("Email is already registered. Please log in.");
        }
        throw new Error("An error occurred during registration.");
    }
};


export const loginUser = async (input: LoginUserInput) => {
    const { email, password } = input;

    // Find the user by email
    const user = await prismaClient.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error("Invalid email or password.");
    }

    // Generate JWT token
    const token = jwt.sign(
        { userID: user.userID, role: user.role },
        process.env.JWT_SECRET!,
        { expiresIn: "1h" }
    );

    return token;
};
