import React from 'react';
import { TestimonioPrincipal } from './testimonios/TestimonioPrincipal';
import { ComponentCounter } from './componentCount/ComponentCounter';
import Counter from './contador/Counter';

const TestComponents = () =>{
  return(
    <React.Fragment>
      {/* <TestimonioPrincipal/> */}
      <ComponentCounter/>
      <Counter/>
    </React.Fragment>
  );
}

export default TestComponents;