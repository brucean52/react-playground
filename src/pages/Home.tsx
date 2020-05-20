import React from 'react';
import { MLButton, MLAlert, MLCheckbox, MLTable } from '@marklogic/design-system'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faColumns } from '@fortawesome/free-solid-svg-icons'

const columns = [
  {
    title: 'Property Name',
    dataIndex: 'propertyName',
    width: 200
  },
  {
    title: 'Type',
    dataIndex: 'type',
    width: 125
  },
  {
    dataIndex: 'identifier',
    width: 100,
  },
  {
    dataIndex: 'multiple',
    width: 100,
  },
  {
    dataIndex: 'sort',
    width: 75,
  },
  {
    dataIndex: 'facet',
    width: 100,
  },
  {
    dataIndex: 'advancedSearch',
    width: 150,
  },
  {
    dataIndex: 'pii',
    width: 75,
  },
  {
    title: 'Delete',
    dataIndex: 'delete',
    width: 75,
  },
  {
    title: 'Add',
    dataIndex: 'add',
    width: 75
  }
];


const dataSource = [
  {
    add: '',
    advancedSearch: '',
    key: 'customerId0',
    multiple: '',
    pii: '',
    type: 'integer',
    propertyName: 'customerId'
  },
  {
    add: 'Address',
    key: 'shipping2',
    type: 'Address',
    propertyName: 'shipping',
    children: [
      {
        add: '',
        advancedSearch: '',
        key: 'shipping20',
        multiple: '',
        pii: '',
        type: 'string',
        propertyName: 'street'
      },
      {
        add: 'Zip',
        key: 'zip1',
        type: 'Zip',
        propertyName: 'zip',
        children: [
          {
            add: '',
            advancedSearch: '',
            key: 'zip20',
            multiple: '',
            pii: '',
            type: 'string',
            propertyName: 'fiveDigit'
          }
        ]
      },
    ]
  }
]


const Home = () => {

  return (
    <div>
      <MLButton data-testid="test">Test</MLButton>
      <FontAwesomeIcon icon={faColumns} size="lg" />
      <MLTable
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
}

export default Home;