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
    occuptation: 'Doctor',
    active: true
  },
  {
    name: 'Jane',
    occuptation: 'Lawyer',
    active: true
  },
  {
    name: 'Jack',
    occuptation: 'Engineer',
    active: true
  },
  {
    name: 'Tom',
    occuptation: 'Developer',
    active: false
  },
  {
    name: 'Betty',
    occuptation: 'Surgeon',
    active: true
  },
  {
    name: 'Mary',
    occuptation: 'Driver',
    active: false
  },
  {
    name: 'Alex',
    occuptation: 'Nurse',
    active: true
  },
  {
    name: 'Paul',
    occuptation: 'Waiter',
    active: false
  }
];