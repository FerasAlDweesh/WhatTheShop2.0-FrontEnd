import { computed, decorate, observable } from "mobx";
import { instance } from "./instance";
import { Alert } from "react-native";
import ProfileStack from "../navigation/ProfileStack";
import { AsyncStorage } from "react-native";

class CartStore {
  items = [];

  addItemToCart = async item => {
    const itemExist = this.items.find(_item => _item.name === item.name);
    if (itemExist) itemExist.quantity += item.quantity;
    else this.items.push(item);
    await AsyncStorage.setItem("items", this.items);
    console.log(this.items);
  };

  removeItemFromCart = async item =>
    (this.items = this.items.filter(_item => _item !== item)) &&
    (await AsyncStorage.removeItem("items"));

  checkoutCart = async navigation => {
    this.items.forEach(item => delete item.name);
    console.log("ORDER", this.items);
    try {
      await instance.post("orders/create/", { items: this.items });
      this.items = [];
      Alert.alert(
        "Thank you for your purchase!",
        "See you again soon",
        [
          {
            text: "Done",
            onPress: () => navigation.replace("Profile")
          }
        ],
        { cancelable: true }
      );
    } catch (err) {
      console.error(err);
    }
  };

  get quantity() {
    let quantity = 0;
    this.items.forEach(dinosaur => (quantity += dinosaur.quantity));
    return quantity;
  }

  retrieveItems = async () => {
    const items = await AsyncStorage.getItem("items");
    if (items) this.items = items;
  };
}

decorate(CartStore, {
  items: observable,
  quantity: computed
});

const cartStore = new CartStore();
cartStore.retrieveItems();
export default cartStore;
