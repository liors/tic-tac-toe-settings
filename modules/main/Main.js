import React from 'react'
import './main.scss'
var UI = require('editor-ui-lib');

export default class Main extends React.Component {
    render() {
        return (
            <div className="main-tab">
                <img className="app-logo" src="logo.svg" alt="app logo"/>
                <p className="app-description">
                    This is the Wix App settings demo.
                    <br/>
                    Please add a short description of your App + CTA for the main action.
                </p>
                <UI.button className="main-cta-btn" label="Main CTA" onClick={()=>this.props.changeTab(2)}/>
            </div>
        )
    }
}
