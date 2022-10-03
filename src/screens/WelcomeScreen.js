import React, {useEffect, useState, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import axios from 'axios';
import {AuthContext} from '../store/auth-context';

function WelcomeScreen() {
  const [fetchMessage, setFetchMessage] = useState('');
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    axios
      .get(
        'https://authtiaction-react-default-rtdb.firebaseio.com/message.json?auth=' +
          token,
      )
      .then(response => {
        setFetchMessage(response.data);
      });
  }, [token]);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.text}>You authenticated successfully!</Text>
      <Text style={styles.text}>{fetchMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    color: 'white',
  },
});
