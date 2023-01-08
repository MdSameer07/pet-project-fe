import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input} from 'antd';

const { Search } = Input;

const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

export const SearchBar = () =>{
    return(
        <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      suffix={suffix}
      style = {{width:400}}
    />
    )
}