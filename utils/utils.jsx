import React from 'react';
import {
    Help16,
    Activity16,
    ChartPopulation16,
    CrossTab16,
    Help16,
    Edit16,
    TrashCan16
} from "@carbon/icons-react";

export const getRandom = (min = 0, max = 1) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const randomName = () => {
  return btoa(Math.random()).slice(0, getRandom(6, 30));
}

export const randomIcon = (list) => {
  const iconList = list || [
    Help16,
    Activity16,
    ChartPopulation16,
    CrossTab16
  ];
  const random = getRandom(0, iconList.length);
  return React.createElement(iconList[random]);
}

export const generateSimpleList = (length = 0 ) => {
  const hierarchyData = [];
  for(let i = 0; i < 64; i++) {
    const data = {
      id: i,
      content: {
        value: randomName(),
        icon: randomIcon(),
        rowActions: [
          <Edit16 />,
          <TrashCan16 />
        ]
      },
      isSelectable: true,
    };
    hierarchyData.push(data);
  }
  return hierarchyData;
}

export const generateHierarchy = (levels = 0, depth = 0) => {
  depth -= 1;  
  const out = [];
  if (depth <= 0) return out;
  for (let i = 0; i <= levels; i += 1) {
    const nextlevels = Math.floor(Math.random() * (levels - 2 + 1) + 2);
    const data = {
        id: `${levels}.${depth}.${i}`,
        content: {
          value: randomName(),
          icon: randomIcon(),
          rowActions: [
            <Edit16 />,
            <TrashCan16 />
          ]
        },
        isSelectable: true,
      };
    data.children = generateHierarchy(nextlevels, depth);
    out.push(data);
  }
  return out;
};