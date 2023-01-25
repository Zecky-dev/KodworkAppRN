import React from 'react';
import {View,Text} from 'react-native';

// WebView
import { WebView } from 'react-native-webview';

// styles
import styles from './JobDetails.style';

// custom button
import CustomButton from '../../components/CustomButton/CustomButton';


const JobDetails = ({route}) => {
    const job = route.params.item;
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
                <CustomButton size={18} color="white" backgroundColor="crimson" label="Add Favorite" iconName="heart"/>
            </View>
        </View>
    );
};

export default JobDetails;
