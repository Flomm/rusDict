import React from 'react';
import { GlobState } from './components/context';
import { Wrapper } from './components/wrapper';

export const App = () => {
  return (
    <GlobState>
      <Wrapper></Wrapper>
    </GlobState>
  );
};
