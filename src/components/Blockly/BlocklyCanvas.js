import React, { Component } from 'react';

import BlocklyComponent from './BlocklyComponent';
import { Category, Block, Value, Field, Shadow } from './index';
import BlocklyJS from 'blockly/javascript';

class BlocklyCanvas extends Component {

    constructor(props) {
        super(props);
        this.simpleWorkspace = React.createRef();
    }

    generateCode = () => {
        var code = BlocklyJS.workspaceToCode(
            this.simpleWorkspace.current.workspace
        );
        console.log(code);
    }

    render() {
        return (
            <div>
                <button onClick={this.generateCode}>Convert</button>
                <BlocklyComponent ref={this.simpleWorkspace} trashcan={true} media={'media/'}
                    move={{
                        scrollbars: true,
                        drag: true,
                        wheel: true
                    }}>
                    <Category name="Navigation" colour="0">
                        <Block type="logic_operation" />
                    </Category>
                    <Category name="Camera" colour="10">
                        <Block type="logic_operation" />
                    </Category>
                    <Category name="Flip" colour="20">
                        <Block type="logic_operation" />
                    </Category>
                    <Category name="Sensors" colour="30">
                        <Block type="logic_operation" />
                    </Category>
                    <Category name="Loops" colour="40">
                        <Block type="controls_repeat_ext">
                            <Value name="TIMES">
                                <Shadow type="math_number">
                                    <Field name="NUM">10</Field>
                                </Shadow>
                            </Value>
                        </Block>
                    </Category>
                    <Category name="Logic" colour="50">
                        <Block type="controls_if"></Block>
                        <Block type="logic_compare"></Block>
                        <Block type="logic_operation"></Block>
                    </Category>
                    <Category name="Variables" custom="VARIABLE" colour="60">
                        <Block type="logic_operation" />
                    </Category>
                    <Category name="Functions" custom="PROCEDURE" colour="70">
                        <Block type="logic_operation" />
                    </Category>
                </BlocklyComponent>
            </div>
        );
    }
}

export default BlocklyCanvas;