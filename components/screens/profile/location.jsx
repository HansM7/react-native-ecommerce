import React, { useState } from "react";
import { Text, View } from "react-native";

// todo this section is pending.

function Location() {
  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
  });
  return (
    <View>
      <Text>Location</Text>
    </View>
  );
}

export default Location;
