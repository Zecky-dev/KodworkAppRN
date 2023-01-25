import React from 'react';
import {Text,View, TouchableOpacity} from 'react-native';

import styles from './JobCard.style';

const JobCard = ({item,onPress}) => {
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
        </TouchableOpacity>
    );
};

export default JobCard;