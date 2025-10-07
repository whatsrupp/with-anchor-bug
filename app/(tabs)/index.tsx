import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function ScreenB() {
  return (
    <View>
      <Text>Index</Text>
      <Link href="/(source-stack)/source-page" style={{color: 'blue', textDecorationLine: 'underline'}}>Go to starting point of this example</Link>
    </View>
  );
}