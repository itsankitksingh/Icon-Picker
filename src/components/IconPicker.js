import React, { useState } from 'react';
import * as FiIcons from 'react-icons/fi';

const IconPicker = ({
  rowsInOnePage,
  columnsInOnePage,
  iconHeight,
  iconWidth,
  pickerHeight = 500,
  pickerWidth = 500
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const icons = Object.keys(FiIcons).map((key) => {
    const IconComponent = FiIcons[key];
    return <IconComponent key={key} style={{ width: iconWidth, height: iconHeight }} />;
  });

  const iconsPerPage = rowsInOnePage * columnsInOnePage;
  const paginatedIcons = icons.slice(
    currentPage * iconsPerPage,
    (currentPage + 1) * iconsPerPage
  );

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <div>
      {selectedIcon && (
        <div className="selected-icon">
          {selectedIcon}
        </div>
      )}
      <div className="icon-picker" style={{ width: pickerWidth, height: pickerHeight }}>
        <div className="icon-picker-header">
          <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0}>
            Previous
          </button>
          <span>Page {currentPage + 1}</span>
          <button onClick={() => setCurrentPage(currentPage + 1)} disabled={(currentPage + 1) * iconsPerPage >= icons.length}>
            Next
          </button>
        </div>
        <div
          className="icon-picker-icons"
          style={{
            gridTemplateRows: `repeat(${rowsInOnePage}, ${iconHeight}px)`,
            gridTemplateColumns: `repeat(${columnsInOnePage}, ${iconWidth}px)`
          }}
        >
          {paginatedIcons.map((icon) => (
            <div
              key={icon.key}
              className="icon-picker-icon"
              onClick={() => handleIconClick(icon)}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconPicker;
