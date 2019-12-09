import { createStackNavigator } from "react-navigation-stack";

// Components
import List from "../components/List";
import Detail from "../components/Detail";
import Cart from "../components/Cart";

const StackNav = createStackNavigator(
  {
    List: List,
    DetailScreen: Detail,
    Cart: Cart
  },
  {
    initialRouteName: "List",
    defaultNavigationOptions: {
      title: "Dinosaur List"
    }
  }
);

export default StackNav;
