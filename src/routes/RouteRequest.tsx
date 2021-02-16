import React, { memo } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import PostLoader from '../PostLoader';
import { POST_ROOT } from '../PostLoader/PostsConfig';
import Posts from '../Posts';
import ErrorBoundary from './ErrorBoundary';


const RouteRequest = () => {


    return (
        <>
            <Router>
                <Switch>
                    <Route exact={true} path={`${POST_ROOT}/`}>
                        <Posts />
                    </Route>
                    <Route exact={true} path='/'>
                        <Posts />
                    </Route>
                    <Route path={`${POST_ROOT}/*`}>
                        <ErrorBoundary>
                            <PostLoader />
                        </ErrorBoundary>
                    </Route>
                    <Route path='/'>
                        <div>Not a valid path</div>
                    </Route>
                </Switch>
            </Router>

        </>
    );
}

export default memo(RouteRequest);
