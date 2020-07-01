import React from 'react';
import AsyncImage from '../AsyncImage';

type CardProps = { title: string; image?: string; actions?: React.ReactNode };

const Card: React.FC<CardProps> = ({ children, title, image, actions }) => (
  <div className="bg-white rounded-lg shadow-xl">
    {image && (
      <div className="bg-gray-400 rounded-t-lg">
        <AsyncImage
          className="object-cover rounded-t-lg h-64 w-full"
          src={image}
          alt={title}
        />
      </div>
    )}
    <div className="p-6 pb-0">
      <h2 className="text-3xl font-semibold mb-6">{title}</h2>
      {children}
    </div>
    {actions && <div className="p-6 pt-0 mt-6">{actions}</div>}
  </div>
);

export default Card;
