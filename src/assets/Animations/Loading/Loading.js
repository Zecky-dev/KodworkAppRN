import React from 'react';
import Lottie from 'lottie-react-native';

const Loading = () => {
    return (
        <Lottie source={require('../Loading/loading.json')} autoPlay loop={true}/>
    );
};

export default Loading;
