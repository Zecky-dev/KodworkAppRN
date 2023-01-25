import React from 'react';
import {View, Text} from 'react-native';
import Lottie from 'lottie-react-native';

const Error = () => {
    return (
            <Lottie source={require('../Error/error.json')} autoPlay={true} loop={false}/>        
    );
};

export default Error;