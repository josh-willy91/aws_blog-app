import { useEffect, useState, useRef } from "react";
import { API, Storage } from "aws-amplify";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
// import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { updatePost } from "../../src/graphql/mutations";
import { getPost } from "../../src/graphql/queries";
import { v4 as uuid } from "uuid";

function EditPost() {
    const [post, setPost] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
            fetchPost()
            async function fetchPost() {
                if(!id) return 

                const postData = await API.graphql({
                    query: getPost,
                    variables: { id }
                })
                setPost(postData.data.getPost)
            }

    }, [id])



    function onChange(e) {
        setPost(() => ({...post, [e.target.name] : e.target.value}))
    }
    
    const { title, content } = post;
    async function updateCurrentPost() {
        
    } 
    
    if(!post) return 

    return (
        <div>

        </div>
    )
}

export default EditPost;