import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

// NativeBase Components
import { Text, Button, Icon } from "native-base";

// Styles
import styles from "./styles";
//stores
import authStore from "../../stores/authStore";

const LogoutButton = ({ navigation }) => {
  return (
    <Icon
      danger
      onPress={authStore.logout}
      name="logout"
      type="MaterialCommunityIcons"
      style={{ color: "grey" }}
      onPress={() => navigation.navigate("ListScreen")}
    />
  );
};

export default withNavigation(observer(LogoutButton));
