import { Link as ExpoLink } from "expo-router";
import { ComponentProps } from "react";


export default function Link(props: ComponentProps<typeof ExpoLink>) {
  return (
    <ExpoLink {...props} style={{color: '#0000EE', textDecorationLine: 'underline'}} />
  );
}