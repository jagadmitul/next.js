import ImageComponent from '../components/image-component'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Container from '../components/container'
import Intro from '../components/intro'

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
                        src="/assets/small.jpg"
                        srcSet="/assets/small.jpg 640w,
                        /assets/medium.jpg 1280w,
                        /assets/wind.jpg 1920w"
                        sizes="(min-width: 520px) 640px, 
                        (min-width: 980px) 1280px,
                        (min-width: 1920px) 1920px"
                        alt="next task"
                    />
                    <ImageComponent />
                </div>
            </Container>
        </Layout>
    )
}
