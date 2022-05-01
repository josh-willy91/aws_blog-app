import { API, Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { postsByUsername } from '../src/graphql/queries';



function MyPosts() {
    const [posts, setPosts] = useState()
    useEffect(() => {
        fetchPosts()

    }, [])

    async function fetchPosts() {
        const { username } = await Auth.currentAuthenticatedUser()
        const postData = await API.graphql({
            query: postsByUsername,
            variables: { username }
        })
    }
}

export default MyPosts;