import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";
import { styles } from './BatButtonStyles';
import generatePassword from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard'

export function BatButton() {
    const [pass, setPass] = useState('');

    function handleGenerateButton() {
        let generateToken = generatePassword()
        setPass(generateToken)
    }

    function copyButton(){
        Clipboard.setStringAsync(pass)
    }
    
    return (
        <>
            <BatTextInput pass={pass}/>

            <Pressable 
                onPress={handleGenerateButton}
                style={styles.button}
            >
                <Text style={styles.text}>
                    GENERATE
                </Text>
            </Pressable>

            <Pressable 
                onPress={copyButton}
                style={styles.button}
            >
                <Text style={styles.text}>
                    ⚡ COPY
                </Text>
            </Pressable>
        </>
    );
}