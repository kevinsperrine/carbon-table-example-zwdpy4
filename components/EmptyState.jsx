import React from 'react';
import Bee32 from '@carbon/icons-react/lib/bee/32';

const EmptyState = ({text}) => (
    <div className="empty-state">
        <Bee32/>
        <p>{text}</p>
    </div>
);

export default EmptyState;