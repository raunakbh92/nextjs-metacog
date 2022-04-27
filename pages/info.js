import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function infosheet() {
  return (
    <Layout>
      <Head>
        <title>Information Sheet</title>
      </Head>
      <h1>Participant information sheet - Online studies of metacognition in 
      		human-robot collaboration</h1>
      <p>
      	This study has been approved by the Oxford Research Ethics Committee; 
      		Project ID Number: <strong>R80134 RE001</strong>
      </p>

      <p>
      	You are being invited to take part in a research study.  
      	Before you decide to take part it is important for you to understand why the 
      	research is being done and what participation will involve.  
      	Please take time to read the following information carefully and discuss 
      	it with others if you wish.  Please ask us if there is anything that is 
      	not clear or if you would like more information by contacting 
      	us at nick.hawes@eng.ox.ac.uk. Please take time to decide whether or 
      	not you wish to take part.
      </p>

      <p><strong>What is the purpose of the research?</strong></p>

			<p>
        We are interested in how people make decisions when operating a robot. 
				This study aims to improve our understanding of these processes by asking 
				volunteers to perform simple computer-based tasks that involves them driving
				a robot in simulation.
			</p>

      <p>
        Specifically, in this study, we are trying to understand the role of estimates of self-confidence
        when driving the robot. Subsequently, this study will be taken forward to understand the
        role of estimates of self-confidence in delegating the driving task to the autonomous robot in
        certain situations.
      </p>

      <p>
        We will not be storing any of your personal information. 
        The data we obtain from this experiment will be anonymous.
      </p>

      <h2>
        <Link href="/startpage_perceptual">
          <a>Proceed</a>
        </Link>
      </h2>

    </Layout>
    )
}