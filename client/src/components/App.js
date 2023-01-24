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
          <h2 className='hello'> hello, <br/><span className='name-intro'>my name is</span></h2>
          <h1 className='name'>Emily Fernschild</h1>
          <h3>I'm a Software Engineer</h3>
        </div>
      </div>
      <About/>
      <Demo/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;