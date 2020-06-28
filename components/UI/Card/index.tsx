import React from 'react';
import { HeaderTwo } from '../Typography';
import AsyncImage from '../AsyncImage';

type CardProps = { title: string; image?: string; actions?: React.ReactNode };

const Card: React.FC<CardProps> = ({ children, title, image, actions }) => (
  <div className="bg-white rounded-lg shadow-xl">
    {image && (
      <div className="bg-gray-400 rounded-t-lg">
        <AsyncImage
          className="object-cover rounded-t-lg h-48 w-full"
          src={image}
          alt={title}
        />
      </div>
    )}
    <div className="p-6 pb-0">
      <HeaderTwo>{title}</HeaderTwo>
      {children}
    </div>
    {actions && <div className="p-6 pt-0 mt-4">{actions}</div>}
  </div>
);

export default Card;
