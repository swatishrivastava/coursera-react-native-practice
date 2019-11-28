import React, { Component } from 'react';
import { View,FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'

function MovieComponent(props) {

    const renderMenuItem = ({item, index}) => {
        console.log(item);
        return(
        <ListItem
            key={index}
            title={item.name}
            subtitle={item.cast}
            bottomDivider
        >
        </ListItem>
        );
    }



    return (
        <View style = {{margin: 10}}> 
        <FlatList
            data={props.movies}
            renderItem={renderMenuItem}
            keyExtractor={item => item.id}
        ></FlatList>
        </View>

    );

}

export default MovieComponent;