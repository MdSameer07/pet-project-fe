import React from 'react';
import { Image } from 'antd';

export const ImageComponent = (props) => (
  <Image
    width={props.width}
    height={props.height}
    src={props.src}
    alt={props.description}
  />
);