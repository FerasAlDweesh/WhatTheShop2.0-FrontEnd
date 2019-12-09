import { createStackNavigator } from "react-navigation-stack";

// Components
import List from "../components/List";
import Detail from "../components/Detail";

const StackNav = createStackNavigator(
  {
    List: List,
    DetailScreen: Detail
  },
  {
    initialRouteName: "List",
    defaultNavigationOptions: {
      title: "Dinosaur List"
    }
  }
);

export default StackNav;
