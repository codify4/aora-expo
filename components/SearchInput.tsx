import { icons } from '@/constants';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'

type FormFieldProps = {
    title?: string;
    value?: string;
    placeholder?: string;
    handleChangeText?: (e: string) => void;
    otherStyles?: string;
    keyboadType?: 'email-address' | 'default';
};

const SearchInput = ({ title, value, placeholder, handleChangeText, otherStyles, keyboadType }: FormFieldProps) => {
    const [showPsw, setShowPsw] = useState(false);
    
    return (
        <View className='border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4'>
            <TextInput 
                value={value}
                placeholder="Search for a video topic"
                onChangeText={handleChangeText}
                className='text-base mt-0.5 text-white flex-1 font-pregular'
                secureTextEntry={title === 'Password' && !showPsw}
            />
            <TouchableOpacity>
                <Image 
                    source={icons.search}
                    className='w-6 h-6'
                    resizeMode='contain'
                />
            </TouchableOpacity>
        </View>
    )
}
export default SearchInput