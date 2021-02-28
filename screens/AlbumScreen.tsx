import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AlbumDetails from '../data/AlbumDetail';
import SongListItem from '../components/SongListItem';
import AlbumHeader from '../components/AlbumHeader';
import { API, graphqlOperation } from 'aws-amplify';
import { getAlbum } from '../src/graphql/queries';


const AlbumScreen = () => {

const [album, setAlbum] = useState(null);

const route = useRoute();
const albumId = route.params.id; 

const fetchAlbumDetails = async () => {
  try {
  const data = await API.graphql(graphqlOperation(getAlbum, { id : albumId }));
  setAlbum(data.data.getAlbum);
  console.log(data);
  } catch (err) {
    console.log(err);  
  }
};

useEffect(() => {
console.log(albumId);
fetchAlbumDetails();
}, []);

if (!album) {
  return <ActivityIndicator style = {{ marginTop : 100 }} size = "large" />  
}

return (
<View >
 <FlatList
  keyExtractor = {item => item.id}
  data = {album.songs.items}
  renderItem = {({ item }) => {
   return <SongListItem song = {item} />   
  }}
  ListHeaderComponent = {() => <AlbumHeader album = {album} />}
 />
</View>
);
};

export default AlbumScreen;