import { icons } from '@/constants';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'

type FormFieldProps = {
    title: string;
    value: string;
    placeholder?: string;
    handleChangeText: (e: string) => void;
    otherStyles?: string;
    keyboadType?: 'email-address' | 'default';
};

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, keyboadType }: FormFieldProps) => {
    const [showPsw, setShowPsw] = useState(false);
    
    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className='text-base text-gray-100 font-pmedium'>
                {title}
            </Text>

            <View className='border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row'>
                <TextInput 
                    value={value}
                    placeholder={placeholder}
                    onChangeText={handleChangeText}
                    className='flex-1 text-white font-psemibold text-base'
                    secureTextEntry={title === 'Password' && !showPsw}
                />

                {title === 'Password' && (
                    <TouchableOpacity onPress={() => setShowPsw(!showPsw)} className='items-center justify-center'>
                        <Image
                            source={!showPsw ? icons.eye : icons.eyeHide}
                            className='w-6 h-6'
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}
export default FormField