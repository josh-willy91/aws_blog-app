# AWS Blog App
This project was my first attempt at building an app using AWS Services.  It is a typical social media platform with profiles, posts, and comments.  I may build out more functionality in the future but for now it's a rough working app.  This was also my first time working with next.js, tailwind.css, graphQL, and AWS Services.  This was a great course I found on Udemy that helped make the process of learning these new tools much quicker.

Domain
https://dev.dghljx86o6xd5.amplifyapp.com/


Udemy Course Walkthrough
https://www.udemy.com/course/aws-appsync-amplify-with-react-graphql-course/learn/lecture/30804086#overview


Development: AWS AMplify 05/2022
Hosted: AWS@ https://dev.dghljx86o6xd5.amplifyapp.com
Resources: 
- AWS AppSync API: awsBlogApp-dev
- AWS DynamoDB: Comment-hacwkx2k4bg2fnyl77vfirbohi-dev
- AWS DynamoDB: Post-hacwkx2k4bg2fnyl77vfirbohi-dev
- AWS S3 Image Storage: awsblogapp2f13035e89924a099bc2a61efcd5c3a7213747-dev
- AWS S3: amplify-awsblogapp-dev-213747-deployment
- AWS Cognito Auth: awsblogappfe6df4ef_userpool_fe6df4ef-dev
- Queries via GraphQL


run "git clone https://github.com/josh-willy91/aws_blog-app.git"
cd inside project
run "npm install"
run "npm run dev" to start app locally

Use Amplify Cli commands to update app resources.  See Amplify docs for commands
Amplify update...

Deployment:
Amplify Push will update AWS Amplify with all changes made to app
AMplify Publish will update all changes to live app

Styling:
App uses tailwind css styling