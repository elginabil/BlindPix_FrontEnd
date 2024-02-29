import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

import Styles from '../Styles/style';
import CustomButton3 from '../Customs/custombutton3';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Easy = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: '#fafafa', flex: 1, }}>
        <View style={{ marginBottom: 12,  }}>

          <View style={{ position: 'absolute' }}>
            <Image
            style={{ width: screenWidth, height: 'auto', aspectRatio: 16/9 }}
            resizeMode="contain"
            source={require('../../assets/banner-easy2.png')}
            />
          </View>

          <View style={{ position: 'absolute', marginLeft: 32, marginTop: 48 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image
              style={{ width: 48, height: 48 }}
              source={require('../../assets/back-icon.png')}
              />
            </TouchableOpacity>
          </View>

        </View>

        <View style={{ backgroundColor: '#ffffff', flex: 1, marginTop: 180, borderRadius: 24 }}>
          
          <View style={{ marginHorizontal: 32, marginVertical: 32 }}>
            <View style={{ marginBottom: 16}}>
              <Text style={Styles.title1b}>Easy Level Test</Text>
              <Text style={Styles.text1}>Estimated time 20 mins</Text>
            </View>

            <View style={{ marginBottom: 32 }}>
              <Text style={Styles.textp}>Tes buta warna level mudah dirancang untuk menguji kemampuan seseorang dalam membedakan warna secara sederhana.Tugas peserta adalah mengidentifikasi dan membedakan warna yang ditampilkan dalam setiap pola atau gambar. Tes ini membantu mengidentifikasi apakah seseorang memiliki kemampuan dasar untuk membedakan warna dengan jelas.</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 24}}>
              <Image
              style={{ width: 64, height: 64, borderRadius: 100 }}
              source={require('../../assets/question-icon.png')}
              />

              <View style={{ marginLeft: 12 }}>
                <Text style={Styles.text1}>Question Total</Text>
                <Text style={Styles.title2}>10 Questions</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
              style={{ width: 64, height: 64, borderRadius: 100 }}
              source={require('../../assets/score-icon.png')}
              />

              <View style={{ marginLeft: 12 }}>
                <Text style={Styles.text1}>Score Minimum</Text>
                <Text style={Styles.title2}>20 Points</Text>
              </View>
            </View>

            <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
              <CustomButton3
              buttonname={'Start now'}
              press={() => navigation.navigate('QuizEasy')}
              />
            </View>
          </View>

        </View>
        
      </View>
    </ScrollView>
  );
};

export default Easy;
