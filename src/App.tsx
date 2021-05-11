import React, { Fragment } from 'react'
import { observer } from 'mobx-react-lite';

import { GlobalStyles } from './globalStyles';
import { ToDo } from './components/ToDo';

export const App = observer(() => (
  <Fragment>
    <GlobalStyles />
    <ToDo/>
  </Fragment>
))