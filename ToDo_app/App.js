import React, { Component } from 'react';
 
import { StyleSheet, FlatList, Text, View,Alert, TouchableOpacity, TextInput, Platform } from 'react-native';
let array = []
export default class App extends Component {
 
  constructor(props) {
    
    super(props);
      this.state = {
        arrayHolder: [],
        checked: false,
        textInput_Holder: ''
 
      }
  }
 
  componentDidMount() {
 
    this.setState({ arrayHolder: [...array] })
 
  }
 
 
  addData = () => {
 
    if(this.state.textInput_Holder == ''){
alert('Please Enter Some Value')
    }else{
      array.push({title : this.state.textInput_Holder , isSelected : false});
 
      this.setState({ arrayHolder: [...array] ,
        textInput_Holder : ''
      })
    }}
 
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }
 
  onItemPress = (data) => {
    
   
    data.isSelected = !data.isSelected;
    this.setState({
      checked: !this.state.checked
    })
  };
  
  renderListItems({ item, index }) {
  
    return ( <View style={styles.listContainer}>
      <TouchableOpacity 
      onPress={()=> this.onItemPress(item)}
      style={[styles.redButton,{backgroundColor: item.isSelected ?  'red' : '#4CAF50'}]}>
      <View style={styles.greenButton}></View>
      </TouchableOpacity>

      <Text numberOfLines={1} style={[styles.item, {width: item.isSelected ? '60%': '95%'}]}  > {item.title} </Text>


<TouchableOpacity style={{position : 'absolute', right: 15 , borderWidth:item.isSelected ? 1: null,borderColor: '#4CAF50', paddingHorizontal: 15,paddingVertical:5,backgroundColor: item.isSelected ? '#4CAF50' : 'transparent', borderRadius: 3}}>
  {item.isSelected ? <Text style={styles.listItemText} onPress={this.deleteAttachment.bind(this, item.title)}>Delete</Text> : null}
</TouchableOpacity>
    </View>
    )
  }
  renderFooter = () => {
    return (
      <View style={{ height: 60 }}>
      </View>
    )
  }
   deleteAttachment(name) {
    const { arrayHolder } = this.state
    let deletedData = arrayHolder.filter(item => {
      return item.title != name
    })
    this.setState({ arrayHolder: deletedData })
    array = deletedData
  }
 
 
  render() {
    return (
 
      <View style={styles.MainContainer}>
        <TextInput
          placeholder="Enter Value Here"
          onChangeText={textInput_Holder => this.setState({ textInput_Holder })}
          value={this.state.textInput_Holder}
          style={styles.textInputStyle}
          autoFocus={true}
          underlineColorAndroid='transparent'
        />
 
        <TouchableOpacity onPress={this.addData} activeOpacity={0.7} style={styles.button} >
        <Text style={styles.buttonText}> Add Values To List </Text>
        </TouchableOpacity>
 
        {this.state.arrayHolder.length >0 ? 
        <FlatList
        showsVerticalScrollIndicator={false}
        style={{marginTop: 20}}
                 data={this.state.arrayHolder}
        
                 width='90%'
        
                 extraData={this.state.arrayHolder}
        
                 keyExtractor={(index) => index.toString()}
        
                 ItemSeparatorComponent={this.FlatListItemSeparator}
                 extraData={this.state.checked}
                 ListFooterComponent={()=> this.renderFooter()}
                 renderItem={(item)=>this.renderListItems(item )}
               />
              : <Text style={styles.emptyListText}>Please Add Tasks</Text>
              }
 
 
      </View>
 
    );
  }
}
 
const styles = StyleSheet.create({
 
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
 
});