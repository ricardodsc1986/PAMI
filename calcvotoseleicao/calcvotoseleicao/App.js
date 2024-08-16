import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert,
  View,
} from 'react-native';

const VotoCalculator = () => {
  const [eleitores, setEleitores] = useState('');
  const [brancos, setBrancos] = useState('');
  const [nulos, setNulos] = useState('');
  const [validos, setValidos] = useState(null);
  const [percBrancos, setPercBrancos] = useState(null);
  const [percNulos, setPercNulos] = useState(null);
  const [percValidos, setPercValidos] = useState(null);

  const calcularResultados = () => {
    const e = parseFloat(eleitores);
    const b = parseFloat(brancos);
    const n = parseFloat(nulos);

    if (!isNaN(e) && !isNaN(b) && !isNaN(n) && e > 0) {
      const validosCalculado = e - (b + n);
      const percBrancosCalculado = (b / e) * 100;
      const percNulosCalculado = (n / e) * 100;
      const percValidosCalculado = (validosCalculado / e) * 100;

      setValidos(validosCalculado);
      setPercBrancos(percBrancosCalculado);
      setPercNulos(percNulosCalculado);
      setPercValidos(percValidosCalculado);
    } else {
      Alert.alert('Entrada inválida!');
    }
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://agendadopoder.com.br/wp-content/uploads/2024/02/businessmen-putting-papers-in-the-ballot-box-vector-id590583530.jpg',
      }}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Eleições 2024</Text>

        {/* Adicionar o GIF */}
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Brazilian-moving-flag.gif', // Substitua com a URL do seu GIF
          }}
          style={styles.gif}
        />

        <TextInput
          style={styles.input}
          value={eleitores}
          keyboardType="numeric"
          placeholderTextColor="#3D9970"
          placeholder="Total de eleitores"
          onChangeText={setEleitores}
        />

        <TextInput
          style={styles.input}
          value={brancos}
          keyboardType="numeric"
          placeholderTextColor="#0074D9"
          placeholder="Total de votos em branco"
          onChangeText={setBrancos}
        />

        <TextInput
          style={styles.input}
          value={nulos}
          keyboardType="numeric"
          placeholderTextColor="#8B4513"
          placeholder="Total de votos nulo"
          onChangeText={setNulos}
        />

        <TouchableOpacity onPress={calcularResultados} style={styles.button}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>

        {validos !== null && (
          <Text style={styles.resultText}>
            Total de votos válidos é de {validos.toFixed(0)}
            {'\n'}Percentual votos brancos: {percBrancos.toFixed(2)}%
            {'\n'}Percentual votos nulos: {percNulos.toFixed(2)}%
            {'\n'}Percentual votos válidos: {percValidos.toFixed(2)}%
          </Text>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: '100%',
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
    backgroundColor: '#00FF7F',
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
    textAlign: 'center',
  },
  gif: {
    width: 128,
    height: 128,
    marginBottom: 20,
  },
});

export default VotoCalculator;
