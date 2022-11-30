import React from 'react';

const Post = ({ post }) => {
    return (
        <section>
            <div class=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
                    <div class="w-full mx-auto">
                        <h2 className='font-black'>{post.question}</h2>
                        <p>{post.answer}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Post;