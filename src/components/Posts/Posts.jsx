// Posts.jsx
import React from 'react';
import './Posts.scss'; // Make sure the path is correct

// Import the JSON data
import postsData from './Post.json';

const Posts = () => {
    return (
        <div className="Posts">
            <div className='totalpost'>
                {/* Number of posts */}
                <h2>{postsData.length} Posts</h2>
            </div>

            <div className="postlist">
                {postsData.map((post) => (
                    <div className="post-cards" key={post.id}>
                        <div className="head-like">
                            <h1>{post.title}</h1>
                            <p><i class="post-icon fa-regular fa-thumbs-up"></i></p>
                        </div>
                        {/* Will show content only upto 4 lines */}
                        <p>{post.content}</p>
                        <div className="post-footer">
                            <p>
                                <span>{post.author}</span> By Ravikant Kumar
                            </p>
                            <p>
                                {post.date} - <span>{post.readTime}</span> -{' '}
                                <span>{post.views} Views</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;