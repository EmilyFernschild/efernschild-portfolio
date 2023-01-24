import Header from './Header';
import Skills from './Skills';
import Demo from './Demo';
import Footer from './Footer';
import About from './About';
import portrait from './images/IMG_6479.jpg'

function App() {
  
  return (
    <div className="App">
      <Header/>
      <div className='intro'>
        <div className='portrait container'>
          <img className='portrait' src={portrait} alt="portrait"></img>
        </div>
        <div className='intro-words'>
          <h2>Emily Fernschild</h2>
          <h4>Software Engineer</h4>
        </div>
      </div>
      <About/>
      <Skills/>
      <Demo/>
      <Footer/>
    </div>
  );
}

export default App;