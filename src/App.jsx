
import './App.css';
import DropFileInput from './components/drop-file-input/DropFileInput';

function App() {

  const onFileChange = (files) => {

    
    console.info('files'| files)
  }

  return (
    <div className='box'>
      <h2 className='header'>
        oneCarNow! Drag and Drop Component 😧 
      </h2>
      <DropFileInput onFileChange={(files)=> onFileChange(files)}/>
    </div>
  );
}

export default App;
