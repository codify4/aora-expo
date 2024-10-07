import { isLoading } from 'expo-font';
import { TouchableOpacity, Text } from 'react-native'

type ButtonProps = {
    title: string;
    handlePress: () => void;
    containerStyles?: any;
    textStyles?: any;
    isLoading?: boolean;
};

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }: ButtonProps) => {
  return (
    <TouchableOpacity 
        className={`bg-secondary-100 rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
        onPress={handlePress}
        activeOpacity={0.7}
        disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg text-center ${textStyles}`}>
        {title}
    </Text>
    </TouchableOpacity>
  )
}
export default CustomButton