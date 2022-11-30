import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import Post from './Post';

const Blog = () => {

    const { data: questions, isLoading } = useQuery({
        queryKey: ['blog'],
        queryFn: async () => {
            const res = await fetch('https://usedlapi-server-side.vercel.app/blog');
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
                questions?.map(post => <Post
                    key={post._id}
                    post={post}
                ></Post>)
            }
        </div>
    );
};

export default Blog;