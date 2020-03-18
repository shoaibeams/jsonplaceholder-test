import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux/posts/posts.actions'

export const Posts = ({ fetchPosts, posts }) => {
  useEffect(() => {
    fetchPosts()
  }, [posts ? posts.length : null])

  const filterPostsById = (posts, id) => {
    if (posts) {
      if (id === 1) {
        return posts
          .filter(post => post.userId === 1)
          .map(post => renderPost(post))
      } else {
        return posts
          .filter(post => post.userId !== 1)
          .map(post => renderPost(post))
      }
    } else {
      return <div>Loading</div>
    }
  }

  const renderPost = post => {
    return (
      <li key={post.id}>
        <p>id: {post.id}</p>
        <p>userId: {post.userId}</p>
        <h5>{post.title}</h5>
        <p>{post.body}</p>
        <div className="divider"></div>
      </li>
    )
  }
  

  const renderPosts = (posts, title, id = 0) => {
    return (
      <div className="col s6" style={{ marginTop: '20px' }}>
        <h5 style={{ textDecoration: 'underline' }}>{title}</h5>
        <ul>{filterPostsById(posts, id)}</ul>
      </div>
    )
  }

  return (
    <div className="row">
      {renderPosts(posts, 'Current User', 1)}
      {renderPosts(posts, 'Other Users')}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts.data
})

export default connect(mapStateToProps, { fetchPosts })(Posts)
