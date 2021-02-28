import React from 'react';
import {View, FlatList, Text} from 'react-native';
import { MusicKindProps } from '../../types';
import MusicKinds from '../musicKinds';
import styles from './style';

export type MusicKindsCategory = {
 title : string,   
 category : [MusicKindProps]  
}

const MusicKindsCategory = (props : MusicKindsCategory) => {
return (
<View style = {styles.container} >
<Text style = {styles.text} > {props.title}</Text>
<FlatList
 data = {props.category}
 keyExtractor = {item => item.id}
 renderItem = {({ item }) => {
  return <MusicKinds musickind = {item} />
 }}
/>
</View>
);
};

export default MusicKindsCategory;