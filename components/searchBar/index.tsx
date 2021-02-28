import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './style';
import { EvilIcons } from '@expo/vector-icons'; 

const SearchBar = () => {
return (
 <View style = {styles.container} > 
 <Text style = {styles.text}>Search</Text>     
<View style = {styles.inputContainer} >
<EvilIcons
 style = {styles.icon}
 name = "search" />
 <TextInput
 style = {styles.input}
 placeholder = "Artists, songs or podcast"
 placeholderTextColor = 'black'
  />
</View>  
</View>  
)
};

export default SearchBar;