import React from 'react';
// functional component: no state
const ChildListItem = props => {
  // props are values or methods passed from parent. 
  const {name, occupation, active} = props.item;

  // in line css
  const listStyle = {
    textDecoration: 'line-through',
    color: '#888'
  }

  return (
      <li className='row'>
        {/* applying inline style */}
        <div style={active ? {} : listStyle}>
            {name}
            {occupation}
        </div>
        <div className={ active ? 'active' : 'not-active' }>
          <div>Active?</div>
        </div>
      </li>
  );
}

export default ChildListItem;