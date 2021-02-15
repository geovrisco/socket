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
import styles from '../../assets/style';
import {Rating} from 'react-native-ratings';

export default class directMessage extends React.Component {
  state = {
    email: '',
    displayName: '',
    dataSource: [],
  };
  componentDidMount() {}
  signOutUser = () => {};
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerHome2}>
          <TouchableOpacity
            style={{width: '50%', height: '50%'}}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Image
              source={require('../../assets/Images/logohome2.png')}
              style={{width: '50%', height: '150%'}}
            />
          </TouchableOpacity>
          <Image
            source={require('../../assets/Images/logo2home.png')}
            style={{width: '15%', height: '100%', marginLeft: '35%'}}
          />
        </View>

        <ScrollView>
          <SafeAreaView style={styles.listpost}>
            <View style={styles.headpost3}>
              <Image
                source={require('../../assets/Images/foto.png')}
                style={{width: 40, height: 40, borderRadius: 200 / 2}}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  marginLeft: '3%',
                  width: '50%',
                  fontWeight: 'bold',
                }}>
                {this.state.displayName}
              </Text>
            </View>
            <View style={styles.picturepost}>
              <Image
                source={require('../../assets/Images/testpost.png')}
                resizeMode="contain"
                style={{borderWidth: 1}}
              />
            </View>
            <View style={styles.head1post}>
              <View style={styles.head4post}>
                <Rating
                  imageSize={30}
                  style={{marginLeft: '-45%'}}
                  readonly={true}
                />
                <Text
                  style={{
                    fontSize: 20,
                    color: '#707070',
                    marginLeft: '2%',
                    marginTop: '2%',
                  }}>
                  Rp.120.000
                </Text>
              </View>
              <TouchableOpacity
                style={styles.statuspost2}
                onPress={() => this.props.navigation.navigate('Penjual')}>
                <Text
                  style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
                  Penjual
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.headpost3}>
              <Image
                source={require('../../assets/Images/foto.png')}
                style={{width: 40, height: 40, borderRadius: 200 / 2}}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  marginLeft: '3%',
                  fontWeight: 'bold',
                }}>
                {this.state.displayName}
              </Text>
              <Text style={{fontSize: 16, color: '#707070', marginLeft: '3%'}}>
                enak nih makanan
              </Text>
            </View>
            <View style={styles.postreply}>
              <Text style={{fontSize: 12, color: '#707070', marginLeft: '3%'}}>
                5h
              </Text>
              <TouchableOpacity
                style={{fontSize: 12, color: '#707070', marginLeft: '3%'}}>
                <Text>reply</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.head5post}>
              <Image
                source={require('../../assets/Images/foto.png')}
                style={{width: 40, height: 40, borderRadius: 200 / 2}}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  marginLeft: '3%',
                  fontWeight: 'bold',
                }}>
                {this.state.displayName}
              </Text>
              <Text style={{fontSize: 16, color: '#707070', marginLeft: '3%'}}>
                enak nih makanan
              </Text>
            </View>
            <View style={styles.postreply2}>
              <Text style={{fontSize: 12, color: '#707070', marginLeft: '3%'}}>
                5h
              </Text>
              <TouchableOpacity
                style={{fontSize: 12, color: '#707070', marginLeft: '3%'}}>
                <Text>reply</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.headpost3}>
              <Image
                source={require('../../assets/Images/foto.png')}
                style={{width: 40, height: 40, borderRadius: 200 / 2}}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  marginLeft: '3%',
                  fontWeight: 'bold',
                }}>
                {this.state.displayName}
              </Text>
              <Text style={{fontSize: 16, color: '#707070', marginLeft: '3%'}}>
                enak nih makanan
              </Text>
            </View>
            <View style={styles.postreply}>
              <Text style={{fontSize: 12, color: '#707070', marginLeft: '3%'}}>
                5h
              </Text>
              <TouchableOpacity
                style={{fontSize: 12, color: '#707070', marginLeft: '3%'}}>
                <Text>reply</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.head5post}>
              <Image
                source={require('../../assets/Images/foto.png')}
                style={{width: 40, height: 40, borderRadius: 200 / 2}}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  marginLeft: '3%',
                  fontWeight: 'bold',
                }}>
                {this.state.displayName}
              </Text>
              <Text style={{fontSize: 16, color: '#707070', marginLeft: '3%'}}>
                enak nih makanan
              </Text>
            </View>
            <View style={styles.postreply2}>
              <Text style={{fontSize: 12, color: '#707070', marginLeft: '3%'}}>
                5h
              </Text>
              <TouchableOpacity
                style={{fontSize: 12, color: '#707070', marginLeft: '3%'}}>
                <Text>reply</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ScrollView>
        <View style={styles.KomenPost}>
          <Image
            source={require('../../assets/Images/foto2.jpg')}
            style={{width: 40, height: 40, borderRadius: 200 / 2}}
          />
          <TextInput
            style={{
              marginLeft: '3%',
              fontSize: 16,
              color: '#707070',
              width: '60%',
            }}
            placeholder="Tambahkan Komentar.."
          />
          <TouchableOpacity>
            <Text style={{fontSize: 16, color: '#4B68F9'}}>Posting</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
