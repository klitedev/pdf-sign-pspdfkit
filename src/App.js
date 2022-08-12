import PdfViewerComponent from './components/PdfViewerComponent';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='PDF-viewer'>
        <PdfViewerComponent document={'Document.pdf'} />
      </div>
    </div>
  );
}

export default App;
