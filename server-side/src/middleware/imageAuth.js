import ImageKit from "@imagekit/nodejs";

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

export const imageKitAuth = async (req, res) => {
    try {
        
        if (req.user?.role !== "admin") {
            return res.status(403).json({
                message: "Admin access required"
            });
        }

        const authenticationParameters =
            imagekit.helper.getAuthenticationParameters();

        res.status(200).json({
            ...authenticationParameters,
            publicKey: process.env.IMAGEKIT_PUBLIC_KEY
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not generate upload credentials"
        });
    }
};