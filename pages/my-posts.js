import { API, Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { postsByUsername } from '../src/graphql/queries';
import Link from 'next/link';


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
        if(postData.data.postsByUsername.items = []) {
            console.log('if conditional ============')
            setPosts(['No Posts Currently'])
        } else {
            setPosts(postData.data.postsByUsername.items)
        }
    }

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