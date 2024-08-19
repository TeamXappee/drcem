"use client"
import "./readonly.scss";
import { EditorContent, useEditor } from "@tiptap/react";
import React, { useEffect } from "react";
import { defaultExtensions } from "./extensions";

export default function ReadonlyEditor({ content }: { content: string }) {
  const editor = useEditor({
    extensions: [...defaultExtensions],
    content,
    editable: false,
  });

  useEffect(() => {
    if (editor && content) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  if (!editor) {
    return null;
  }

  return <EditorContent editor={editor} />;
}
