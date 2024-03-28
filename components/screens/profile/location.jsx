import React, { useState } from "react";
import { Text, View } from "react-native";

// * this section not implemented

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
