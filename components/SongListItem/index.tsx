import React, { useContext } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './style';
import { Song } from '../../types';
import { AppContext } from '../../context/AppContext';

export type SongListItemProps = {
  song : Song   
}

const SongListItem = (props : SongListItemProps ) => {

const { setSongId } = useContext(AppContext);

const onPlay = () => {
setSongId(props.song.id);
};

return (
<TouchableWithoutFeedback onPress = {onPlay} >
<View style = {styles.container} >
 <Image 
 style = {styles.image}
 source = {{ uri : props.song.imageUri }} />
 <View style = {styles.rightContainer} >  
 <Text style = {styles.title} > {props.song.title} </Text>
<Text style = {styles.artist} > {props.song.artist} </Text>
 </View> 
</View>
</TouchableWithoutFeedback>
);
};

export default SongListItem;