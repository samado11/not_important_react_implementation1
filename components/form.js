import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  TextInput,
  Dimensions
} from 'react-native';
import CheckBox from 'react-native-check-box'
import { Container, Header, ListItem, Body, Form, Item, Input, Label, Picker, Content,Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';

const { width, height } = Dimensions.get('window')


class Forma extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
      borderColor: 'transparent',
      borderColor1: 'transparent',
      borderColor2: 'transparent',
      borderColor3: 'transparent',
      borderColor4: 'transparent',
      borderColor5: 'transparent',
      date: new Date('2020-06-12T14:42:42'),
      mode: 'date',
      show: false,
    };
  }

  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  }

  show = mode => {
    this.setState({
      show: true,
      mode,
    });
  }

  datepicker = () => {
    this.show('date');
  }

  timepicker = () => {
    this.show('time');
  }
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }
  onFocus(num) {
    if(num==0){
    this.setState({
      borderColor: '#eccc68'
    })
  }
  if(num==1){
    this.setState({
      borderColor1: '#eccc68'
    })
  }
  if(num==2){
    this.setState({
      borderColor2: '#eccc68'
    })
  }
  if(num==3){
    this.setState({
      borderColor3: '#eccc68'
    })
  }
  if(num==4){
    this.setState({
      borderColor4: '#eccc68'
    })
  }
  if(num==5){
    this.setState({
      borderColor5: '#eccc68'
    })
  }
  }

  onBlur(num) {
    if(num==0){
    this.setState({
      borderColor: 'transparent'
    })
  }
  if(num==1){
    this.setState({
      borderColor1: 'transparent'
    })
  }
  if(num==2){
    this.setState({
      borderColor2: 'transparent'
    })
  }
  if(num==3){
    this.setState({
      borderColor3: 'transparent'
    })
  }
  if(num==4){
    this.setState({
      borderColor4: 'transparent'
    })
  }
  if(num==5){
    this.setState({
      borderColor5: 'transparent'
    })
  }
  }

  render() {
    const { show, date, mode } = this.state;
    return (
<ScrollView >

<View style={{ paddingVertical: 20, paddingHorizontal: 10, justifyContent: "space-between", flexDirection: "row", borderBottomWidth: 1, borderBottomColor: '#ddd', borderBottomWidth: 3, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 8, elevation: 1 }}>
  <View style={{ flexDirection: "row" }}>
    <Ionicons style={{ justifyContent: "center", padding: 5 }} size={25} name="ios-arrow-back"></Ionicons>
    <Text style={{ fontSize: 24 }}>Add Offline Exam</Text>

  </View>
  <Icon size={25} name="user"></Icon>
</View>

<View>

{ show && <DateTimePicker value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={this.setDate} />
}
</View>

<View style={{ marginTop: 20, marginHorizontal: 10, padding: 10, backgroundColor: "#ededed", borderRadius: 10, borderColor: this.state.borderColor, borderWidth: 2, height: 60 }}>
<Text style={{ paddingLeft: 5, marginTop: -43, color: "#fbfbfb",fontWeight:"bold", fontSize: 28}}>______</Text>
  <Item floatingLabel style={{ borderBottomColor: "transparent" }}>
    <Label style={{ paddingLeft: 5, marginTop: -13, color: "#000", fontSize: 14 }}>Exam Title</Label>
    <Input onBlur={() => this.onBlur(0)} onFocus={() => this.onFocus(0)} style={{ marginTop: -15 }} />
  </Item>
</View>

<View style={{ marginTop: 10, marginHorizontal: 10, padding: 10, backgroundColor: "#ededed", borderRadius: 10, borderColor: this.state.borderColor1, borderWidth: 2, height: 60 }}>
<Text style={{ paddingLeft: 5, marginTop: -43, color: "#fbfbfb",fontWeight:"bold", fontSize: 28}}>_____</Text>
  <Item floatingLabel style={{ borderBottomColor: "transparent" }}>
    <Label style={{ paddingLeft: 5, marginTop: -13, color: "#000", fontSize: 14}}>Address</Label>
    
    <Input onBlur={() => this.onBlur(1)} onFocus={() => this.onFocus(1)} style={{ marginTop: -15 }} />
  </Item>
</View>

<View style={{ flexDirection: "row", justifyContent: "space-between" }}>

<View style={{width: "45%", marginTop: 10, marginHorizontal: 10, padding: 10, backgroundColor: "#ededed", borderRadius: 10, borderColor: this.state.borderColor2, borderWidth: 2, height: 60 }}>
<TouchableOpacity style={{height:"100%",borderWidth:0,borderColor:"transparent"}} onPress={this.timepicker} title="Show time picker!" >

              <Text style={{  fontSize: 14, marginTop: 6 }}> From Hour</Text>
  </TouchableOpacity>
</View>
<View style={{width: "45%", marginTop: 10, marginHorizontal: 10, padding: 10, backgroundColor: "#ededed", borderRadius: 10, borderColor: this.state.borderColor3, borderWidth: 2, height: 60 }}>
<TouchableOpacity style={{height:"100%",borderWidth:0,borderColor:"transparent"}} onPress={this.timepicker} title="Show time picker!" >

<Text style={{  fontSize: 14, marginTop: 6 }}> To Hour</Text>
</TouchableOpacity>
</View>
  
</View>

<View style={{ marginTop: 10, marginHorizontal: 10, padding: 10, backgroundColor: "#ededed", borderRadius: 10, borderColor: this.state.borderColor4, borderWidth: 2, height: 60 }}>
<Text style={{ paddingLeft: 5, marginTop: -43, color: "#fbfbfb",fontWeight:"bold", fontSize: 28}}>___</Text>
  <Item floatingLabel style={{ borderBottomColor: "transparent" }}>
    <Label style={{ paddingLeft: 8, marginTop: -13, color: "#000", fontSize: 14 }}>Day</Label>
    <Input onBlur={() => this.onBlur(4)} onFocus={() => this.onFocus(4)} style={{ marginTop: -15 }} />
  </Item>
</View>

<View style={{ marginTop: 10, marginHorizontal: 10, padding: 10, backgroundColor: "#ededed", borderRadius: 10, borderColor: this.state.borderColor5, borderWidth: 2, height: 60 }}>
<Text style={{ paddingLeft: 5, marginTop: -43, color: "#fbfbfb",fontWeight:"bold", fontSize: 28}}>_______</Text>
  <Item floatingLabel style={{ borderBottomColor: "transparent" }}>
    <Label style={{ paddingLeft: 5, marginTop: -13, color: "#000", fontSize: 14 }}>Total Grades</Label>
    <Input onBlur={() => this.onBlur(5)} onFocus={() => this.onFocus(5)} style={{ marginTop: -15 }} />
  </Item>
</View>

<View style={{ padding: 10 }}>
  <Item picker style={{ backgroundColor: "#ededed", borderRadius: 10 }}>
    <Picker

      mode="dropdown"
      iosIcon={<Icon name="arrow-down" />}
      style={{ width: undefined }}
      placeholder="the exam is on"
      placeholderStyle={{ color: "#bfc6ea" }}
      placeholderIconColor="#007aff"
      selectedValue={this.state.selected2}
      onValueChange={this.onValueChange2.bind(this)}
    >
      <Picker.Item label="The exam is on" value="key0" />
      <Picker.Item label="ATM Card" value="key1" />
      <Picker.Item label="Debit Card" value="key2" />
      <Picker.Item label="Credit Card" value="key3" />
      <Picker.Item label="Net Banking" value="key4" />
    </Picker>
  </Item>
</View>
<View style={{ padding: 10 }}>
  <Text style={{ fontWeight: "bold", fontSize: 20 }}>
    Groups
</Text>
</View>
<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
  <CheckBox
    style={{ flex: 1, padding: 10 }}
    onClick={() => {
      this.setState({
        isChecked: !this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
    rightText={"Group name"}
  />
  <CheckBox
    style={{ flex: 1, padding: 10 }}
    onClick={() => {
      this.setState({
        isChecked: !this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
    rightText={"Group name"}
  />
</View>
<View style={{ flexDirection: "row", justifyContent: "space-between" }}>

  <CheckBox
    style={{ flex: 1, padding: 10 }}
    onClick={() => {
      this.setState({
        isChecked: !this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
    rightText={"Group name"}
  />
  <CheckBox
    style={{ flex: 1, padding: 10 }}
    onClick={() => {
      this.setState({
        isChecked: !this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
    rightText={"Group name"}
  />
</View>
<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
  <CheckBox
    style={{ flex: 1, padding: 10 }}
    onClick={() => {
      this.setState({
        isChecked: !this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
    rightText={"Group name"}
  />
  <CheckBox
    style={{ flex: 1, padding: 10 }}
    onClick={() => {
      this.setState({
        isChecked: !this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
    rightText={"Group name"}
  />
</View>
<View style={{ padding: 10 }}>
  <TouchableOpacity style={{ backgroundColor: "#eccc68", borderRadius: 5, padding: 4, height: 40 }}>
    <View >
      <Text style={{ alignSelf: "center", fontSize: 18 }}> Add</Text>
    </View>
  </TouchableOpacity>
</View>
</ScrollView>
    )
}
}

export default Forma