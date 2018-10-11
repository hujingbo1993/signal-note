import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      data:
        '{"blocks":[{"key":"82uft","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    };
  }

  onEditorStateChange = editorState => {
    console.log('state change', convertToRaw(editorState.getCurrentContent()));
    this.setState({
      editorState,
    });
  };

  saveState = () => {
    let rawState = convertToRaw(this.state.editorState.getCurrentContent());
    let d = JSON.stringify(rawState);
    this.setState({
      data: d,
    });
  };

  change = () => {};

  loadState = () => {
    console.log(this.state.data);
    let rawState = JSON.parse(this.state.data);
    let content = convertFromRaw(rawState);
    this.setState({
      editorState: EditorState.createWithContent(content),
    });
  };

  render() {
    const { editorState, data } = this.state;
    return (
      <div>
        <h1>编辑器</h1>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        <textarea value={data} onChange={this.change} />
        <button onClick={this.saveState}>save</button>
        <button onClick={this.loadState}>laod</button>
      </div>
    );
  }
}
