import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import { Icon, Button } from "native-base";

// Stores
import authStore from "../../stores/authStore";

const ProfileButton = ({ navigation }) => {
  return (
    <Button transparent light>
      {authStore.user && (
        <Icon
          name="person"
          type="MaterialIcons"
          style={{ color: "blue" }}
          onPress={() => navigation.replace("Profile")}
        />
      )}
    </Button>
  );
};

export default withNavigation(observer(ProfileButton));
