/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components, no-unused-vars
function App() {
    return (
        <div>
            <BrowserRouter>
                {/* It works */}
                {/*eslint-disable-next-line no-undef, no-undef, no-undef */}
                <Route path="/posts" component={PostList} exact={false} />
                {/* This also works now */}
                {/*eslint-disable-next-line no-undef, no-undef, no-undef */}
                <Route path="/posts/:postId" component={PostDetail} />
            </BrowserRouter>
        </div>
    );
}
