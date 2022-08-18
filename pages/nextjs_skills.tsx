import ImageComponent from '../components/image-component'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Container from '../components/container'
import Intro from '../components/intro'
import styles from '../styles/nextjs_skills.module.scss'

export default function nextjs_skills() {

    return (
        <Layout>
            <Head>
                <title>Next.js Blog Example with {CMS_NAME}</title>
            </Head>
            <Container>
                <Intro />
                <div>
                    <img
                        className={styles.image}
                        src="/assets/small.jpg"
                        srcSet="/assets/small.jpg 640w,
                        /assets/medium.jpg 1280w"
                        sizes="(min-width: 520px) 640px, 
                        (min-width: 980px) 1280px"
                        alt="next task"
                    />
                    <ImageComponent />
                </div>
            </Container>
        </Layout>
    )
}
