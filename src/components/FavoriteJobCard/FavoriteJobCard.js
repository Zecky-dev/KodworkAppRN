/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

import styles from '../JobCard/JobCard.style';
import CustomButton from '../CustomButton/CustomButton';

// Redux
import { useDispatch } from 'react-redux';
import { removeFavorite } from '../../context/slices/favoriteJobsSlice';

const FavoriteJobCard = ({item,onPress}) => {
    const dispatch = useDispatch();
    const removeHandler = (itemArg) => {
        dispatch(removeFavorite(itemArg.id));
    };
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={onPress}>
            <Text style={styles.jobTitle}>
                {item.name}
            </Text>
            <Text style={styles.company}>
                {item.company.name}
            </Text>
            <View style={styles.locationContainer}>
                <View style={styles.innerLocationContainer}>
                    <Text style={styles.location}>
                        {item.locations[0].name}
                    </Text>
                </View>
            </View>
            <View style={styles.levelContainer}>
                <Text style={styles.level}>
                    {item.levels[0].name}
                </Text>
            </View>
            <CustomButton backgroundColor="crimson" color="white" iconName="trash" label="Remove" size={18} onPress={() => removeHandler(item)} customStyle={{
                justifyContent: 'center',
            }}/>
        </TouchableOpacity>
    );
};

export default FavoriteJobCard;