import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
// if issues with Auth then you may need to append to the above import and add /legacy to the end of @aws-amplify/ui-react
import { Auth } from "aws-amplify";
import { useState, useEffect } from "react";


function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        checkUser()
    }, [])

    async function checkUser() {
        const user = await Auth.currentAuthenticatedUser()
        setUser(user)
    }


    if (!user) return null;

    return (
        <div>
            <h1 className='text-3xl font-semibold tracking-wide mt-6'>
                Profile
            </h1>
            <h1 className='font-medium text-gray-500 my-2'>
                Username: {user.username}
            </h1>
            <p className='text-sm text-gray-500 mb-6'>
                Email: {user.attributes.email}
            </p>
            <AmplifySignOut/>
        </div>
    )
}

export default withAuthenticator(Profile);
