import { decorate, observable } from "mobx";
import { instance } from "./instance";

class OrderStore {
  orders = [];
  loading = true;

  fetchAllOrders = async () => {
    try {
      const res = await instance.get("orders/");
      const orders = res.data;
      this.orders = orders;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(OrderStore, {
  orders: observable,
  loading: observable
});

const orderStore = new OrderStore();

export default orderStore;
