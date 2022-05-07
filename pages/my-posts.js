import { API, Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { postsByUsername } from '../src/graphql/queries';
import Link from 'next/link';
import Post from './posts/[id]';


function MyPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchPosts()

    }, [])

    async function fetchPosts() {
        const { username } = await Auth.currentAuthenticatedUser()
        const postData = await API.graphql({
            query: postsByUsername,
            variables: { username }
        })

        console.log(postData.data.postsByUsername.items, 'posts =========posts==============')
        setPosts(postData.data.postsByUsername.items)
    }

    if(posts.length === 0) return <h3>You have no posts yet</h3>

    return (
        <div>
            <h1 className='text-3xl font-semibold tracking-wide mt-6 mb-2p'>
                My Posts
            </h1>
            {
                posts.map((post, index) => (
                    <Link key={index} href={`/posts/${post.id}`}>
                        <div className='curser-pointer border-b border-gray-300 mt-8 pb-4'>
                            <h2 className='text-xl font-semibold'>
                                {post.title}
                            </h2>
                            <p className='text-gray-500 mt-2'>
                                Author: {post.username}
                            </p>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default MyPosts;