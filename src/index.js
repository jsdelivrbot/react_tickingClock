import React from 'react';
import ReactDOM from 'react-dom';

import CurrentTime from './components/current_time';

const App = () => {
  return (
    <div>
      <CurrentTime />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
