export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type Album = {
 id : string,
 imageURL : string,
 artistHeadLine : string,
 name : string,
 by : string,
 numberOfLikes : number,
 imageUri : string
};

export type Song = {
  id : string,
  imageUri : string,
  title : string,
  artist : string
};

export type MusicKindProps = {
   imageUri : string,
   id : string,
   imageBackground : string,
   text : string,
  };

  export type PremiumComponentProps = {
    premium : {
    background : string,
    title : string,
    description : string 
    }  
   };