import {StyleSheet} from 'react-native';
import scale, {verticalScale} from './../../utils/Scale';
import * as CONST from './../../utils/Constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: CONST.OFF_WHITE_COLOR,
    paddingHorizontal: scale(20)
  },
  commentBodyContainer: {
    flex: 1,
    justifyContent:'center'
  },
  noDataText: {
    fontSize: scale(18),
    textAlign: 'center',
  },
  postStyle: {
    minHeight: verticalScale(70),
    marginVertical: verticalScale(10),
    marginTop: verticalScale(20),
    backgroundColor: CONST.WHITE_COLOR,
    borderRadius: scale(10),
    justifyContent:'center',
    paddingHorizontal: scale(15)
  },
  postTextStyle: {
    fontSize: scale(16),
    fontWeight: 'bold',
    marginTop: scale(5),
    paddingRight: scale(30)
  },
  commentStyle: {
    minHeight: verticalScale(70),
    marginBottom: verticalScale(5),
    backgroundColor: CONST.WHITE_COLOR,
    paddingHorizontal: scale(5),
    borderRadius: scale(10),
    justifyContent:'center',
    paddingHorizontal: scale(10)
  },
  commentNameTextStyle: {
    fontSize: scale(16),
    fontWeight: 'bold',
    marginTop:scale(5)
  },
  commentTextStyle: {
    fontSize: scale(14),
    marginTop:scale(5)
  },
  postBodyTextStyle: {
    fontSize: scale(14),
    marginVertical:scale(10)
  },
  trashIconContainerStyle:{
    position:'absolute',
    right: 0,
    top: 0,
    height: verticalScale(30),
    width: scale(40),
    justifyContent:'center',
    alignItems: 'center',
  },
  trashIconStyle:{
    resizeMode: 'cover',
  }
});
