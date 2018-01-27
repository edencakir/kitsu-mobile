import { StyleSheet, Platform } from 'react-native';
import { isX } from 'kitsu/utils/isX';

import * as colors from 'kitsu/constants/colors';

const styles = StyleSheet.create({
  loadingWrapper: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.listBackPurple,
  },
  wrapper: {
    flexGrow: 1,
    backgroundColor: colors.listBackPurple,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '40%',
  },
  faderCover: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '40%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  header: {
    marginTop: Platform.select({ ios: 0, android: 20 }),
    paddingTop: Platform.select({ ios: 10, android: 0 }) + isX ? 20 : 0,
    height: 70,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    color: colors.white,
    fontFamily: 'OpenSans',
    fontWeight: '700',
    fontSize: 16,
    marginTop: isX ? 4 : 0,
  },
  filterButton: {
    position: 'absolute',
    top: Platform.select({ ios: '50%', android: '30%' }),
    marginTop: isX ? 10 : 0,
    right: 10,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  carousel: {
    flexGrow: 0,
    zIndex: 5,
  },
  socialContent: {
    flex: 1,
    backgroundColor: colors.listBackPurple,
    zIndex: 1,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.darkGrey,
  },
  discussionTitle: {
    color: 'white',
    fontFamily: 'OpenSans',
    textAlign: 'center',
    padding: 16,
  },
  closeButton: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 80,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default styles;
