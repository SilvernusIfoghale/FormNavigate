import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';
import Display from './Display';

export default function Login({ navigation }) {
  const [name, setname] = useState('');
  const [password, setpassword] = useState('');
  const submit = () => {
    const data = { name, password };
    navigation.navigate('Display', { transfer: data });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContianer}>
        <View>
          <Image
            source={require('../assets/seaimage.jpg')}
            style={styles.bgImg}
          />
          <Image
            source={require('../assets/icons8-left-arrow-100.png')}
            style={styles.leftIcon}
          />
        </View>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>WELCOME BACK!</Text>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.loginText}>LOGIN WITH</Text>
        <View style={styles.socialsGroup}>
          <Image
            source={require('../assets/icon-facebook.png')}
            style={styles.socialIcon}
          />
          <Image
            source={require('../assets/icons8-google-100.png')}
            style={styles.socialIcon}
          />
          <Image
            source={require('../assets/icons8-twitter-100.png')}
            style={styles.socialIcon}
          />
        </View>
        <Text style={styles.loginText}>OR</Text>
        <View style={styles.formContainer}>
          <View>
            <View style={styles.groupInput}>
              <Image
                source={require('../assets/icons8-email-100.png')}
                style={styles.icon}
              />
              <TextInput
                value={name}
                onChangeText={(e) => setname(e)}
                placeholder="Email"
                style={styles.input}
              />
            </View>
            <Text style={styles.labelText}>USE USERNAME</Text>
          </View>
          <View>
            <View style={styles.groupInput}>
              <Image
                source={require('../assets/icons8-lock-100.png')}
                style={styles.icon}
              />
              <TextInput
                value={password}
                placeholder="Password"
                onChangeText={(e) => setpassword(e)}
                style={styles.input}
              />
            </View>
            <Text style={styles.labelText}>FORGOT PASSWORD?</Text>
          </View>
          <TouchableOpacity onPress={() => submit()}>
            <View style={styles.btnContainer}>
              <Text style={styles.btnText}>LOGIN</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.newUser}>
            <Text style={styles.newUserText}>NEW USER? REGISTER</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContianer: {
    height: 290,
    width: '100%',
  },
  bgImg: {
    height: 290,
    width: '100%',
  },
  leftIcon: {
    position: 'absolute',
    top: 35,
    left: 10,
    width: 50,
    height: 50,
    tintColor: 'white',
  },
  welcomeContainer: {
    // position: 'absolute',
    marginTop: 'auto',
    width: '100%',
    height: 70,
    backgroundColor: '#7686ef',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 30,
  },
  socialsGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    padding: 10,
  },
  socialIcon: {
    backgroundColor: 'lightgray',
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  loginText: {
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7686ef',
  },
  formContainer: {
    width: '100%',
    height: '55%',
    alignItems: 'center',
    textAlign: 'center',
  },
  input: {
    flex: 1,
    fontSize: 17,
  },
  groupInput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 289,
    height: 55,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#7686ef',
    gap: 10,
    paddingLeft: 25,
  },
  icon: {
    height: 25,
    width: 25,
  },
  labelText: {
    paddingBottom: 8,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7686ef',
  },
  newUser: {
    height: 50,
    marginTop: 'auto',
  },
  btnContainer: {
    width: 289,
    height: 55,
    backgroundColor: '#7686ef',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  newUserText: {
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7686ef',
  },
});
