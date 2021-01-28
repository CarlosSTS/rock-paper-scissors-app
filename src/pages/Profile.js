import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'

import Stone from '../assets/stone.png';
import Scissors from '../assets/scissors.png';
import Paper from '../assets/paper.png';

export default function Profile() {
  const [choice, setChoice] = useState('');
  const [adversary, setAdversary] = useState(1)

  function handleGenerate() {

    setAdversary(Math.floor(Math.random(adversary) * 3))
    adversary === 0 ? setAdversary('pedra') : <></>
    adversary === 1 ? setAdversary('papel') : <></>
    adversary === 2 ? setAdversary('tesoura') : <></>
  }

  function handleStone() {
    choice === '' ? setChoice('pedra') :
      Alert.alert('Aviso', 'Sua escolha já foi feita')
  }

  function handlePaper() {
    choice === '' ? setChoice('papel') :
      Alert.alert('Aviso', 'Sua escolha já foi feita')
  }

  function handleScissors() {
    choice === '' ? setChoice('tesoura') :
      Alert.alert('Aviso', 'Sua escolha já foi feita')
  }

  function results() {

    if (choice === adversary) {
      Alert.alert('Houve um empate', `Seu adversário escolheu ${adversary}`)
    }
    else if (choice === 'pedra' && adversary === 'papel') {
      Alert.alert('Você Perdeu', `Seu adversário escolheu ${adversary}.`)
    }
    else if (choice === 'pedra' && adversary === 'tesoura') {
      Alert.alert('Você Venceu', `Seu adversário escolheu ${adversary}.`)
    }
    else if (choice === 'papel' && adversary === 'tesoura') {
      Alert.alert('Você Perdeu', `Seu adversário escolheu ${adversary}.`)
    }
    else if (choice === 'papel' && adversary === 'pedra') {
      Alert.alert('Você Venceu', `Seu adversário escolheu ${adversary}.`)
    }
    else if (choice === 'tesoura' && adversary === 'pedra') {
      Alert.alert('Você Perdeu', `Seu adversário escolheu ${adversary}.`)
    }
    else if (choice === 'tesoura' && adversary === 'papel') {
      Alert.alert('Você Venceu', `Seu adversário escolheu ${adversary}.`)
    }
    else {
      Alert.alert('Aviso', 'Faça sua escolha novamente')
    }
    setChoice("")
    setAdversary(Math.floor(Math.random(adversary) * 3))
  }
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.itemText}>Pedra</Text>
        <Text style={styles.itemText}>Papel</Text>
        <Text style={styles.itemText}>Tesoura</Text>
      </View>

      <View style={styles.container}>
        <RectButton onPress={handleStone}>
          <Image style={{ width: 80, height: 80 }} source={Stone} />
        </RectButton>
        <RectButton onPress={handlePaper}>
          <Image style={{ width: 80, height: 80 }} source={Paper} />
        </RectButton>
        <RectButton onPress={handleScissors}>
          <Image style={{ width: 80, height: 80 }} source={Scissors} />
        </RectButton>
      </View>

      <RectButton style={styles.reactButton} onPress={handleGenerate}>
        <Text style={styles.reactButtonText}>Gerar Escolha do adversário</Text>
      </RectButton>

      <RectButton style={styles.reactButton} onPress={results}>
        <Text style={styles.reactButtonText}>Obter Resultado</Text>
      </RectButton>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  itemText: {
    fontSize: 20,
    marginLeft: 20,
  },

  button: {
    marginTop: 10
  },

  reactButton: {
    width: '70%',
    height: 50,
    backgroundColor: '#3d9be9',
    borderRadius: 10,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  reactButtonText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 19,
  },
});