import React from "react";
import { withNavigation } from "react-navigation";
// import { View } from "react-native";
import { Image, Alert } from "react-native";

// stores
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

// NativeBase Components
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  ListItem
} from "native-base";

// Style
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const DinoItem = ({ dinosaur, navigation }) => {
  const handlePress = () =>
    navigation.navigate("DetailScreen", {
      dinosaurID: dinosaur.id,
      dinosaurName: dinosaur.name
    });

  return (
    <Card>
      <TouchableOpacity onPress={handlePress}>
        <CardItem>
          <Left>
            <Body>
              <Text>{dinosaur.name}</Text>
              <Text note>{dinosaur.rarity}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{ uri: dinosaur.image }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
      </TouchableOpacity>
      <CardItem>
        <Left>
          <Text>{dinosaur.price}</Text>
        </Left>
        <Right>
          <Icon
            onPress={() => {
              if (authStore.user)
                cartStore.addItemToCart({ quantity: 1, name: dinosaur.name });
              else {
                Alert.alert(
                  "Login to add items to cart",
                  "It's the button on the top right corner.",
                  [
                    {
                      text: "Ok, boss."
                    },
                    {
                      text: "Cancel",
                      style: "cancel"
                    }
                  ],
                  { cancelable: true }
                );
              }
            }}
            name="cart"
            type="MaterialCommunityIcons"
            style={{ color: "red" }}
          />
        </Right>
      </CardItem>
    </Card>
  );
};

export default withNavigation(DinoItem);
