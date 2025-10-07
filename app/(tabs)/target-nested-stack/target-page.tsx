import { Text, View } from "react-native";

export default function TargetScreen() {
  return (
    <View>
      <Text>When this is navigated to with withAnchor we should be able to press back and go to the anchor page</Text>
      <Text>If we cannot use the anchor our tab is stuck on this target page and we cant go back to the anchor page</Text>

    </View>
  );
}