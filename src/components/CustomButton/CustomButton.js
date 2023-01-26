import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

// Icon
import Icon from 'react-native-vector-icons/Ionicons';

// styles
import styles from './CustomButton.style';

const CustomButton = ({label,iconName,color,backgroundColor,size,customStyle,onPress}) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={[{backgroundColor},styles.container,customStyle]}>
            <Icon name={iconName} color={color} size={size}/>
            <Text style={[{color,fontSize:size}, styles.label]}>{label}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
