/** @format */

import { View, Text, StyleSheet } from 'react-native';
import { Container } from './styles';

export default function Dashboard() {
	return (
		<Container style={styles.container}>
			<Text>Dashboard dsds</Text>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
