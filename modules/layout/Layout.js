import React from 'react'
import UI from 'editor-ui-lib'

export default class Layout extends React.Component {
    render () {
        return (
            <div>
                <hr className="divider-long"/>
                <UI.sectionDividerLabeled label="Some long text"/>
                <hr className="divider-long"/>

                <UI.toggleSwitch
                    wix-param="layout_show_winner"
                    label="Show winner combination"
                    defaultValue='{true}'>
                </UI.toggleSwitch>
            </div>
        )
    }
}
