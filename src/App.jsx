import { useRef, useState } from 'react';
import './App.css'
import JoditEditor from 'jodit-react';

function App() {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  // const config = {
  //   readonly:false,
  //   placeholder: 'Write Your Blog',
  //   height: '400px'
  // }

  return (
    <main>
      <h1 className='font-sans text-2xl font-semibold text-center my-3'>Rich Text Editor</h1>
      <JoditEditor
        ref={editor}
        value={content}
        // config={config}
        onChange={newContent => setContent(newContent)}
        className='my-10'
      />
    </main>
  )
}

export default App
