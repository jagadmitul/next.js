import markdownStyles from './markdown-styles.module.css'

type Props = {
    apiData: any[]
}

const BottomPostApiData = ({ apiData }: Props) => {
    return (
        <div className="max-w-2xl mx-auto">
            <div className={markdownStyles['markdown']}>
                {
                    apiData.map((item, index) => (
                        <p key={index}>{item.title}, ({item.id})</p>
                    ))
                }
            </div>
        </div>
    )
}

export default BottomPostApiData
