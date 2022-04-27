import React, { Component } from 'react'
import Layout from '../components/layout'
import Link from 'next/link'

class instructions extends Component {
  render() {
    return (
      <Layout>
        <div className="App">
        <h1> Start Page - Robot driving task
        </h1>
        <p>You will see the following robot driving task:</p>
        <img src="Images/IntroImage.png" height={400} width={850}/>
        </div>
      
        <p>
          Your goal is to drive the robot through the doorway to the target cone given a time limit of 15 seconds.
          You will be given 20 trials with varying robot start poses, door configurations, and 3 noise levels (0 being no noise and 2 being highest noise).
          The noise will make the robot sometimes not drive exactly as you wish it to.
          The target cone position will remain fixed.
          Before each trial, you will be shown the world configuration and noise level, and asked how confident you are of succeeding in the task (on a scale of 1 to 3 with 3 being highly confident).
        </p>

        <p>
          You can drive the robot using the w (go forward), a (turn left), s (go back) and d (turn right) keys.
          The noise level and timer will be displayed to you during each driving trial.
        </p>


      <h2>
        <Link href="/">
          <a>Back to welcome page</a>
        </Link>
      </h2>

      <h2>
        <a href="http://localhost:8080">
          Proceed to driving tasks
        </a>
      </h2>

      </Layout>
      );
  }
}

export default instructions;