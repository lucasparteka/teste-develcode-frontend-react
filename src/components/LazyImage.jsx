import ImageLoader from 'react-load-image';
import {Spin} from "antd"

const LazyImage = ({src}) => {
    return (
        <ImageLoader src={src}>
            <img className="pick-avatar"/><div>Error!</div>
            <Spin tip="Buscando..."/>
        </ImageLoader>
    )
}

export default LazyImage;