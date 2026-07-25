import { useAuth, useUser } from "@clerk/react";
import { useEffect } from "react";
import axios from "axios";

const AuthSync = () => {
    const { getToken, isSignedIn } = useAuth();
    const { isLoaded } = useUser();

    useEffect(() => {
        if (!isLoaded || !isSignedIn) return;
        const syncUser = async () => {
            try {
                const token = await getToken();

                await axios.post(
                    "http://localhost:8080/api/users/register-user",
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                console.log("✅ User synced");
            } catch (err) {
                console.error(err);
            }
        };

        syncUser();
    }, [isLoaded, isSignedIn]);

    return null;
};

export default AuthSync;