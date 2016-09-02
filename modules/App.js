import React from 'react'
import _ from 'lodash'
import Main from './main/Main'
import Design from './design/Design'
import Layout from './layout/Layout'
import Rules from './rules/Rules'
var UI = require('editor-ui-lib');
import './app.scss';

class App extends React.Component {
    changeTab (index) {
        this.refs.panelTabs.setActiveTab(index);
    }
    render () {
        return (
            <UI.appSettings>
                <UI.panelTabs ref="panelTabs" defaultTabIndex={0}>
                    <Main changeTab={(index)=>this.changeTab(index)} tab="Main" />
                    <Design tab="Design"/>
                    <Layout tab="Layout"/>
                    <Rules tab="Rules"/>
                    <hr className="divider-short"/>
                    <UI.button label="Upgrade" className="btn-upgrade-nav"/>
                </UI.panelTabs>
            </UI.appSettings>
        )
    }
}

export default App;
