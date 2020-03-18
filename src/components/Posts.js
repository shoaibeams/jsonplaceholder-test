import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux/posts/posts.actions'
import './Posts.scss'

export const Posts = ({ fetchPosts, posts }) => {
  useEffect(() => {
    fetchPosts()
  }, [posts ? posts.length : null])

  const getPostsForCurrentUser = posts => {
    if (posts) {
      return posts
        .filter(post => post.userId === 1)
        .map(post => (
          <li key={post.id}>
            <p>id: {post.id}</p>
            <p>userId: {post.userId}</p>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
            <div className="divider"></div>
          </li>
        ))
    } else {
      return <div>Loading</div>
    }
  }

  const getPostsForOtherUser = posts => {
    if (posts) {
      return posts
        .filter(post => post.userId !== 1)
        .map(post => (
          <li key={post.id}>
            <p>id: {post.id}</p>
            <p>userId: {post.userId}</p>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
            <div className="divider"></div>
          </li>
        ))
    } else {
      return <div>Loading</div>
    }
  }

  return (
    <div className="row">
      <div className="col s6" style={{ marginTop: '20px' }}>
        <h5 style={{ textDecoration: 'underline' }}> Current User</h5>
        <ul>{getPostsForCurrentUser(posts)}</ul>
      </div>
      {/* <div className="vertical-divider"></div> */}
      <div className="col s6" style={{ marginTop: '20px' }}>
        <h5 style={{ textDecoration: 'underline' }}> Other Users</h5>
        <ul>{getPostsForOtherUser(posts)}</ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts.data
})

export default connect(mapStateToProps, { fetchPosts })(Posts)

