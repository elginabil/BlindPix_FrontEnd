import React, { useState, useEffect } from 'react';
import { View,  FlatList,  Text,  ActivityIndicator,  StyleSheet,  TouchableOpacity,  ScrollView,  Image} from 'react-native';

import { RadioButton } from 'react-native-paper';
import axios from 'axios';

const App = ({navigation}) => {

  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [loading, setLoading] = useState(true);
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    // memanggil API menggunakan Axios
    axios
      .get('https://930f-114-142-168-28.ngrok-free.app/api/quizzes', {
        headers: { 'ngrok-skip-browser-warning': 'true' },
      })
      .then((response) => {
        setQuiz(response.data.data);
        setLoading(false);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);


const handleAnswerSelect = (questionId, selectedOption) => {
  const updatedSelectedAnswer = {...selectedAnswer, [questionId]: selectedOption};
  setSelectedAnswer(updatedSelectedAnswer);
}


  const renderItem = ({ item, index}) => {
    
    return (
      <View>
      <View style={styles.all_container_option}>
      <Text style={styles.title}>{index+1}.{item.question}</Text>
      <View style={{alignItems:'center'}}>
           <Image style={{width:200, height:200, marginTop:32, marginBottom:20, borderRadius:5}}source={{uri:item.image}}/>
           </View>
      <RadioButton.Group 
        onValueChange={selectedOption => handleAnswerSelect(item.id, selectedOption)}
        value={selectedAnswer[item.id]}>
        <TouchableOpacity style={styles.option} onPress={() => handleAnswerSelect(item.id, 'A')}>
        <View style={styles.answer}>
        <RadioButton value="A"/>
        <Text style={styles.answer_option}>{item.a}</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => handleAnswerSelect(item.id, 'B')}>
        <View style={styles.answer}>
        <RadioButton value="B"/>
        <Text style={styles.answer_option}>{item.b}</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => handleAnswerSelect(item.id, 'C')}>
        <View style={styles.answer}>
        <RadioButton value="C"/>
        <Text style={styles.answer_option}>{item.c}</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => handleAnswerSelect(item.id, 'D')}>
        <View style={styles.answer}>
        <RadioButton value="D"/>
        <Text style={styles.answer_option}>{item.d}</Text>
        </View>
        </TouchableOpacity>
        </RadioButton.Group>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  option:{
    width: 200,
    height: 50,
    paddingLeft: 10,
    backgroundColor:'white',
    justifyContent: 'center', 
    borderRadius: 12,
    color:'crimson',
    marginHorizontal: 80,
    marginVertical: 4,
    fontFamily: 'Poppins',
    
  },
 answer:{
   flexDirection: 'row',
   alignItems: 'center',
   backgroundColor: '#fafafa',
   marginHorizontal: 20,
   width: '100%',
   height: 64,
   borderRadius: 12,
   
 },
  all_container_option:{
    gap: 12,
    justifyContent: 'center'
  },
  title:{
    fontSize: 20,
    marginHorizontal: 40,
    marginVertical: 40,
    fontFamily: 'Manrope',
    color: 'black',
    fontWeight: 'bold'
  },
  flatlist:{
    backgroundColor: '#ffffff'
  },
  button_submit:{
    paddingTop: 20,
    alignItems:'center',
    paddingBottom: 20,
    gap: 10,
  },
  answer_option:{
    color: 'grey',
    fontWeight: 'bold'
  }
});

  return (
    <ScrollView>
    <View style={styles.loading}>
      {loading ? (
        <ActivityIndicator size="large" color="crimson" marginVertical= "40px"/>
      ) : (
        <View style={styles.flatlist}>
          <FlatList
            data={quiz}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        <View style={styles.button_submit}>
        <TouchableOpacity style={{
        width: 280,
        height: 42,
        paddingLeft: 0,
        backgroundColor:'#4E3BC9',
        justifyContent: 'center', 
        borderRadius: 12,
        }} 
        onPress={() => navigation.navigate('Post')}>
    
        <Text
          style={{
            color: 'white',
            fontWeight: '700',
            textTransform: 'none',
            fontSize: 15,
            textAlign: 'center'
          }}>
          Add Quiz
        </Text>
        </TouchableOpacity>
        </View>
        </View>
      )}
    </View>
    </ScrollView>
  );
}



export default App;