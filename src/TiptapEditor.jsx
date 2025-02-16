import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit], // 기본 기능들 추가
    content: '<p>여기에 글을 입력하세요...</p>',
  });

  if (!editor) {
    return null; // 에디터가 로드되기 전에는 아무것도 표시하지 않음
  }

  return (
    <div className="border p-4">
      <EditorContent editor={editor} />
    </div>
  );
};

export default TiptapEditor;
