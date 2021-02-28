import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Album } from '../../types';
import styles from './style';

export type AlbumHeaderProps = {
 album : Album
};

const AlbumHeader = (props : AlbumHeaderProps) => {
return (
<View style = {styles.container} >
 <Image 
 style = {styles.image}
 source = {{ uri : props.album.imageUri }} />
 <Text style = {styles.name}> {props.album.name} </Text>  
 <View style = {styles.creatorContainer} >
 <Text style = {styles.creator} >By {props.album.by}</Text>
 <Text style = {styles.likes} >· {props.album.numberOfLikes} 30 Likes </Text>
</View>
 <TouchableOpacity >
   <View style = {styles.button} >
     <Text style = {styles.buttonText} >PLAY</Text>
   </View>  
 </TouchableOpacity> 
</View>
);
};

export default AlbumHeader;