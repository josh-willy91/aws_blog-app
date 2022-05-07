import { useRouter } from "next/router";
import ReactMarkDown from "react-markdown";
import dynamic from "next/dynamic";
import { listPosts, getPost } from "../../src/graphql/queries";
import "../../configureAmplify";
import { API } from "aws-amplify";

export default function Post({ post }) {
    const router = useRouter();

    if(router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>{post.title}</h1>
        </div>
    )
}

export async function getStaticPaths() {
    const postData = await API.graphql({
        query: listPosts
    })
    const paths = postData.data.listPosts.items.map((post) => 
    ({ params: { id: post.id }}))
    
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const { id } = params;
    const postData = await API.graphql({
        query: getPost,
        variables: { id }
    })

    return {
        props: {
            post: postData.data.getPost
        }
    }
}
