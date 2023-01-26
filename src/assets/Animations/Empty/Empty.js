import React from 'react';
import Lottie from 'lottie-react-native';

const Empty = () => {
    return (
            <Lottie source={require('./empty.json')} autoPlay={true} loop={true} style={{width:300,height:300}}/>
    );
};

export default Empty;