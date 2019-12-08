import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";

// Stores
import cartStore from "../../stores/cartStore";

const Cart = () => {
  const cartItems = cartStore.dinosaurs.map(dinosaur => (
    <CartItem dinosaur={dinosaur} key={`${dinosaur.name} ${dinosaur.price}`} />
  ));

  return (
    <List>
      {cartItems}
      <Button full danger onPress={cartStore.checkoutCart}>
        <Text>Checkout</Text>
      </Button>
    </List>
  );
};

Cart.navigationOptions = {
  title: "Cart"
};

export default observer(Cart);
