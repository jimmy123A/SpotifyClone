import  React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AlbumCategory from '../components/AlbumCategory';
import DATA from '../data/AlbumCategories';
import { API, graphqlOperation } from 'aws-amplify';
import { listAlbumCategoryIDs } from '../components/graphQLnew/queries';


export default function TabOneScreen() {

  const [categories, setCategories] = useState([]);

  const fetchAlbumCategories = async () => {
     try {
      const data = await API.graphql(graphqlOperation(listAlbumCategoryIDs));
      setCategories(data.data.listAlbumCategoryIDs.items)
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
   fetchAlbumCategories();
  }, []);

  return (
    <View style={styles.container}>
    <FlatList 
    showsVerticalScrollIndicator = {false}
    keyExtractor = {item => item.id}
    data = {categories}
    renderItem = {({ item }) => {
    return <AlbumCategory
     title = {item.title} 
     albums = {item.albums.items} />
    }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
