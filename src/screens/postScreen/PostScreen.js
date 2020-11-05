import React, {useEffect, useCallback} from 'react';
import {FlatList, View, Text, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import CustomHeader from './../../components/CustomHeader';
import * as PostActions from './../../actions/PostActions';
import {TouchableOpacity} from 'react-native-gesture-handler';

const PostScreen = (props) => {
  useEffect(() => {
    // Fetch Posts
    props.fetchPosts();
  }, []);
  const {postData, isFetching, userNames} = props;

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.postStyle}
        onPress={() => {
          props.navigation.navigate('PostDetailScreen', {
            userName: userNames[item.userId],
            postId: item.id,
            postTitle: item.title,
            postBody: item.body,
          });
        }}>
        <Text style={styles.postTextStyle}>
          {'Name: '}
          {userNames[item.userId]}
        </Text>
        <Text style={styles.postTextStyle} numberOfLines={1}>
          {'Title: '}
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };
  const keyExtractor = useCallback((item) => item.id);

  return (
    <View style={styles.container}>
      <CustomHeader
        // showBackIcon
        // onBackIconPress={() => {}}
        titleText={'Posts'}
      />
      <View style={styles.bodyContainer}>
        {isFetching ? (
          <ActivityIndicator size={'large'} />
        ) : postData && postData.length ? (
          <View style={styles.bodyContainer}>
            <FlatList
              bounces={false}
              extraData={postData}
              data={postData}
              keyExtractor={keyExtractor}
              renderItem={(item) => renderItem(item)}
              contentContainerStyle={styles.postContainerStyle}
            />
          </View>
        ) : (
          <View style={styles.bodyContainer}>
            <Text style={styles.noDataText}>{'No posts available'}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    postData: state.PostReducer.postData,
    userNames: state.PostReducer.userNames,
    isFetching: state.PostReducer.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(PostActions.fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);
