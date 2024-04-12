import logo from './logo.svg';
import './App.css';
import UploadImageToS3WithReactS3 from './UploadImageToS3WithReactS3';

function App() {
  return (
    <div className='root'>
      <header className='App-header'>   
      <UploadImageToS3WithReactS3 />
      </header>
    </div>
  );
}

export default App;
