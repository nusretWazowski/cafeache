import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';

import Link from '../UI/Link';
 
const AppBar: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="transparent" style="light" />
      <View style={styles.container}>
        <Link
          to="/cafe"
          background="transparent"
          text="Cafe"
          pressDetectionDistance={30}
        />
        <Link
          to="/outside"
          background="transparent"
          text="Outside"
          pressDetectionDistance={30}
        />
        <Link
          to="/options"
          background="transparent"
          text="Options"
          pressDetectionDistance={30}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    // backgroundColor: '#ffc0cb',
    backgroundColor: '#20232a',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    elevation: 10
    // #ffa0b0
  }
});

export default AppBar;
