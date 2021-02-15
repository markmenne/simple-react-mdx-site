import React, { memo } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import PostLoader from '../PostLoader';
import Posts from '../Posts';
import ErrorBoundary from './ErrorBoundary';


const RouteRequest = () => {


    return (
        <>
            <Router>
                <Switch>
                    <Route path='/post/*'>
                        <ErrorBoundary>
                            <PostLoader />
                        </ErrorBoundary>
                    </Route>
                    <Route exact={true} path='/'>
                        <Posts />
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
