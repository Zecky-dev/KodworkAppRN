import React from 'react';
import {View,Text} from 'react-native';

// WebView
import { WebView } from 'react-native-webview';

// styles
import styles from './JobDetails.style';

// custom button
import CustomButton from '../../components/CustomButton/CustomButton';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../context/slices/favoriteJobsSlice';

const JobDetails = ({navigation,route}) => {
    const job = route.params.item;
    const favoriteList = useSelector(state => state.favorites.list);
    const dispatch = useDispatch();
    const addToFavorites = () => {
        dispatch(addFavorite(job));
        navigation.goBack();
    };
    const removeFromFavorites = () => {
        dispatch(removeFavorite(job.id));
    };
    return (
        <View style={styles.container}>
            <Text style={styles.jobTitle}>
                {job.name}
            </Text>
            <Text style={styles.bold}><Text style={styles.color}>Locations: </Text>
                {job.locations[0].name}
            </Text>
            <Text style={styles.bold}><Text style={styles.color}>Job Level: </Text>
                {job.levels[0].name}
            </Text>
            <Text style={[styles.jobDetail,styles.bold]}>
                Job Detail
            </Text>
            <WebView source={{html:`${job.contents}`}}/>
            <View style={styles.buttonsContainer}>
                <CustomButton size={18} color="white" backgroundColor="crimson" label="Submit" iconName="send"/>
                {
                    !favoriteList.includes(job)
                    ? <CustomButton size={18} color="white" backgroundColor="crimson" label="Add Favorite" iconName="heart" onPress={addToFavorites}/>
                    : <CustomButton size={18} color="white" backgroundColor="crimson" label="Remove Favorite" iconName="trash" onPress={removeFromFavorites}/>
                }
            </View>
        </View>
    );
};

export default JobDetails;
