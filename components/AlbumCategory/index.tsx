import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { Album } from '../../types';
import styles from './style';
import Albums from '../Albums';

export type AlbumCategoryProps = {
title : string,
albums : [Album]
};

const AlbumCategory = (props : AlbumCategoryProps) => {
return (
<View style = {styles.container} >
<Text style = {styles.title} > {props.title} </Text> 
<FlatList
showsHorizontalScrollIndicator = {false}
horizontal
keyExtractor = {item => item.id} 
data = {props.albums}
renderItem = {({ item }) => {
 return <Albums album = {item} />   
}}
/>
</View>
);
};

export default AlbumCategory;