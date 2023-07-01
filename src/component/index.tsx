import { Typography } from 'antd';
import Image from 'next/image';
import React from 'react'
import { PlaceHolderCardStyle,  ServiceCardStyle} from './style';



export const PlaceHolderCards = ({ header, text, img }: { header: string; text: string, img: HTMLImageElement }) => {
    const { Title } = Typography;
    return (
        <PlaceHolderCardStyle>
              <div className="img">
                <Image src={img} alt='user' />
                </div>
                <Title level={5}>{header}</Title>
                <p>{text}</p>
           
        </PlaceHolderCardStyle>
    )
}

export const ServiceCards = ({ header, text, img, bg, color, img2 }: { img2: HTMLImageElement, bg?: string, color?: string, header: string; text: string, img: HTMLImageElement }) => {
    const { Title } = Typography;
    return (
        <ServiceCardStyle>
              <div className="img">
                <Image src={img} alt='user' />
                </div>
                <div className="cardBody" style={{color: color, backgroundColor: bg}}>
                {img2 && (<Image src={img2} alt='user' />)}
                <Title level={4} style={{color: color, backgroundColor: bg}}>{header}</Title>
                <p>{text}</p>
                </div>
           
        </ServiceCardStyle>
    )
}






