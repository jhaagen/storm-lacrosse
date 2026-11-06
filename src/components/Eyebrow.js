import React from 'react';

function Eyebrow({ children, as: Tag = 'p' }) {
  return <Tag className="eyebrow">{children}</Tag>;
}

export default Eyebrow;
