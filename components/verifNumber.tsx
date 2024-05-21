import React, { useState, useRef } from 'react';
import { View, TextInput,Text,TouchableOpacity,Alert, TouchableWithoutFeedback,Keyboard, StyleSheet } from 'react-native';

const VerificationCodeInput = () => {
  const [code, setCode] = useState(['', '', '', '', '']);
  const inputs = useRef([]);

  const handleChangeText = (text, index) => {
    if (text.length <= 1) {
      let newCode = [...code];
      newCode[index] = text;
      setCode(newCode);

      if (text && index < 4) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const verifyCode = () => {
    const enteredCode = code.join('');
    const correctCode = '12345';
    console.log('code:',code);
    

    if (enteredCode === correctCode) {
      Alert.alert('Success', 'The code is correct!');
    } else {
      Alert.alert('Error', 'The code is incorrect. Please try again.');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    
    <View>
      <Text style={styles.texte}>Entrer le code a 5 chiffres qui vous a ete envoye au 694522577.</Text>
           
      <View style={styles.container}>
        {code.map((num, index) => (
          <TextInput
            key={index}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            value={num}
            onChangeText={text => handleChangeText(text, index)}
            onKeyPress={e => handleKeyPress(e, index)}
            ref={ref => inputs.current[index] = ref}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.resend}>
        <Text style={{ color: 'black',textAlign:'center', fontSize: 20 }}>Renvoyer le code par sms</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.verifier} onPress={verifyCode}>
        <Text style={{ color: 'white',textAlign:'center', fontSize: 16 }}>VERIFIER</Text>
      </TouchableOpacity>
    </View>
    
    </TouchableWithoutFeedback>
  );
 };

const styles = StyleSheet.create({
  texte:{
   alignSelf:'center',
   fontSize:22,
   marginTop:30,
   width:"80%",
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    alignSelf:'center',
    width:270,
    marginTop:50,
  },
  input: {
    width: 46,
    height: 42,
    borderWidth: 1,
    borderColor: 'green',
    textAlign: 'center',
    fontSize: 24,
    borderRadius:10,
  },
  resend:{
    padding: 13,
    borderRadius: 10,
    marginTop: 20,
    width:300,
    height:56,
    alignSelf:'center',
    borderWidth:1,

  },
  verifier:{
    backgroundColor: '#088A4B',
    padding: 13,
    borderRadius: 10,
    marginTop: 160,
    width:140,
    height:47,
    alignSelf:'center',
  },
});

export default VerificationCodeInput;