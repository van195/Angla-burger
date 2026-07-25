import UserSchema from "../models/userSchema";

export const adminOnly = async (req, res, next) => {
    const user = await UserSchema.findOne({
        where: {
            clerkId: req.auth.userId
        }
    });

    if (!user || user.role !== "admin") {
        return res.status(403).json({
            message: "Access denied."
        });
    }

    next();
};