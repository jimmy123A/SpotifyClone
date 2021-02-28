import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';
import { AppContext } from '../../context/AppContext';
import { API, graphqlOperation } from 'aws-amplify';
import { getSong } from '../../src/graphql/queries';

const PlayerWidget = () => {

const [song, setSong] = useState(null);  
const [sound, setSound] = useState<Sound|null>(null);
const [isPlaying, setIsPlaying] = useState<boolean>(true);
const [duration, setDuration] = useState<number|null>(null);
const [position, setPosition] = useState<number|null>(null);

const { songId } = useContext(AppContext);

const fetchSong = async () => {
  try {
   const data = await API.graphql(graphqlOperation(getSong, { id : songId }));
   setSong(data.data.getSong);
  } catch (err) {
    console.log(err);
  }
};

 useEffect(() => {
  fetchSong();
 }, [songId]);

const onPlaybackStatusUpdate = (status: any) => {
  console.log(status);
  //setIsPlaying according to the properties of the status object, same thing for duration and position
 setIsPlaying(status.isPlaying);
 setDuration(status.durationMillis);
 setPosition(status.positionMillis);
};

const playCurrentSong = async () => {

  //if sound piece of state is not null, so if song is playing then destroy the previous instance of song before execute the function again
  if (sound) {
    await sound.unloadAsync();
  }

 const { sound : newSound } = await Audio.Sound.createAsync(
   {uri : song.uri},
   {shouldPlay : isPlaying},
   onPlaybackStatusUpdate
   );
   setSound(newSound);
};

const onPlayPausePress = async () => {
  if (!sound) {
   return; 
  } 
  if (isPlaying) {
    await sound.stopAsync();
  } else {
    await sound.playAsync();
  }
};

const getProgress = () => {
  if (sound === null || duration === null || position === null) {
    return 0;
  }

  return (position / duration) * 100;
};

useEffect(() => {

if (song) {
  playCurrentSong();
}

}, [song]);


if (!song) {
  return null;
}

return (
  <View style={styles.container}>
  <View style={[styles.progress, { width: `${getProgress()}%`}]} />
  <View style={styles.row}>
    <Image source={{ uri: song.imageUri }} style={styles.image} />
    <View style={styles.rightContainer}>
      <View style={styles.nameContainer}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.artist}>· {song.artist}</Text>
      </View>
      <View style={styles.iconsContainer}>
        <AntDesign name="hearto" size={30} color={"white"}/>
        <TouchableOpacity onPress={onPlayPausePress}>
          <FontAwesome name={isPlaying ? 'pause' : 'play'} size={30} color={"white"}/>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</View>
);
};

export default PlayerWidget;