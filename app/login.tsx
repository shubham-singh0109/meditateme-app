import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  ActivityIndicator, 
  Alert, 
  Image, 
  ImageBackground, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View 
} from 'react-native';
import app from './../firebaseConfig';
import {getAuth, signInWithEmailAndPassword, 
  createUserWithEmailAndPassword} from 'firebase/auth'
import { router } from 'expo-router';
import AppGradient from "@/components/AppGradient";

import meditationIcon from "@/assets/meditation-images/logo.png"; 

export default function App() {

  const [loading,setLoading] = useState(false);

  //Creating Email sign in feature
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerAndLogin() {
    try {
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth,email,password);
      const response = await signInWithEmailAndPassword(auth,email,password);
      setLoading(false);
      Alert.alert('Success', response.user.uid);
      return;
    }catch(error) {
      setLoading(false);
      Alert.alert('Oops', 'Something went wrong')
    }
  }

  return (
    
        
    <View className="flex-1">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
    <Text style={{color: 'white', textAlign:'center', marginTop: 50}}>
      Register or Login with Email
    </Text>
      <Image
        source={meditationIcon} // Add your image source here
        style={{ width:280, height:238, alignSelf: 'center', marginTop:90, marginBottom:90 }}
      />
      <StatusBar style='auto'/>
      <TextInput 
      style={styles.input} 
      placeholder='Email'
      onChangeText={setEmail} 
      />
      <TextInput 
      style={[styles.input, 
      {marginTop:15}]} 
      placeholder='Password'
      secureTextEntry={true}
      onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={()=> router.push("/nature-meditate")}>
      {loading ? (
        <ActivityIndicator
        size={'small'}
        color={'gray'}
        animating={loading}
        />
      ) : (
        <Text style={{color: 'white'}}>Login</Text>
      )}
      </TouchableOpacity> 
      </AppGradient>
    </View>
    
  );
}

const styles = StyleSheet.create({
  button: {
    width:'90%',
    height: 45,
    backgroundColor: 'teal',
    borderRadius: 6,
    marginTop: 25, 
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center', 
  },
  input: {
    width:'90%',
    height: 45,
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
    alignSelf:'center',
  },
});
