import React from 'react';
import {View,Text,FlatList} from 'react-native';

// Redux useSelector
import { useSelector } from 'react-redux';

// Favorite job card
import FavoriteCard from '../../components/FavoriteJobCard/FavoriteJobCard';

// Empty animation
import Empty from '../../assets/Animations/Empty/Empty';

const FavoriteJobs = () => {
    const favoriteList = useSelector(state => state.favorites.list);

    return (
        <View>
            <FlatList
                data={favoriteList}
                renderItem={({item}) => <FavoriteCard item={item}/>}
                ListEmptyComponent={<Empty/>}
                contentContainerStyle={{flexGrow:1}}
            />

            {/*<FavoriteCard item={favoriteList[0]}/>*/}
        </View>
    );
};

export default FavoriteJobs;