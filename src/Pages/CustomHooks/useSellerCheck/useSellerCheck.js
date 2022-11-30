import { useEffect, useState } from 'react';

const useSellerCheck = email => {
    const [sellerCheck, setSellerCheck] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://usedlapi-server-side.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setSellerCheck(data.sellerCheck);
                    setIsSellerLoading(false);
                })
        }
    }, [email])
    return [sellerCheck, isSellerLoading]
}

export default useSellerCheck;