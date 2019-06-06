import React from 'react'
import ChildListItem from '../components/childListItem';

// functional component has no state
const List = () => {
  const listItem = dummyData.map( (item, index) => {
    // mapping array of objects and returning jsx ChildListItem. Passing item as props
    // iterated items require unique key. Helps React diffing algorithm. Will throw warning in console without
    return(
      <ChildListItem item={item} key={index}/>
    )
  })
  return (
    <div>
      <h2>List</h2>
      <ul>
        {listItem}
      </ul>
    </div>
  );
}

export default List;

const dummyData = [
  {
    name: 'John',
    occupation: 'Doctor',
    active: true
  },
  {
    name: 'Jane',
    occupation: 'Lawyer',
    active: true
  },
  {
    name: 'Jack',
    occupation: 'Engineer',
    active: true
  },
  {
    name: 'Tom',
    occupation: 'Developer',
    active: false
  },
  {
    name: 'Betty',
    occupation: 'Surgeon',
    active: true
  },
  {
    name: 'Mary',
    occupation: 'Driver',
    active: false
  },
  {
    name: 'Alex',
    occupation: 'Nurse',
    active: true
  },
  {
    name: 'Paul',
    occupation: 'Waiter',
    active: false
  }
];