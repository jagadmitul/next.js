import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'
import styles from './image-component.module.scss'

export default function ImageComponent() {

    const [imagesUrl, setImagesUrl] = useState([])
    const [randomImageValue, setRandomImageValue] = useState(0)
    const [memoizedValue, setMemoizedValue] = useState([])

    useEffect(() => {
        const data = async () => {
            const images = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
            const imageJsonData = await images.json()
            setImagesUrl(imageJsonData)
        }
        data()
    }, [imagesUrl])

    const setRandomValue = () => {
        const randomValue = Math.floor(Math.random() * imagesUrl.length)
        setRandomImageValue(randomValue)
    }

    useMemo(() => {
        setMemoizedValue(imagesUrl[randomImageValue])
    }, [imagesUrl])

    const loaderProp = ({ src }) => {
        return src;
    }

    return (
        <div className={styles.container}>
            {memoizedValue ?
                <div className={styles.componentWrapper}>
                    <Image className={styles.image} src={memoizedValue.url} height={500} width={500} loader={loaderProp} />
                    <button className={styles.button} onClick={setRandomValue}>Change image</button>
                </div>
                :
                "Loading..."
            }
        </div>
    )
}
