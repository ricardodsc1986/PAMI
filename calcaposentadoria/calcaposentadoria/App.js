import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
  View,
} from 'react-native';

const FuncionarioInfo = () => {
  const [funcionario, setFuncionario] = useState('');
  const [anoNasc, setAnoNasc] = useState('');
  const [anoEmp, setAnoEmp] = useState('');
  const [result, setResult] = useState('');

  const calcularInformacoes = () => {
    const func = parseInt(funcionario);
    const anoNascInt = parseInt(anoNasc);
    const anoEmpInt = parseInt(anoEmp);

    if (isNaN(func) || isNaN(anoNascInt) || isNaN(anoEmpInt) || anoNascInt <= 0 || anoEmpInt <= 0) {
      Alert.alert('Entrada inválida!', 'Por favor, insira valores válidos.');
      return;
    }

    let saudacao = '';
    if (func === 1) {
      saudacao = 'Olá João!';
    } else if (func === 2) {
      saudacao = 'Olá Maria!';
    } else {
      saudacao = 'Funcionário não cadastrado!';
    }

    const idade = 2024 - anoNascInt;
    const tempoServ = 2024 - anoEmpInt;

    let aposentadoriaStatus = '';
    if (idade >= 65 && tempoServ >= 30) {
      aposentadoriaStatus = 'Solicitação disponível';
      Alert.alert('Requerer aposentadoria');
    } else {
      aposentadoriaStatus = 'Solicitação indisponível';
      Alert.alert('Fora do prazo de requerimento');
    }

    setResult(`${saudacao}\nSua idade é de ${idade}\nSeu tempo de serviço é de ${tempoServ}\n${aposentadoriaStatus}`);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://caboronganoticias.com.br/wp-content/uploads/2024/02/Inss.gif' }} // Substitua com a URL da sua imagem de fundo
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Informações do Funcionário</Text>

        <TextInput
          style={styles.input}
          value={funcionario}
          keyboardType="numeric"
          placeholder="Código do Funcionário"
          onChangeText={setFuncionario}
        />

        <TextInput
          style={styles.input}
          value={anoNasc}
          keyboardType="numeric"
          placeholder="Ano de Nascimento"
          onChangeText={setAnoNasc}
        />

        <TextInput
          style={styles.input}
          value={anoEmp}
          keyboardType="numeric"
          placeholder="Ano de Entrada na Empresa"
          onChangeText={setAnoEmp}
        />

        <TouchableOpacity onPress={calcularInformacoes} style={styles.button}>
          <ImageBackground
            source={{ uri: 'https://cdnl.iconscout.com/lottie/premium/thumb/dinheiro-dinheiro-11021007-8836846.gif' }} // Substitua com a URL do seu GIF para o fundo do botão
            style={styles.buttonBackground}
            imageStyle={styles.buttonImage}
          >
            <Text style={styles.buttonText}>Calcular</Text>
          </ImageBackground>
        </TouchableOpacity>

        {result ? (
          <Text style={styles.resultText}>{result}</Text>
        ) : null}
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor de fundo semi-transparente para melhor legibilidade do texto
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
    backgroundColor: '#F0F8FF',
  },
  button: {
    width: 150,
    height: 50,
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden', // Garante que o conteúdo não ultrapasse os limites do botão
  },
  buttonBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  buttonImage: {
    resizeMode: 'cover', // Garante que o GIF cubra toda a área do botão
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 30,
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default FuncionarioInfo;
