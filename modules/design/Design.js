import React from 'react'
var UI = require('editor-ui-lib');

export default class Design extends React.Component {
    render() {
        return (
            <div>
                <hr className="divider-long"/>
                <UI.sectionDividerLabeled label="Text & Background"/>
                <hr className="divider-long"/>

                <UI.fontAndColorPicker
                    title="Font style and color"
                    wix-param-font="design_titleFont"
                    wix-param-color="design_titleColor"
                    startWithColor="color-20"
                    startWithSize="40"
                    infoTitle="some info title"
                    infoText="some information text should be here"/>

                <hr className="divider-long"/>

                <UI.colorPickerSlider
                    title="Background"
                    wix-param="design_backgroundColor"
                    startWithColor="color-1"
                    startWithOpacity={1}/>

                <hr className="divider-long"/>


                <UI.colorPickerSlider
                    title="Cell border"
                    wix-param="design_cellBorderColor"
                    startWithColor="color-20"
                    startWithOpacity={1}/>

                <hr className="divider-long"/>
                <UI.sectionDividerLabeled label="Winner Bar"/>
                <hr className="divider-long"/>

                <UI.fontAndColorPicker
                    title="Winner font style and color"
                    wix-param-font="design_winnerFont"
                    wix-param-color="design_winnerColor"
                    startWithColor="color-20"
                    startWithTheme="font_5"
                    infoTitle="some info title"
                    infoText="some information text should be here"/>
            </div>
        )
    }
}
