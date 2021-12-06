import './App.css';
import { Switch, Route } from 'react-router';
import UseState from './UseState';
import ComponentDidMount from './ComponentDidMount';
import Navigation from '../layout/Navigation';
import ComponentDidUpdate from './ComponentDidUpdate';
import ComponentWillUnmount from './ComponentWillUnmount';
import Params from './Params';
import Form from './Form';

const App = () => {
  return (
    <>
      <Navigation />

      <main>
        <Switch>
          <Route exact path="/state" render={() => <UseState />} />
          <Route path="/didMount" render={() => <ComponentDidMount />} />
          <Route path="/didUpdate" render={() => <ComponentDidUpdate />} />
          <Route path="/willUnmount" render={() => <ComponentWillUnmount />} />
          <Route path="/params/:name" render={() => <Params />} />
          <Route path="/form" render={() => <Form />} />
        </Switch>
      </main>
    </>
  );
}

export default App;
