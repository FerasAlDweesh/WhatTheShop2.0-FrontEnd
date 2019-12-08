import React from "react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

// Style
import styles from "./styles";
import cartStore from "../../stores/cartStore";

const CartItem = ({ dinosaur }) => {
  return (
    <ListItem style={styles.listStyle}>
      <Left>
        <Text style={styles.name}> {dinosaur.name} </Text>
        <Text note style={styles.price}>
          {item.price}
        </Text>
      </Left>
      <Body>
        <Text style={styles.quantity}>{dinosaur.quantity}</Text>
      </Body>
      <Right>
        <Button
          transparent
          onPress={() => cartStore.removeItemFromCart(dinosaur)}
        >
          <Icon name="trash" style={styles.removeItem} />
        </Button>
      </Right>
    </ListItem>
  );
};

export default CartItem;
