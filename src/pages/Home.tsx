import React from 'react';
import { MLButton, MLAlert, MLPopover } from '@marklogic/design-system'

const Home = () => {

  return (
    <div>
      <MLButton data-testid="test">Test</MLButton>
    <MLAlert/>
    </div>
  );
}

export default Home;