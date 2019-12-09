import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Spinner } from "native-base";

// Component
import DinoItem from "./DinoItem";
import CartButton from "../Buttons/CartButton";

// Stores
import dinoStore from "../../stores/dinoStore";
import authStore from "../../stores/authStore";

const DinosaurList = ({ navigation }) => {
  if (dinoStore.loading) return <Spinner />;
  const dinosaurList = dinoStore.dinosaurs.map(dinosaur => (
    <DinoItem dinosaur={dinosaur} key={dinosaur.id} />
  ));
  console.log(dinosaurList);
  return (
    <Content>
      <List>{dinosaurList}</List>
      {/* authStore.user && <Logout /> */}
    </Content>
  );
};

DinosaurList.navigationOptions = {
  title: "Dinosaur List",
  headerRight: <CartButton />
};

export default observer(DinosaurList);
