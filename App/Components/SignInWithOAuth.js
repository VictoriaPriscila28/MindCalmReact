import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Button, Dimensions, TouchableOpacity, Text } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import Colors from "../../assets/Shared/Colors";


WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <TouchableOpacity
    onPress={onPress}
            style={{padding:20,
            backgroundColor:Colors.PRIMARY,
            borderRadius:90,
            alignItems:'center',
            marginTop:20,
            width:Dimensions.get('screen').width*0.6,
        }}>
            <Text style={{fontSize:15, color:Colors.white}}>Faça login com o Google</Text>
        </TouchableOpacity>
  );
}
export default SignInWithOAuth;