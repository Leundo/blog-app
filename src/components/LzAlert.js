import React from 'react';
import '../styles/LzAlert.css';
import cn from 'classnames';

export default function LzAlert({
  className,
  text,
  type,
}) {
  return (
    <div className={cn('lz-alert', className, type)}>
      {text}
    </div>
  );
}
