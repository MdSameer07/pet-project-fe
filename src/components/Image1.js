import React from 'react';
import { Image } from 'antd';
export const Image1 = (props) => (
  <Image
    width={props.width}
    height = {props.height}
    src={props.src}
    alt = {props.description}
  />
);