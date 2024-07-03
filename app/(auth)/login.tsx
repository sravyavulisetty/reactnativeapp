import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';

const userSchema = Yup.object({
  email: Yup.string().email('Email is not valid').required('This field is required'),
  password: Yup.string().min(7, 'Password must be at least 7 characters long').required('This field is required'),
});

const Login = () => {
  const initialValues = { email: '', password: '' };
  const [passwordError, setpasswordError] = useState("");
  const handleSubmit = async (values: any) => {
    try{
        const getEmail = await AsyncStorage.getItem(values.email);
        if(getEmail){
            if(JSON.parse(getEmail).password === values.password){
                router.push('/(tabs)/home')
            }
            else{
                setpasswordError("Incorrect password. Please try again")
            }
        }
    }
    catch(e){
        console.log(e)
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: '600' }}>Login</Text>
            <AntDesign name="login" size={24} color="black" style={{ marginLeft: 8 }} />
          </View>
          <Formik initialValues={initialValues} validationSchema={userSchema} onSubmit={handleSubmit}>
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <View>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

                <Text style={styles.label}>Password</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}
                {passwordError && <Text style={styles.error}>{passwordError}</Text>}
                <CustomButton handlePress={handleSubmit} title={''} containerStyles={''} textStyles={''} >
                  <Text style={styles.buttonText}>Submit</Text>
                </CustomButton>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="black" />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#e5b724',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    fontSize: 16,
    width: 250,
  },
  error: {
    fontSize: 14,
    color: 'red',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    backgroundColor: 'black',
    color: '#fff',
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    fontSize: 16,
    alignSelf: 'center'
  },
});
