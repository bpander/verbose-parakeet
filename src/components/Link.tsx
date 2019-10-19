import React from 'react';

interface LinkProps {
  active: boolean;
  onClick: () => void;
}

const Link: React.FC<LinkProps> = ({ active, children, onClick }) => (
    <button
       onClick={onClick}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
    >
      {children}
    </button>
);

export default Link;
