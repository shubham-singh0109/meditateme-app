import { View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import AppGradient from "@/components/AppGradient";
import { useRouter } from "expo-router";
import Animated, {
    FadeInDown,
    FadeInUp,
    withSpring,
} from "react-native-reanimated";

import beachImage from "@/assets/meditation-images/beach.webp";
import meditationIcon from "@/assets/meditation-images/logo.png"; 

const App = () => {

    const router = useRouter();

    return (
        <View className="flex-1">
            <ImageBackground
                source={beachImage}
                resizeMode="cover"
                className="flex-1"
            >
                <AppGradient
                    // Background Linear Gradient
                    colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
                >
                    <SafeAreaView className="flex flex-1 px-1 justify-between mb-10">
                        <Animated.View
                            entering={FadeInDown.delay(300)
                                .mass(0.5)
                                .stiffness(80)
                                .springify(20)}
                        >
                            <Image
                                source={meditationIcon} // Add your image source here
                                style={{ width:280, height:238, alignSelf: 'center', marginTop:40 }}
                            />
                            <Text className="text-center text-white font-regular text-2xl mt-28">
                            "Find peace within and embrace serenity everywhere."
                            </Text>
                        </Animated.View>
                        <Animated.View
                            entering={FadeInDown.delay(300)
                                .mass(0.5)
                                .stiffness(80)
                                .springify(20)}
                        >
                            <CustomButton
                                onPress={() => router.push("/login")}
                                title="Get Started"
                                
                            />
                        </Animated.View>

                        <StatusBar style="light" />
                    </SafeAreaView>
                </AppGradient>
            </ImageBackground>
        </View>
    );
};

export default App;
