import { Avatar, Typography } from 'antd';
import Image from 'next/image';
import React from 'react'
import { PlaceHolderCardStyle } from './style';



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






