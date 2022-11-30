import { useEffect, useState } from 'react';

const useAdminCheck = email => {
    const [adminCheck, setadminCheck] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://usedlapi-server-side.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setadminCheck(data.adminCheck);
                    setIsAdminLoading(false);
                })
        }
    }, [email])
    return [adminCheck, isAdminLoading]
}

export default useAdminCheck;