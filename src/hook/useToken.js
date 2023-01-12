import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const useToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`https://car-buy-server.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken);
                        setToken(data.accessToken);

                    }
                })
        }
    }, [email])
    return [token];
}

export default useToken;