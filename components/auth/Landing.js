import React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from "react-native";

export default function Landing({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "#A0522D" }}>

      <Text style={styles.title}>Welcome to <Text style={styles.subtitle}>GiannitsaStore</Text></Text>

      <TouchableOpacity 
        style={styles.appButtonContainer}
        onPress={() => navigation.navigate("Register")}>
        <Text style={styles.appButtonText}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "orange",
    shadowColor: 'rgba(0, 0, 0, 0.7)',
    shadowOpacity: 0.8,
    shadowRadius: 15 ,
    shadowOffset : { width: 13, height: 13}, 
    borderRadius: 10,
    borderWidth: 1,
    width: 170,
    height: 70,
    justifyContent: 'center',
    alignSelf: "center",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 100,
    color: "#fff",
    fontStyle: 'italic',
    fontWeight: '600',
    justifyContent: 'center',
    marginLeft: 50,
    letterSpacing: 2,
  },
  subtitle: {
    fontStyle: 'normal',
    fontSize: 40,
    color: 'orange',
    fontFamily: 'Arial',
    borderRadius: 10,
    borderWidth: 3,
    
  }
})