import React, { Component } from 'react'
import Layout from '../components/layout'
import Link from 'next/link'

class vid2elimspammers extends Component {
  render() {
    return (
      <Layout>
        <div className="App">
        <h1> Eliminate Spammers
        </h1>
        <p>Please play the video and answer the following question</p>
        <video width="750" height="500" controls >
        <source src="/Videos/video.mp4" type="video/mp4"/>
        </video>
        </div>
      
      <h2>
        <Link href="/">
          <a>Home</a>
        </Link>
      </h2>

      <h2>
        <a href="http://localhost:8080">
          Let's drive the robot
        </a>
      </h2>

      </Layout>
      );
  }
}

export default vid2elimspammers;