import React from 'react';
import { View, Text, FlatList } from 'react-native';
import PremiumComponent from '../components/premiumComponent';
import PremiumData from '../data/PremiumData';

const PremiumScreen = () => {
return (
 <View >
 <Text style = {{ color : 'white', marginTop : 60, fontSize : 30, fontWeight : 'bold', alignSelf : 'center'  }}>
     One month Premium free
     </Text>      
 <FlatList 
 data = {PremiumData}
 keyExtractor = {item => item.id}
 renderItem = {({ item }) => {
  return <PremiumComponent premium = {item} />
 }}
 />
 </View> 
)    
};

export default PremiumScreen;