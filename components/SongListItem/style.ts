import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 title : {
  color : 'white',
  fontSize : 20   
 },
 artist : {
  color : 'lightgray',
  fontSize : 17   
 },
 image : {
  width : 65,
  height : 65   
 },
 container : {
  flexDirection : 'row',
  margin : 15  
 },
 rightContainer : {
  justifyContent : 'space-around',
  marginLeft : 15   
 }
});

export default styles;