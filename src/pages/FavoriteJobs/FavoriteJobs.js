import React from 'react';
import {View,Text,FlatList} from 'react-native';

// Redux useSelector
import { useSelector } from 'react-redux';

// Favorite job card
import FavoriteCard from '../../components/FavoriteJobCard/FavoriteJobCard';

const FavoriteJobs = () => {
    const favoriteList = useSelector(state => state.favorites.list);
    console.log(favoriteList);
    return (
        <View>
            <FlatList
                data={favoriteList}
                renderItem={({item}) => <FavoriteCard item={item}/>}
            />

            {/*<FavoriteCard item={favoriteList[0]}/>*/}
        </View>
    );
};

export default FavoriteJobs;