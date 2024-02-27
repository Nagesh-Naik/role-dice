
import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  Pressable
} from 'react-native';

// import DiceOne from '../assets/DiceOne.png'
// import DiceTwo from '../assets/ DiceTwo.png'
// import DiceThree from '../assets/DiceThree.png'
// import DiceFour from '../assets/DiceFour.png'
// import DiceFive from '../assets/DiceFive.png'
// import DiceSix from '../assets/DiceSix.png'

const DiceOne = require('./assets/DiceOne.png')
const DiceTwo = require('./assets/DiceTwo.png')
const DiceThree = require('./assets/DiceThree.png')
const DiceFour = require('./assets/DiceFour.png')
const DiceFive = require('./assets/DiceFive.png')
const DiceSix = require('./assets/DiceSix.png')


type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false
};

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}

function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;

      default:
        setDiceImage(DiceOne)
        break;
    }

  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable
        onPress={rollDiceOnTap}
      >
        <Text
          style={styles.rollDiceBtnText}
        >
          Roll the dice
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'red',
    fontSize: 16,
    color: '#fff',
    fontWeight: '700',
    textTransform: 'uppercase',
    backgroundColor:'#000',
    marginTop:10
  },
});

export default App;