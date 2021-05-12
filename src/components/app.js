import React from 'react';
import Counter from './counter/counter';

const App = () => {
    return (
        <div>
            <Counter incLimit={2} />
        </div>
    );
}

export default App;