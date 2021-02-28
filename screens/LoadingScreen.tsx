import React, { useState, useEffect } from 'react';
import AnimatedSplash from 'react-native-animated-splash-screen';

function LoadingScreen(props : any) {

  const [loaded, setLoaded] = useState<boolean>(false);

   const startLoading =  () => {
    setTimeout(() => setLoaded(true), 1000);
   };

   useEffect(() => {

    if (loaded) {
      setTimeout(() => props.navigation.navigate('Root'), 300);
    }

    startLoading();
  }, [loaded]);

    return (
     <AnimatedSplash 
     translucent={true}
     isLoaded={loaded}
     logoImage={require('../assets/images/spotify-logo.png')}
     backgroundColor={"#262626"}
     logoHeight={150}
     logoWidth={150}
     />
    )
};

export default LoadingScreen;
