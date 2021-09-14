import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCog,
  faFan,
  faKey,
  faLock,
  faUnlockAlt,
  faChargingStation,
  faStreetView,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "../Menu/index";

const CarItem = (props) => {
  const [locked, setLocked] = useState(true);
  const [located, setLocated] = useState(false);
  const [isControled, setControled] = useState(false);

  const clickLock = () => {
    setLocked(!locked);
  };
  const clickLocate = () => {
    setLocated(!located);
  };
  const handleControls = () => {
    setControled(!isControled);
  };
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.backgroundImage}
      />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesomeIcon style={styles.icon} icon={faCog} size={25} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tesla Clone </Text>
        <TouchableOpacity>
          <FontAwesomeIcon
            style={styles.Headericon}
            icon={faChargingStation}
            size={25}
          />
        </TouchableOpacity>
      </View>
      {/* Mileage */}
      <View style={styles.batterySection}>
        <Image
          source={require("../../assets/battery.png")}
          style={styles.batteryimg}
        />
        <Text style={styles.batteryText}>200 mi</Text>
      </View>
      {/* Status */}
      <View style={styles.status}>
        <Text style={styles.statusText}>Parked</Text>
      </View>
      <ScrollView>
        {/* Control Icons */}
        <View style={styles.controls}>
          <TouchableOpacity onPress={clickLocate}>
            <View style={styles.controlsButton}>
              <FontAwesomeIcon
                style={styles.icon}
                icon={located ? faStreetView : faMapMarkerAlt}
                size={24}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleControls}>
            <View style={styles.controlsButton}>
              <FontAwesomeIcon style={styles.icon} icon={faKey} size={24} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={clickLock}>
            <View style={styles.controlsButton}>
              <FontAwesomeIcon
                style={styles.icon}
                icon={locked ? faLock : faUnlockAlt}
                size={24}
              />
            </View>
          </TouchableOpacity>
        </View>
        {/* Menu */}

        {isControled && <Menu />}
      </ScrollView>
    </View>
  );
};

export default CarItem;
