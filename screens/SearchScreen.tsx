import React from 'react';
import { View, Text } from 'react-native';
import SearchBar from '../components/searchBar';
import MusicKindCategory from '../components/MusicKindsCategory';
import { FlatList, StyleSheet } from 'react-native';
import AlbumCategories from '../data/AlbumCategories';


const SearchScreen = () => {
return (
 <View > 
  <SearchBar />   
 <FlatList 
 data = {AlbumCategories}
 keyExtractor = {item => item.id}
 renderItem = {({ item }) => {
  return <MusicKindCategory title = {item.title} category = {item.popularCategory} />   
 }}
 />
 </View>
)
};

const styles = StyleSheet.create({

});

export default SearchScreen;