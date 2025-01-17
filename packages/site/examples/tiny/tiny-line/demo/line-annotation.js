import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { TinyLine } from '@ant-design/charts';

const DemoTinyLine = () => {
  const data = [
    264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539, 243, 226, 192,
  ];
  const config = {
    height: 60,
    autoFit: false,
    data,
    smooth: true,
    tooltip: false,
    annotations: [
      // 平均值
      {
        type: 'line',
        start: ['min', 'mean'],
        end: ['max', 'mean'],
        text: {
          content: '平均值',
          offsetY: -2,
          style: {
            textAlign: 'left',
            fontSize: 10,
            fill: 'rgba(44, 53, 66, 0.45)',
            textBaseline: 'bottom',
          },
        },
        style: {
          stroke: 'rgba(0, 0, 0, 0.25)',
        },
      },
      {
        type: 'line',
        start: ['min', 800],
        end: ['max', 800],
        text: {
          content: '目标值',
          offsetY: -2,
          style: {
            textAlign: 'left',
            fontSize: 10,
            fill: 'rgba(44, 53, 66, 0.45)',
            textBaseline: 'bottom',
          },
        },
        style: {
          stroke: 'rgba(0, 0, 0, 0.55)',
        },
      },
    ],
  };
  return <TinyLine {...config} />;
};

ReactDOM.render(<DemoTinyLine />, document.getElementById('container'));
