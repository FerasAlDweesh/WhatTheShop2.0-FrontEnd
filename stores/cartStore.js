import { computed, decorate, observable } from "mobx";

class CartStore {
  dinosaurs = [];

  addItemToCart = item => {
    const itemExist = this.items.find(_item => _item.name === item.name);
    if (itemExist) itemExist.quantity += item.quantity;
    else this.items.push(item);
  };

  removeItemFromCart = item =>
    (this.items = this.items.filter(_item => _item !== item));

  checkoutCart = () => {
    this.items = [];
    alert("Thank you for buying our items");
  };

  get quantity() {
    let quantity = 0;
    this.dinosaurs.forEach(dinosaur => (quantity += item.quantity));
    return quantity;
  }
}

decorate(CartStore, {
  items: observable,
  quantity: computed
});

const cartStore = new CartStore();
export default cartStore;
