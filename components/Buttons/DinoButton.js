import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import { Icon, Button } from "native-base";

const DinoButton = ({ navigation }) => {
  return (
    <Button transparent light>
      <Icon
        name="pets"
        type="MaterialIcons"
        style={{ color: "rgb(153,0,0)" }}
        onPress={() => navigation.navigate("List")}
      />
    </Button>
  );
};

export default withNavigation(observer(DinoButton));
