// =========================Section 1=======================

// import React, { useState } from "react";
// import { StyleSheet, Text, View, Button, TextInput } from "react-native";

// export default function App() {
//   return (
//     <View style={{ padding: 50 }}>
//       <View
//         style={{
//           flexDirection: "column",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <TextInput
//           placeholder="Course goal"
//           style={{ width: "80%", borderColor: "black", borderWidth: 1 }}
//         />
//         <Button title="ADD" />
//       </View>
//     </View>
//   );
// }

// ========================Section 2 flexbox detail====================
import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        padding: 50,
        flexDirection: "row",
        width: "80%",
        height: 300,
        justifyContent: "space-around",
        alignItems: "stretch",
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          // width: 100,
          // height: 100,
          flex:1, 
          justifyContent: "center",
          alignItems: "center",
        }} 
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          // width: 100,
          // height: 100,
          flex:1, 

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          // width: 100,
          // height: 100,
          flex:1, 

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}
