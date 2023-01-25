import React from 'react';
import {View,Text} from 'react-native';

// import custom fetch hook
import useFetch from '../../hooks/useFetch';

const Jobs = () => {
    const {data,error,loading,getData} = useFetch();
    return (
        <View>
            <Text>Jobs Scren</Text>
        </View>
    );
};

export default Jobs;
