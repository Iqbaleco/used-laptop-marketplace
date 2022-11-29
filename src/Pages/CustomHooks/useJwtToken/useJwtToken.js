import { useEffect, useState } from "react";


const useJwtToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(res => res.json())
                .then(result => {
                    if (result.accessToken) {
                        localStorage.setItem('accessToken', result.accessToken);
                        setToken(result.accessToken);
                    }
                });
        }
    }, [email]);
    return [token];
}

export default useJwtToken;