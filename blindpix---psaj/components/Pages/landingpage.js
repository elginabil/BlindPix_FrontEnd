import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

import CustomInput from '../Customs/custominput';
import CustomButton from '../Customs/custombutton';
import CustomButton2 from '../Customs/custombutton2';
import Styles from '../Styles/style';

const Landing = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
        <View style={{ marginHorizontal: 32, marginVertical: 80 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ width: 40, height: 40, borderRadius: 8, marginBottom: 32 }} 
            source={require('../../assets/purple-icon.png')}/>
          </View>
          <View style={{ alignItems: 'center', marginBottom: 32 }}>
            <Image style={{ width: 320, height: 280, borderRadius: 16, marginBottom: 32 }} 
            source={require('../../assets/img1.png')}/>
            <Text style={[Styles.title, { textAlign: 'center' }]}> Empowering Accessibility with our Blind Color Test App!</Text>
          </View>
          
          <View style={{  }}>
            <View style={{ marginBottom: 16 }}>
              <CustomButton
              buttonname={'Sign in'}
              press={() => navigation.navigate('Login')}
              />
            </View>
            <View style={{ marginBottom: 16 }}>
              <CustomButton2
              buttonname={'Register'}
              press={() => navigation.navigate('Register')}
              />
            </View>
            <View style={{ marginBottom: 16 }}>
              <CustomButton2
              buttonname={'Sign in as admin'}
              press={() => navigation.navigate('AdminLogin')}
              />
            </View>
          </View>

        </View>
      </View>
    </ScrollView>
  );
};

export default Landing;
