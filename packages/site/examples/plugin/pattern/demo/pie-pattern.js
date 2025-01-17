import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/charts';

const DemoPie = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
  ];

  const pattern = ({ type }) => {
    if (type === '分类一') {
      return {
        type: 'dot',
      };
    } else if (type === '分类二') {
      return {
        type: 'square',
      };
    } else if (type === '分类三') {
      return {
        type: 'line',
      };
    }

    return {
      type: 'dot',
    };
  };

  const config = {
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.5,
    legend: false,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
    },
    pieStyle: {
      lineWidth: 2,
    },
    pattern,
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};

ReactDOM.render(<DemoPie />, document.getElementById('container'));
