import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'
import Loadable from 'react-loadable';
import Loading from  './components/loading/loading';

import './App.css';

const Home = Loadable({
    loader: () => import('./components/home/home'),
    loading: Loading
});
const Topics = Loadable({
    loader: () => import('./components/topics/topics'),
    loading: Loading
});
const Settings = Loadable({
    loader: () => import('./components/settings/settings'),
    loading: Loading
});

/*
class DynamicImport extends Component {
    state = {
        component: null
    }
    componentWillMount () {
        this.props.load()
            .then((component) => {
                this.setState(() => ({
                    component: component.default
                        ? component.default
                        : component
                }))
            })
    }
    render() {
        return this.props.children(this.state.component)
    }
}
const Home = (props) => (
    <DynamicImport load={() => import('./components/home/home')}>
        {(Component) => Component === null
            ? <p>Loading</p>
            : <Component {...props} />}
    </DynamicImport>
)
const Topics = (props) => (
    <DynamicImport load={() => import('./components/topics/topics')}>
        {(Component) => Component === null
            ? <p>Loading</p>
            : <Component {...props} />}
    </DynamicImport>
)
const Settings = (props) => (
    <DynamicImport load={() => import('./components/settings/settings')}>
        {(Component) => Component === null
            ? <p>Loading</p>
            : <Component {...props} />}
    </DynamicImport>
)
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/topics'>Topics</Link></li>
                        <li><Link to='/settings'>Settings</Link></li>
                    </ul>
                    <hr />
                    <Route exact path='/' component={Home} />
                    <Route path='/topics' component={Topics} />
                    <Route path='/settings' component={Settings} />
                </div>
            </Router>
        )
    }
}
*/

class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <header>
                        <div className="nav">
                            <Link to='/'>Home</Link>
                            <Link to='/topics'>Topics</Link>
                            <Link to='/settings'>Settings</Link>
                        </div>
                    </header>
                    <Route exact path='/' component={Home} />
                    <Route path='/topics' component={Topics} />
                    <Route path='/settings' component={Settings} />
                </div>
            </Router>
        )
    }
}

export default App