import FormField from '@/components/FormField'
import { images } from '@/constants'
import { useState } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  

  const submit = () => {
    console.log(form);
  }
  
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='w-full justify-center items-center min-h-[75vh] px-4 my-6'>
                    <Image 
                        source={images.logo}
                        resizeMode='contain'
                        className='w-[1115px] h-[35px]'
                    />

                    <Text className='text-2xl text-white font-semibold mt-10 font-psemibold'> 
                        Sign Up to Aora
                    </Text>

                    <FormField 
                        title='Username'
                        value={form.username}
                        handleChangeText={(e) => setForm({ ...form, username: e })}
                        otherStyles='mt-10'
                    />
                    <FormField 
                        title='Email'
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles='mt-7'
                        keyboadType='email-address'
                    />
                    <FormField 
                        title='Password'
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles='mt-7'
                    />

                    <CustomButton 
                        title='Sign In'
                        handlePress={submit}
                        containerStyles='w-full mt-7'
                        isLoading={isSubmitting}
                    />

                    <View className='justify-center pt-5 flex-row gap-2'>
                        <Text className='text-lg text-gray-100 font-pregular'>Already have an account?</Text>
                        <Link href='/sign-in' className='text-lg font-psemibold text-secondary'>Sign In</Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SignUp