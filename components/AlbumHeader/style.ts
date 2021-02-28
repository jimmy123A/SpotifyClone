import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 container : {
  alignItems : 'center',
  marginBottom : 20
 },
 image : {
  width : 200,
  height : 200,
  margin : 15
 },
 name : {
  color : 'white',
  fontSize : 30,
  fontWeight : 'bold'
 },
 creatorContainer : {
  flexDirection : 'row',
  margin : 10
 },
 button : {
  backgroundColor : '#1CD05D',
  height : 45,
  width : 110,
  borderRadius : 50,
  justifyContent : 'center',
  alignItems : 'center',
  marginBottom : 10
 },
 buttonText : {
  color : 'white',
  fontSize : 19,
  fontWeight : 'bold'
 },
 creator : {
  color : 'lightgray',
  margin : 5,
 },
 likes : {
  color : 'lightgray',
  margin : 5
 }   
});

export default styles;