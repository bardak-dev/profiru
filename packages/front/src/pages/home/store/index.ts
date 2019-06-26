import React         from 'react';
import useGlobalHook from 'use-global-hook';
import * as actions  from './actions';
import * as states   from './states';

const store=useGlobalHook(React,states,actions);
export default store;
