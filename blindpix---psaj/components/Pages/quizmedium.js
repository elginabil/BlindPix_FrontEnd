import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView, TouchableOpacity, Image, ImageBackground, } from 'react-native';
import axios from 'axios';

const App = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [quiz, setQuiz] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);
  const [answerColor, setAnswerColor] = useState(Array(4).fill('#AD6DFF')); 

  useEffect (()=>{
    axios.get('https://2e69-182-2-76-9.ngrok-free.app/api/quizzes',
    {headers:{'ngrok-skip-browser-warning':'true'}})
    .then((response)=>{
      setQuiz(response.data.data);
      setLoading(false);
    })
    .catch((error)=>{
      console.log(error);
      setLoading(false);
    });
  },[]);

  const checkAnswer = (answer, index) => {
    let correctAnswer = quiz[currentQuestion].correct_answer;
    let isCorrect = false;

    // Mengecek jawaban berdasarkan nomor soal
    if (currentQuestion === 0 || currentQuestion === 1) {
      isCorrect = answer === 'a';

    } else if (currentQuestion === 2) {
      isCorrect = answer === 'a';

    } else if (currentQuestion === 3) {
      isCorrect = answer === 'b';

    } else if (currentQuestion === 4) {
      isCorrect = answer === 'a';

    } else if (currentQuestion === 5) {
      isCorrect = answer === 'a';

    } else if (currentQuestion === 6) {
      isCorrect = answer === 'a';

    } else if (currentQuestion === 7) {
      isCorrect = answer === 'a';

    } else if (currentQuestion === 8) {
      isCorrect = answer === 'a';
      
    } else if (currentQuestion === 9) {
      isCorrect = answer === 'a';

    } else if (currentQuestion === 10) {
      isCorrect = answer === 'a';

    } else {
      isCorrect = answer === correctAnswer;
    }

    setIsAnswerCorrect(isCorrect);
    setSelectedAnswer(answer);

    // Mengatur warna kotak jawaban berdasarkan kebenaran jawaban
    const newAnswerColor = [...answerColor];
    newAnswerColor[index] = isCorrect ? 'green' : 'red';
    setAnswerColor(newAnswerColor);

    // Timeout untuk mengembalikan warna kotak ke default setelah 2 detik
    setTimeout(() => {
      // Mengatur warna kotak kembali ke warna default
      const resetAnswerColor = [...answerColor];
      resetAnswerColor[index] = '#AD6DFF'; // warna default
      setAnswerColor(resetAnswerColor);
      
      setSelectedAnswer(null);
      if (currentQuestion + 1 < quiz.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizEnded(true);
        navigation.navigate('JawabanBenar'); // Navigasi ke halaman JawabanBenar
      }
    }, 2000);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < quiz.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizEnded(false);
    }
  };

  const styles = StyleSheet.create({
    answerBox: {
      borderRadius: 14,
      padding: 20,
      margin: 10,
      width: 150,
      height: 90,
      shadowColor: 'grey', shadowOffset: { width: 5, height: 4 }, shadowOpacity: 0.5, shadowRadius: 3
    },
    answer: {
      fontSize: 14,
      textAlign:'center',
      fontWeight:'bold',
      marginTop:13,
      color:'white'
    }
  });

  if (loading) {
    return (
      <View style={{ backgroundColor: '', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  const item = quiz[currentQuestion];

  return (
      <ScrollView>
        <View style={{
          paddingTop: 50, 
          height: 340, 
          marginTop:250, 
          borderRadius: 30, 
          alignItems: 'center' 
          }}>
        <Text style={styles.title}>{item.question}</Text>
        <Image style={{
          borderRadius: 30, 
          marginTop: 100, 
          width: 200, 
          height: 200 }} 
          source={{ uri: item.image }} /> 
          <Text style={{
            fontSize: 20, 
            fontWeight: 'bold', 
            paddingBottom: 30, 
            paddingHorizontal: 10, 
            borderRadius: 10, 
            marginBottom: 80, 
            textAlign: 'center', 
            marginTop: 50, 
            color: 'white' }}>
            {item.quiz}</Text>
          
          <View style={{ flexDirection: 'flex-sart' }}>
            {['a', 'b'].map((choice, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => checkAnswer(choice, index)} 
                style={[styles.answerBox, { backgroundColor: answerColor[index] }]}
              >
                <Text style={styles.answer}>{item[choice]}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={{ flexDirection: 'flex-sart'}}>
            {['c', 'd'].map((choice, index) => (
              <TouchableOpacity 
                key={index}
                onPress={() => checkAnswer(choice, index + 2)} 
                style={[styles.answerBox, { backgroundColor: answerColor[index + 2] }]}
              >
                <Text style={styles.answer}>{item[choice]}</Text>
              </TouchableOpacity>
            ))}
          </View>


        </View>
      </ScrollView>
      
    

  );
};

export default App;