import React, { createContext, useState, useEffect } from 'react';
import backendUrl from "../../applicationProperties/database.json";
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // User state to manage login status
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const checkAuth = async () => {
            const url = `${backendUrl.development.localserver}/user/check-auth`;
            console.log("Checking auth...");
            try {
                const response = await axios.get(url, { withCredentials: true });
                console.log("Auth response:", response);
                if (response.status === 200) {
                    setUser(response.data.user);
                }
            } catch (error) {
                console.log('Not authenticated in AuthContext:', error);
                setUser(null); // Ensure user is set to null if auth fails
            } finally {
                setLoading(false); // Auth check is complete
            }
        };

        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
