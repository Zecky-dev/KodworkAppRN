import React from 'react';
import {FlatList} from 'react-native';

// import custom fetch hook
import useFetch from '../../hooks/useFetch';

// JobCard for each job
import JobCard from '../../components/JobCard/JobCard';

// .env
import {API_JOBS_URL} from '@env';

// Animations
import Loading from '../../assets/Animations/Loading/Loading';
import Error from '../../assets/Animations/Error/Error';



const Jobs = ({navigation}) => {
    const {data,error,loading} = useFetch(API_JOBS_URL);
    const handleOnPress = (item) => {
        navigation.navigate('JobDetailsScreen',{item});
    };
    if (error) {
        return (
            <Error/>
        );
    }
    if (loading) {
        return (
            <Loading/>
        );
    }
    if (data) {
        return (
            <FlatList
                data={data}
                renderItem={({item}) => <JobCard item={item} onPress={() => handleOnPress(item)}/>}
            />
        );
    }
};

export default Jobs;
