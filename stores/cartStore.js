import { computed, decorate, observable } from "mobx";
import { instance } from "./instance";
import { Alert } from "react-native";

class CartStore {
  items = [];

  addItemToCart = item => {
    const itemExist = this.items.find(_item => _item.name === item.name);
    if (itemExist) itemExist.quantity += item.quantity;
    else this.items.push(item);
    console.log(this.items);
  };

  removeItemFromCart = item =>
    (this.items = this.items.filter(_item => _item !== item));

  checkoutCart = async () => {
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
            text: "Done"
            // onPress: () => this.props.navigation.replace("List")
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
}

decorate(CartStore, {
  items: observable,
  quantity: computed
});

const cartStore = new CartStore();
export default cartStore;
