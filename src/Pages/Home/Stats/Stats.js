import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../../Shared/Spinner/Spinner';
import StatCard from './StatCard/StatCard';

const Stats = () => {
    const { data: stats, isLoading } = useQuery({
        queryKey: ['stats'],
        queryFn: async () => {
            const res = await fetch('https://usedlapi-server-side.vercel.app/stats');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            {
                stats?.map(stat => <StatCard
                    key={stat._id}
                    stat={stat}
                ></StatCard>)
            }
        </div>
    );
};

export default Stats;