import { createUserWithEmailAndPassword } from "firebase/auth";
import React, {useState} from "react";
import { View, Button, TextInput, Text } from "react-native";
import {authentication} from "../../firebase/firebase-config";

const Register = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState("");
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');

    const RegisterUser = () => {

        if(password === confirmPassword){
            createUserWithEmailAndPassword(authentication, email ,password)
            .then((result) => {
                console.log(result)
                setIsSignedIn(true);
            })
            .catch((error) => {
                console.log(error)
            })
        } else {
            alert("Passwords do not match")
        }

    }

    const validator = () => {
        if(!email){
            setEmailError("Email field cannot be empty.")
        }
    }

        return(
            <View>
                <TextInput 
                    placeholder="Name"
                    value={name}
                    onChangeText={name => setName(name)}
                />
                <TextInput 
                    placeholder="Email"
                    onBlur={() => validator()}
                    value={email}
                    onChangeText={email => setEmail(email)}
                    keyboardType="email-address"
                />
                <TextInput 
                    placeholder="Password"
                    minLength={6}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={password => setPassword(password)}
                />
                <TextInput 
                    placeholder="Confirm Password"
                    minLength={6}
                    secureTextEntry={true}
                    onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
                />
                <TextInput 
                    placeholder="Phone"
                    keyboardType="numeric"
                    minLength={10}
                    maxLength={10}
                    onChangeText={phone => setPhone(phone)}
                />
                
                <Button
                    onPress={RegisterUser}
                    title="Register"
                />

            </View>
        )
    }


export default Register