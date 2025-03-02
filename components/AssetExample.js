import { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function AssetExample() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [imc, setImc] = useState()
  const [diagnosis, setDiagnosis] = useState('')

  const calcularIMC = () => {
    if (peso && altura) {
      const imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura))
      setImc(imc.toFixed(2))
      if (imc < 18.5) {
        setDiagnosis('Abaixo do peso');
      } else if (imc >= 18.5 && imc < 24.9) {
        setDiagnosis('Normal');
      } else if (imc >= 25 && imc < 29.9) {
        setDiagnosis('Sobrepeso');
      } else {
        setDiagnosis('Obesidade');
      }
    }
  }

  return (
    <View style={styles.container}>

     <Text style={styles.title}>Calculadora de IMC</Text>

     <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder='Peso em kg'
        value={peso}
        onChangeText={(text) => setPeso(text)}
      />
      <TextInput 
        style={styles.input}
        placeholder='Altura em m'
        value={altura}
        onChangeText={(text) => setAltura(text)}
      />
      <Button mode='contained' style={styles.button} onPress={calcularIMC}> 
        Calcular
      </Button>
     </View>

     <View style={styles.container}>
      <Text style={styles.legend}>IMC</Text>
      <View style={styles.resultContainer}>
        <Text style={styles.result}>{imc}</Text>
        <Text style={styles.diagnosis}>{diagnosis}</Text>
      </View>
     </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    width: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 15,
  },
  input: {
    color: '#ccc',
    borderWidth: 2,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    marginBottom: 5,
    width: '90%',
  },
  button: {
    backgroundColor: '#444',
    color: '#aaa',
    width: '90%',
    borderWidth: 2,
    borderColor: '#aaa',
    borderRadius: 8,
  },
  resultContainer: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#aaa',
    borderRadius: 8,
    paddingVertical: 5,
    width: '90%',
    height: 90,
  },
  legend: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  result: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  diagnosis: {
    color: '#fff',
    fontSize: 18,
  }
});
