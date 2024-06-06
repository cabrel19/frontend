import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import Countdown from 'react-native-countdown-component';

const Test2 = ({ route }) => {
  //const { phoneNumber } = route.params;
  const [code, setCode] = useState('');
  const [resendDisabled, setResendDisabled] = useState(true);
  const [timeLeft, setTimeLeft] = useState(30);

  const resendCode = () => {
    setTimeLeft(30); // Reset countdown to 30 seconds
    setResendDisabled(true);
    // Logic to resend code
    Alert.alert('Info', 'Le code a été renvoyé');
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setResendDisabled(false);
    }
  }, [timeLeft]);

  const verifyCode = () => {
    // Logic to verify code
    if (code === '12345') { // Replace with actual verification logic
      Alert.alert('Succès', 'Le code est valide');
    } else {
      Alert.alert('Erreur', 'Le code est invalide');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Un code à cinq chiffres vous a été envoyé au </Text>
      <View style={styles.codeContainer}>
        {Array(5).fill().map((_, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            maxLength={1}
            keyboardType="number-pad"
            onChangeText={text => {
              const newCode = code.split('');
              newCode[index] = text;
              setCode(newCode.join(''));
            }}
          />
        ))}
      </View>
      <Countdown
        until={timeLeft}
        size={20}
        onFinish={() => setResendDisabled(false)}
        digitStyle={{ backgroundColor: '#FFF' }}
        digitTxtStyle={{ color: '#1CC625' }}
        timeToShow={['S']}
        timeLabels={{ s: 'sec' }}
      />
      <Button title="Renvoyer le code" onPress={resendCode} disabled={resendDisabled} />
      <Button title="Vérifier" onPress={verifyCode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  codeInput: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    textAlign: 'center',
    width: 40,
  },
});

export default Test2;