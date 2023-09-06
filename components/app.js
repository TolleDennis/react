import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ImageUpload from './components/ImageUpload';
import PictureList from './components/PictureList';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/upload" component={ImageUpload} />
                    <Route path="/pictures" component={PictureList} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
