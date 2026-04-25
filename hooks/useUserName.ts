import { useState, useEffect } from "react";

export default function useUserName() {
    const [userName, setUserName] = useState('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setUserName(localStorage.getItem('userName') || '');
        setMounted(true);
    }, []);

    function saveUserName(name: string) {
        setUserName(name);
        localStorage.setItem('userName', name);
    }

    return { userName, saveUserName, mounted };
}