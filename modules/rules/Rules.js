import React from 'react'
import UI from 'editor-ui-lib'

export default class Rules extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <hr className="divider-long"/>
                <UI.sectionDividerLabeled label="Some long text"/>
                <hr className="divider-long"/>

                <UI.toggleButtons
                    options={[{ value: '0', label: 'X'}, { value: '1', label: 'O' }]}
                    defaultValue="0"
                    wix-param="rules_player"
                    title="Who plays first?"
                    infoText="info content"
                    infoTitle="info title">
                </UI.toggleButtons>
            </div>
        )
    }
}
