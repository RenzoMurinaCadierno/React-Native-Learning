import React, { useState } from "react"
import { StyleSheet, View, FlatList, Button } from "react-native"
import TextItem from "./components/TextItem"
import TextField from "./components/TextField"

export default function App() {
  const [texts, setTexts] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handlePress(text) {
    setTexts((prevTexts) => [
      ...prevTexts,
      { key: Math.random().toString(), value: text }
    ])
    setIsModalOpen(false)
  }

  function handleDeleteText(targetKey) {
    setTexts(texts.filter((t) => t.key !== targetKey))
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  return (
    <View style={styles.container}>
      <Button title="Open" onPress={() => setIsModalOpen(true)} />
      <TextField
        modalProps={{ visible: isModalOpen }}
        cancelButtonProps={{ onPress: closeModal }}
        addButtonProps={{ title: "add", onPress: handlePress }}
      />
      <FlatList
        data={texts}
        renderItem={(data) => (
          <TextItem onDeleteText={handleDeleteText.bind(this, data.item.key)}>
            {data.item.value}
          </TextItem>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({ container: { padding: 70 } })

// // import { StatusBar } from "expo-status-bar"
// import React, { useState } from "react"
// import { StyleSheet, Text, View, Button } from "react-native"

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View> ... </View>
//       <View>

//       </View>
//       {/* <StatusBar style="auto" /> */}
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// })
