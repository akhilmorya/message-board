import {StyleSheet} from 'react-native';
import scale, {verticalScale} from './../../utils/Scale';
import * as CONST from './../../utils/Constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: CONST.OFF_WHITE_COLOR,
  },
  noDataText: {
    fontSize: scale(18),
    textAlign: 'center',
  },
  postContainerStyle: {
    padding: scale(20),
  },
  postStyle: {
    height: verticalScale(70),
    marginBottom: verticalScale(10),
    backgroundColor: CONST.WHITE_COLOR,
    paddingHorizontal: scale(5),
    borderRadius: scale(10),
    justifyContent:'center'
  },
  postTextStyle: {
    fontSize: scale(16),
    fontWeight: 'bold',
    marginVertical:scale(5)
  }
});
