import React from 'react'

export interface EditorState {
  editorState: string
  setEditorState: React.Dispatch<React.SetStateAction<string>>
}
