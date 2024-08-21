import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';

import React, { useState } from 'react';

export default function App() {
  const [peso, setPeso] = useState('');
  const [alt, setAlt] = useState('');
  const [imc, setIMC] = useState(0);

  const calculoIMC = () => {
    const p = parseFloat(peso);
    const a = parseFloat(alt);

    if (!isNaN(p) && !isNaN(a) && a > 0) {
      const calcIMC = p / (a * a);
      setIMC(calcIMC);

      if (calcIMC <= 18.5) {
        alert('SEU ÍNDICE DE IMC É DE GRAU 0 - MAGREZA');
      } else if (calcIMC > 18.5 && calcIMC <= 24.9) {
        alert('SEU ÍNDICE DE IMC É NORMAL');
      } else if (calcIMC >= 25 && calcIMC <= 29.9) {
        alert('SEU ÍNDICE DE IMC É DE GRAU 1 - SOBREPESO');
      } else if (calcIMC >= 30 && calcIMC <= 39.9) {
        alert('SEU ÍNDICE DE IMC É DE GRAU 2 - OBESIDADE');
      } else if (calcIMC >= 40) {
        alert('SEU ÍNDICE DE IMC É DE GRAU 3 - OBESIDADE GRAVE');
      }
    } else {
      alert('Entrada inválida!');
    }
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://play-lh.googleusercontent.com/ouL1lfSP_CyUgb5OUvI51jG3cevMfulA1GZGtS63r3Xfa8STYiIxq6KiY3PkMc6PcTk',
      }}       style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Calcule aqui o seu IMC</Text>
        <TextInput
          style={styles.input}
          value={peso}
          keyboardType="numeric"
          placeholderTextColor="#3D9970"
          placeholder="Digite seu peso (kg)"
          onChangeText={setPeso}
        />

        <TextInput
          style={styles.input}
          value={alt}
          placeholderTextColor="#0074D9"
          keyboardType="numeric"
          placeholder="Digite sua altura (m)"
          onChangeText={setAlt}
        />

        <TouchableOpacity onPress={calculoIMC} style={styles.button}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>

        <Text style={styles.resultText}>
          SEU IMC: {imc ? imc.toFixed(2) : ''}
        </Text>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: '50%',
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF', 
  },
  input: {
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: 250,
    padding: 10,
    fontSize: 18,
    color: '#333',
    backgroundColor: '#F0F8FF',
  },
  button: {
    borderWidth: 2,
    width: 150,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#FF4500',
    paddingVertical: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  resultText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
