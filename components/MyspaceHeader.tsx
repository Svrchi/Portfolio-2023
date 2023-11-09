import React from 'react';

type Props = {};
type menuItem = string;

const MyspaceHeader = (props: Props) => {
  const menuItems: menuItem[] = [
    'Home',
    '|',
    'Search',
    '|',
    'Messages',
    '|',
    'Blog',
    '|',
    'Bulletins',
    '|',
    'Projects',
    '|',
    'Groups',
    '|',
    'About',
    '|',
    'Art',
  ];

  const renderMenu = () => {
    return menuItems.map((el, index) => {
      const isSeparator = el === '|';
      const key = `${el}-${index}`;
      const separator = 'text-black';

      // Return an li element for both content and separator, but differentiate by class or other attributes
      return (
        <li key={key} className={isSeparator ? 'separator' : 'menu-item'}>
          {isSeparator ? <span className='text-black'>{el}</span> : el}
        </li>
      );
    });
  };

  return (
    <div className='h-8 w-full bg-myspace-blue '>
      <menu className='flex items-center justify-evenly pl-2 pr-2'>
        {renderMenu()}
      </menu>
    </div>
  );
};

export default MyspaceHeader;
