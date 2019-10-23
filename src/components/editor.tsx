import React from 'react'
import Editor from 'for-editor'

import { EditorState } from '../types/editor'

export const ContentEditor: React.FC<EditorState> = ({
  editorState,
  setEditorState,
}) => {
  return <Editor language='en' value={editorState} onChange={setEditorState} />
}
