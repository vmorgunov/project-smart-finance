import React from 'react';

import {List, Item} from './ReportList.styled'

const ReportList = ({category}) => {
    return (
        <List>
            <Item>Item{category}</Item>
            <Item>Item{category}</Item>
            <Item>Item{category}</Item>
            <Item>Item{category}</Item>
        </List>
    )
}

export default ReportList;