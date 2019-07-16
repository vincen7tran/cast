import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import StreamCreate from '../components/streams/StreamCreate';
import StreamEdit from '../components/streams/StreamEdit';
import StreamDelete from '../components/streams/StreamDelete';
import StreamList from '../components/streams/StreamList';
import StreamShow from '../components/streams/StreamShow';



const App = () => {
  return (
    <div>
      <BrowserRouter>
       <div>
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" component={StreamCreate} />
        <Route path="/streams/edit" component={StreamEdit} />
        <Route path="/streams/delete" component={StreamDelete} />
        <Route path="/streams/show" component={StreamShow} />
       </div>
      </BrowserRouter>
    </div>
  );
};

export default App;