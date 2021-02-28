import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';
import { MusicKindProps } from '../../types';

export type MusicKindProperties = {
 musickind : MusicKindProps 
}

const MusicKinds = (props : MusicKindProperties) => {
return (
<View style = {styles.container} >   
 <View style = {[styles.imageContainer, { backgroundColor : props.musickind.imageBackground }]} > 
 <Text style = {styles.text}>{props.musickind.text}</Text> 
<Image
 style = {styles.imageStyle}
 source = {{ uri : props.musickind.imageUri }} 
 /> 
 </View>
 <View style = {[styles.imageContainer, { backgroundColor : props.musickind.imageBackground }]} >
 <Text style = {styles.text}>{props.musickind.text}</Text>
 <Image 
 style = {styles.imageStyle}
 source = {{ uri : props.musickind.imageUri }}
 /> 
 </View> 
</View>  
);
};

export default MusicKinds;