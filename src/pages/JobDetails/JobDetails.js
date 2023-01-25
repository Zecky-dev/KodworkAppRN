import React from 'react';
import {View,Text} from 'react-native';

// import custom fetch hook
import useFetch from '../../hooks/useFetch';

const JobDetails = () => {
    const {data,error,loading,getData} = useFetch();
    return (
        <View>
            <Text>Job Details</Text>
        </View>
    );
};

export default JobDetails;
