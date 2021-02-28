import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
container : {
 flexDirection : 'row',
 marginTop : 20,
 justifyContent : 'space-around',
},
imageContainer : {
 height : 110,
 width : 180,
 borderRadius : 5,
 justifyContent : 'flex-end',
 alignItems : 'flex-end',
 overflow : 'hidden'
},
imageStyle : {
 width : 70,
 height : 70,
 transform : [{ rotate : '25deg' }],
 marginRight : -15
},
text : {
 fontSize : 18,
 color : 'white',
 fontWeight : 'bold',
 alignSelf : 'flex-start',
 marginLeft : 10   
}
});

export default styles;