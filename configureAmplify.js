import Amplify from "aws-amplify";
import config from './src/aws-exports';
// Amplify.config(config);
Amplify.configure({
    ...config,
    Analytics: {
        disabled: true,
    },
});
