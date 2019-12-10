import React from 'react';
import './BaseComponent.css';
import TopBar from '../Components/TopBarComponent/TopBarComponent';
import Menu from '../Components/MenuComponent/MenuComponent';
import { Route, Switch } from 'react-router-dom';
import All from './AllComponent/AllComponent';
import New from './NewComponent/NewComponent';
import Comments from './CommentsComponent/CommentsComponent';
import Ask from './AskComponent/AskComponent';
import Show from './ShowComponent/ShowComponent';
import Jobs from './JobsComponent/JobsComponent';
import Submit from './SubmitComponent/SubmitComponent';
import Search from './SearchResultComponent/SearchResultComponent';

export default class BaseComponent extends React.Component {
    render(){
        return(
            <div className="base">
                    <TopBar className="top-bar"></TopBar>

                    <Menu className="menu"></Menu>
                    
                    <Switch>
                        <Route path="/new">
                            <New></New>
                        </Route>
                        <Route path="/comments">
                            <Comments></Comments>
                        </Route>
                        <Route path="/ask">
                            <Ask></Ask>
                        </Route>
                        <Route path="/show">
                            <Show></Show>
                        </Route>
                        <Route path="/jobs">
                            <Jobs></Jobs>
                        </Route>
                        <Route path="/submit">
                            <Submit></Submit>
                        </Route>
                        <Route exact path="/search/:query">
                            <Search></Search>
                        </Route>
                        <Route path="/">
                            <All></All>
                        </Route>
                    </Switch>
            </div>
        );
    }
}
