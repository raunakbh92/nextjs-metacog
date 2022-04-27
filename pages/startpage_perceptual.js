import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function infosheet() {
  return (
    <Layout>
      <Head>
        <title>Startpage Perceptual</title>
      </Head>
      <h1>Start page - Perceptual Decision Making</h1>


      <p>
        In this section, you will be shown pairs of images and asked to decide which one
        has more dots. You will also be asked for your confidence estimate in the same.
      </p>

      <h2>
        <Link href="/metacognition-task-online/English/metacog_expt/experiment_momebis.html">
          <a>Proceed to Perceptual Decision Making Tasks</a>
        </Link>
      </h2>

    </Layout>
    )
}