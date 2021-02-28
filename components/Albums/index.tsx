import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './style';
import { Album } from '../../types';
import { useNavigation } from '@react-navigation/native';

export type AlbumProps = {
 album : Album   
};

const Albums = (props : AlbumProps) => {

const navigation = useNavigation();

const onPress = () => {
 navigation.navigate('AlbumScreen', { id : props.album.id });  
};

return (

<TouchableWithoutFeedback onPress = {onPress} >
<View style = {styles.container} >   
 <Image style = {styles.image} source = {{ uri : props.album.imageURL }} /> 
 <Text style = {styles.text} > {props.album.artistHeadLine} </Text>      
</View>
</TouchableWithoutFeedback>  

);
};

export default Albums;