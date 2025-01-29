import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import prismaClient from "../../prisma/prisma.client";

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: "http://localhost:3000/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    const email = profile.emails[0].value;
    let user = await prismaClient.user.findUnique({ where: { email } });

    if (!user) {
        user = await prismaClient.user.create({
            data: {
                username: profile.displayName,
                email,
                // For OAuth users, no password is needed
            }
        });
    }

    done(null, user);
}));
