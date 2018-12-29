import { Dimensions } from 'react-native';

// TODO: remove Layout.js?
export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
};

export const containerNoPadding = {
	flex: 1,
	backgroundColor: '#fff'
};

export const buttons = {
	backgroundColor: '#f44242',
	margin: 5,
};
