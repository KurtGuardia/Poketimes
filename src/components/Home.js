import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'

class Home extends Component {
    
    render () {
        console.log(this.props)
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="A Pokeball"></img>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title red-text">{post.title}</span>
                                <p>{post.body}</p>
                            </Link>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        );
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                <p>{postList}</p>
            </div>
        ) 
    }

}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)