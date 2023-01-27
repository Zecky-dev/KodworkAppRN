import React from 'react';
import Lottie from 'lottie-react-native';

const Error = () => {
    return (
            <Lottie source={require('./error.json')} autoPlay={true} loop={false}/>
    );
};

export default Error;
