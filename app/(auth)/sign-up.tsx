import { ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, router } from 'expo-router';
import CustomButton from '@/components/CustomButton';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';

const userSchema = Yup.object({
  name: Yup.string().required('This field is required'),
  email: Yup.string().email('Email is not valid').required('This field is required'),
  password: Yup.string().required('This field is required'),
});

const Signup =  () => {
  const initialValues = { name: '', email: '', password: '' };
  const handleSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
    try{
        await AsyncStorage.setItem(values.email, JSON.stringify(values));
        setSubmitting(false);
        resetForm();
    }
    catch(e){
        console.log(e)
    }
    router.push('/(tabs)/home')
  };
  const handleRetrieveData = async () => {
    try {
      const keys = await AsyncStorage.getItem('Elon@gmail.com');
      // const result = await AsyncStorage.multiGet(keys);
      console.log(JSON.stringify(keys));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <View className='flex flex-row justify-center items-center gap-2 -mt-10'>
             <Text className='text-2xl font-semibold'>Create an account</Text>
             <AntDesign name="adduser" size={24} color="black" />
          </View>
          <Formik initialValues={initialValues} validationSchema={userSchema} onSubmit={handleSubmit}>
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
              <View>
                <Text style={styles.label}>Name</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}

                <Text style={styles.label}>Email</Text>
                <TextInput
                  className='w-72'
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
                <CustomButton title={''} handlePress={handleSubmit} containerStyles={'bg-black'} textStyles={'text-white'}>
                  <Text className='text-white text-base text-center font-semibold'>Submit</Text>
                </CustomButton>
                {/* <CustomButton title={''} handlePress={handleRetrieveData} containerStyles={'bg-black mt-2'} textStyles={'text-white'}>
                  <Text className='text-white text-base text-center font-semibold'>retrieve data</Text>
                </CustomButton> */}
              </View>
            )}
          </Formik>
          <Text>Already have an account, <Link href='/login' className='text-blue-800'>Login </Link>here</Text>
        </View>
      </ScrollView>
      <StatusBar barStyle='dark-content'></StatusBar>
    </SafeAreaView>
  );
};

export default Signup;

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
    marginTop: -12,
    justifyContent: "center",
    alignItems: "center",
    gap: 20
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
    fontSize: 16
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
    color: '#fff',
    fontSize: 16,
  },
});
