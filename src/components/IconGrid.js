import React, { useState } from 'react';
import * as FiIcons from 'react-icons/fi';
import { IconContext } from 'react-icons';

const IconGrid = ({ rows, columns, iconHeight, iconWidth, onIconClick }) => {
    const icons = Object.keys(FiIcons).map(iconName => FiIcons[iconName]);
    const iconsPerPage = rows * columns;
    const [page, setPage] = useState(0);

    const handlePageChange = (direction) => {
        setPage(page + direction);
    };

    const currentIcons = icons.slice(page * iconsPerPage, (page + 1) * iconsPerPage);

    return (
        <IconContext.Provider value={{ size: iconHeight }}>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, ${iconWidth}px)`, gap: '10px' }}>
                {currentIcons.map((IconComponent, index) => (
                    <div key={index} onClick={() => onIconClick(IconComponent)}>
                        <IconComponent />
                    </div>
                ))}
            </div>
            <div>
                <button onClick={() => handlePageChange(-1)} disabled={page === 0}>Previous</button>
                <button onClick={() => handlePageChange(1)} disabled={(page + 1) * iconsPerPage >= icons.length}>Next</button>
            </div>
        </IconContext.Provider>
    );
};

export default IconGrid;
