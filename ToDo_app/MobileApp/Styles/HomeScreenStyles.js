import { StyleSheet } from "react-native"

export default StyleSheet.create({
 
    MainContainer: {   
      alignItems: 'center',
      flex: 1,
      marginTop: Platform.OS == 'ios' ? '15%': '10%'
   
    },
    greenButton:{
    backgroundColor: "white", 
    width:16 ,
    height:16, 
    borderRadius: 8
  },
  listItemText:{
  fontSize: 16,color: "#fff"
  },
  listContainer:{
  alignItems: 'center',flex:1,
  justifyContent: 'flex-start',
  flexDirection: 'row',
  alignSelf: 'center',
  width: '100%', height: 55,
  backgroundColor: 'lightgray',
   marginVertical: 5, 
   paddingHorizontal: 10,
   borderRadius:3
    },
  
   
    item: {
      padding: 10,
      fontSize: 16,
      height: 44, 
      
    },
   
    textInputStyle: {
      paddingHorizontal: 15,
      textAlign: 'center',
      height: 45,
      width: '90%',
      borderWidth: 1,
      borderColor: '#4CAF50',
      borderRadius: 3,
      marginTop: 12, 
      fontSize: 16
    },
   
    button: {
   
      width: '90%',
      height: 45,
      padding: 10,
      backgroundColor: '#4CAF50',
      borderRadius: 3,
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center'
    },
   
    buttonText: {
      color: '#fff',
      
      fontSize: 16,
    },
    emptyListText:{
      marginTop: 20,
      fontSize: 16
    },
    redButton:{width: 25,height:25, borderRadius: 12, alignItems: 'center', 
        
    justifyContent: 'center'}
   
  })
