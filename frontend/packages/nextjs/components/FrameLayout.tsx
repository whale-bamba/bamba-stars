// components/FrameLayout.tsx
import React from 'react';

type FrameLayoutProps = {
  title: string;
  imageUrl: string;
};

const FrameLayout: React.FC<FrameLayoutProps> = ({ title, imageUrl }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={imageUrl} alt={title} />
      {/* Add more layout elements as needed */}
    </div>
  );
};

export default FrameLayout;