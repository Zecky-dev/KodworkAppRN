import React from 'react';
import {Text,View, TouchableOpacity} from 'react-native';

import styles from './JobCard.style';
import Icon from 'react-native-vector-icons/Ionicons';

import { useSelector } from 'react-redux';

const JobCard = ({item,onPress}) => {
    const favoriteList = useSelector(state => state.favorites.list);
    const checkIsFavorite = () => {
        console.log(item);
    };
    checkIsFavorite();
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={onPress}>
            <Text style={styles.jobTitle}>
                {item.name}
            </Text>
            <View style={styles.middle}>
                <Text style={styles.company}>
                    {item.company.name}
                </Text>
                {
                    favoriteList.includes(item) 
                    ? <Icon name="heart" color="crimson" size={32}/>
                    : null
                }
            </View>
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
        </TouchableOpacity>
    );
};

export default JobCard;