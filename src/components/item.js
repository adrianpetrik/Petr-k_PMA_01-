import { Text, StyleSheet, Pressable } from "react-native";

export default function Item({title}){

    return(
        <Pressable onPress={() => {}} style={styles.item}>
          <Text>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#e23636",
        padding: 20,
        borderRadius: 12,
        margin : 4,
    },
});