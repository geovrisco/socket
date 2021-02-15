import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {Rating} from 'react-native-ratings';
import {io} from 'socket.io-client';

export default class MessageScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: '',
      messages: [],
    };
  }

  componentDidMount() {
    this.socket = io('http://10.255.4.65:8000');
    let msgs = '';
    this.socket.on('kirim', function (msg) {
      msgs = msg;
      console.log(msg, 'balikan');
    });
    console.log(msgs, 'asdasdasdasdas');
    this.setState({messages: [...this.state.messages, msgs]});
  }

  submitChatMessage() {
    this.socket.emit('chat', this.state.chatMessage);
    this.setState({
      chatMessage: '',
    });
  }
  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderWidth: 2}}
          autoCorrect={false}
          value={this.state.chatMessage}
          onSubmitEditing={() => this.submitChatMessage()}
          onChangeText={(chatMessage) => {
            this.setState({chatMessage});
          }}
        />
        <View>
          {this.state.messages.forEach((item) => {
            return <Text>{item}</Text>;
          })}
        </View>
      </View>
    );
  }
}
