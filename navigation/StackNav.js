import { createStackNavigator } from "react-navigation-stack";

// Components
import List from "../components/List";
import Detail from "../components/Detail";
import Profile from "../components/Profile";
import Login from "../components/Login";
import Register from "../components/Register";
import Cart from "../components/Cart";

const StackNav = createStackNavigator(
  {
    List: List,
    DetailScreen: Detail,
    Profile: Profile,
    Login: Login,
    Register: Register,
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
