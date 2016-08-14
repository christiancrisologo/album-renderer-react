import React from 'react';
import {render} from 'react-dom';

import Album from './components/Album';

let url = "https://jsonplaceholder.typicode.com/albums/";

render((    
      <Album url={url}  />         

), document.getElementById('app'))

 