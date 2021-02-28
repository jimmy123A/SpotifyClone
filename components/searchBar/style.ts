import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
     marginTop : 50,
    },
    inputContainer : {
        flexDirection : 'row',
        backgroundColor : '#F0EEEE',
        height : 42,
        borderRadius : 5,
        marginHorizontal : 15,
        marginTop : 15,
        marginBottom : 10
    }, 
    icon : {
       fontSize : 35,
       alignSelf : 'center',
       marginHorizontal : 15
    },  
    input : {
    flex : 1 ,
    fontSize : 18
    },
    text : {
     fontSize : 30,
     fontWeight : 'bold',
     color : 'white',
     marginLeft : 13   
    }
});

export default styles;