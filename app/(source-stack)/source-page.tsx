import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function SourcePage() {
  return (
    <View>
      <Text>Source Page</Text>
      <Text>This is the starting point</Text>

      <Text> We want to navigate to the target page inside the (tabs) stack</Text>
      <Text> The tabs stack is parallel to this (source-stack) stack</Text>
      <Text> The target page is a stack inside one of the (tabs) stack screens</Text>


      <Text></Text>

      
      <Link href="/(tabs)/target-nested-stack/target-page" style={{color: '#0000EE', textDecorationLine: 'underline'}}>Go to Target Page - without withAnchor</Link>
      <Link href="/(tabs)/target-nested-stack/target-page" style={{color: '#0000EE', textDecorationLine: 'underline'}} withAnchor>Go to Target Page - with withAnchor</Link>
    </View>
  );
}