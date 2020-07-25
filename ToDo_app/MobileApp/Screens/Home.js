import React, { Component } from 'react';
 
import {FlatList, Text, View,Alert, TouchableOpacity, TextInput } from 'react-native';
import HomeScreenStyles from '../Styles/HomeScreenStyles';
let array = []
export default class HomeScreen extends Component {
 
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
 
      this.setState({
      arrayHolder: [...array] ,
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
  
    return ( <View style={HomeScreenStyles.listContainer}>
      <TouchableOpacity 
      onPress={()=> this.onItemPress(item)}
      style={[HomeScreenStyles.redButton,{backgroundColor: item.isSelected ?  'red' : '#4CAF50'}]}>
      <View style={HomeScreenStyles.greenButton}></View>
      </TouchableOpacity>

      <Text numberOfLines={1} style={[HomeScreenStyles.item, {width: item.isSelected ? '60%': '95%'}]}  > {item.title} </Text>


<TouchableOpacity style={{position : 'absolute', right: 15 , borderWidth:item.isSelected ? 1: null,borderColor: '#4CAF50', paddingHorizontal: 15,paddingVertical:5,backgroundColor: item.isSelected ? '#4CAF50' : 'transparent', borderRadius: 3}}>
  {item.isSelected ? <Text style={HomeScreenStyles.listItemText} onPress={this.deleteAttachment.bind(this, item.title)}>Delete</Text> : null}
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
 
      <View style={HomeScreenStyles.MainContainer}>
        <TextInput
          placeholder="Enter Value Here"
          onChangeText={textInput_Holder => this.setState({ textInput_Holder })}
          value={this.state.textInput_Holder}
          style={HomeScreenStyles.textInputStyle}
          autoFocus={true}
          underlineColorAndroid='transparent'
        />
 
        <TouchableOpacity onPress={this.addData} activeOpacity={0.7} style={HomeScreenStyles.button} >
        <Text style={HomeScreenStyles.buttonText}> Add Values To List </Text>
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
              : <Text style={HomeScreenStyles.emptyListText }>Please Add Tasks</Text>
              }
      </View>
 
    );
  }
}
 
