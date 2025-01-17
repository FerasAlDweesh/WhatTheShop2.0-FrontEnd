import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Body,
  Button,
  Card,
  CardItem,
  Text,
  Spinner,
  Container,
  Header,
  Content,
  Accordion,
  List,
  ListItem,
  Title,
  Thumbnail,
  Left
} from "native-base";

// Buttons
import CartButton from "../Buttons/CartButton";
import DinoButton from "../Buttons/DinoButton";

// Stores
import authStore from "../../stores/authStore";
import orderStore from "../../stores/orderStore";
import profileStore from "../../stores/profileStore";

//Styles
import styles from "./styles";
import LogoutButton from "../Buttons/LogoutButton";

class Profile extends Component {
  componentDidMount = async () => {
    if (authStore.user) {
      console.log("BEFORE");
      await profileStore.getUserProfile();
      console.log("AFTER PROFILE");
      await orderStore.fetchAllOrders();
    } else {
      this.props.navigation.replace("Login");
    }
  };

  render() {
    if (profileStore.loading || orderStore.loading) {
      return <Spinner />;
    } else {
      const orderHistory = orderStore.orders.map(order => ({
        title: `Order No. ${order.id} (${order.date.slice(0, 10)}) `,
        content: order.items.map(
          item =>
            `${item.item.name}, ${item.item.price} KD, QTY: ${item.quantity} \n`
        )
      }));
      return (
        <>
          <Content>
            <List>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail
                    style={{ width: 120, height: 120, borderRadius: 30 / 2 }}
                    square
                    source={{
                      uri:
                        "https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg"
                    }}
                  />
                </Left>
                <Body>
                  <Text style={{ fontSize: 30 }}>{profileStore.user.name}</Text>
                  <Text note style={{ fontSize: 15 }}>
                    {profileStore.user.email}
                  </Text>
                </Body>
              </ListItem>
              <Header>
                <Left>
                  <Text style={{ fontSize: 20 }}>Order History:</Text>
                </Left>
              </Header>
              <ListItem>
                <Content padder>
                  <Accordion dataArray={orderHistory} expanded={2} />
                </Content>
              </ListItem>
            </List>
          </Content>
        </>
      );
    }
  }
}

Profile.navigationOptions = {
  title: "Profile",
  headerRight: <DinoButton />,
  headerLeft: <LogoutButton />
};
export default observer(Profile);
