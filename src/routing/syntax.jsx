import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <BrowserRouter>
                {/* It works */}
                <Route path="/posts" component={PostList} exact={false} />
                {/* This also works now */}
                <Route path="/posts/:postId" component={PostDetail} />
            </BrowserRouter>
        </div>
    );
}
