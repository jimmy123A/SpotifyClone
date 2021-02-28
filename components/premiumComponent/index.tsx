import React from 'react';
import { View, Text } from 'react-native';
import { PremiumComponentProps } from '../../types';
import styles from './style';

const PremiumComponent = (props : PremiumComponentProps) => {
return (
 <View style = {[styles.container, { backgroundColor : props.premium.background }]} >  
  <Text style = {styles.title} >{props.premium.title}</Text>
  <Text style = {styles.description} >{props.premium.description}</Text>   
 </View>    
)
};

export default PremiumComponent;