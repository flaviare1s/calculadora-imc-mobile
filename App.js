import { SafeAreaView, StyleSheet } from 'react-native';
import AssetExample from './components/AssetExample'

// You can import supported modules from npm
export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <AssetExample />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#444',
    color: '#fff',
    padding: 8,
  },
});
