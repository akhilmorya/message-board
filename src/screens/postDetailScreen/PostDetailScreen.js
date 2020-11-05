import React, {useEffect, useCallback} from 'react';
import {FlatList, View, Text, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import CustomHeader from './../../components/CustomHeader';
import * as PostActions from './../../actions/PostActions';

const PostDetailScreen = (props) => {
  const {commentData, isFetchingComments, userNames, navigation, isPostDeleted} = props;
  const {userName, postId, postTitle, postBody} = navigation.state.params;
  useEffect(() => {
    // Fetch Comments
    props.fetchComments(postId);
  }, []);

  // To navigate back after deleting a post
  useEffect(() => {
    if(isPostDeleted){
      navigation.goBack();
    }
  }, [isPostDeleted, commentData]);
  const renderItem = ({item}) => {
    return (
      <View
        style={styles.commentStyle}
      >
        <Text style={styles.commentNameTextStyle}>
          {userNames[item.id] || item.email.split("@")[0]}
        </Text>
        <Text style={styles.commentTextStyle}>
          {item.body}
        </Text>
      </View>
    );
  };
  const keyExtractor = useCallback((item) => item.id);

  return (
    <View style={styles.container}>
      <CustomHeader
        showBackIcon
        onBackIconPress={() => {
          navigation.goBack();
        }}
        numberOfLines={1}
        titleText={postTitle}
      />
      <View style={styles.bodyContainer}>
        <View style={styles.postStyle}>
          <TouchableOpacity
            style={styles.trashIconContainerStyle}
            onPress={() => {
              props.deletePost(postId);
            }}>
            <Image
              style={styles.trashIconStyle}
              source={require('./../../../assets/common/trashIcon.png')}
            />
          </TouchableOpacity>
          <Text style={styles.postTextStyle} numberOfLines={1}>
            {userName}
          </Text>
          <Text style={styles.postBodyTextStyle}>{postBody}</Text>
        </View>
          {isFetchingComments ? (
            <ActivityIndicator size={'large'} />
          ) : commentData && commentData.length ? (
            <View style={styles.commentBodyContainer}>
              <Text style={styles.postBodyTextStyle}>{'Comments :'}</Text>
              <FlatList
                bounces={false}
                showsVerticalScrollIndicator={false}
                extraData={commentData}
                data={commentData}
                keyExtractor={keyExtractor}
                renderItem={(item) => renderItem(item)}
                contentContainerStyle={styles.postContainerStyle}
              />
            </View>
          ) : (
            <View style={styles.commentBodyContainer}>
              <Text style={styles.noDataText}>{'No comments available'}</Text>
            </View>
          )}
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    commentData: state.PostReducer.commentData,
    userNames: state.PostReducer.userNames,
    isFetchingComments: state.PostReducer.isFetchingComments,
    isPostDeleted: state.PostReducer.isPostDeleted
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (postId) => dispatch(PostActions.fetchComments(postId)),
    deletePost: (postId) => dispatch(PostActions.deletePost(postId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailScreen);
