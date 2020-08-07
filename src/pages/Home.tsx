import React from 'react';
import {Graphistry} from '@graphistry/client-api-react';
import '@graphistry/client-api-react/assets/index.less';
//1000 node data - use together
import mockData from '../data/MOCK_DATA';
import mockEdgeData from '../data/MOCK_DATA_EDGE';

//demoData - use together
import demoNode from '../data/graphistry-node';
import demoEdges from '../data/graphistry-edges';

//mlData = use together
import mlNodeData from '../data/ml-node';
import mlEdgeData from '../data/ml-edges';

const Home = () => {

  return (
    <Graphistry backgroundColor='#fff'
                showSplashScreen={true}
                showPointsOfInterest={false}
                apiKey='<your API Key here>'
                style={{ border: `1px solid #ccc`, height: '600px' }}
                graphistryHost='https://labs.graphistry.com'
                nodes={demoNode}
                edges={demoEdges}
                bindings={{
                    idField: 'nodeId',
                    sourceField: 'src',
                    destinationField: 'dst',
                }}/>
  );
}

export default Home;