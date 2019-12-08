import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import { Icon, Text, Button } from "native-base";

// Stores
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

const CartButton = ({ navigation }) => {
  const handlePress = () => {
    if (authStore.user) navigation.navigate("Cart");
    else navigation.navigate("Login");
  };

  return (
    <Button transparent light>
      {authStore.user ? (
        <>
          <Text style={{ color: "black" }}>{cartStore.quantity}</Text>
          <Icon
            name="shoppingcart"
            type="AntDesign"
            style={{ color: "black" }}
            onPress={() => navigation.navigate("Cart")}
          />
        </>
      ) : (
        <Icon
          name="login"
          type="MaterialCommunityIcons"
          style={{ color: "black" }}
          onPress={() => navigation.navigate("Login")}
        />
      )}
    </Button>
  );
};

export default withNavigation(observer(CartButton));
