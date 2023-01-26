import react from './images/react.png';
import Ruby from './images/Ruby.png';
import rails from './images/rails.png';
import github from './images/github.png';
import vscode from './images/Visual_Studio_Code.png';
import postgresql from './images/Postgresql.png';
import javascript from './images/javascript-3.png';
import html from './images/html.png';
import css from './images/CSS.png';
import postman from './images/postman.png';
import Bootstrap from './images/Bootstrap.png';
import npm from './images/npm.png';


function Skills(){
    return(
        <div className="skills-container" id='skills'>
        <h2 className='skills-title'>Skills. </h2>
        <div className='skills' >
            <div className='skill-1'>
                <img className='skills-logo' src={react} alt='pic'></img>
                <h4 className='skill-name'> React</h4>
            </div>
            <div className='skill-2'>
                <img className='skills-logo' src={Ruby} alt='pic'></img>
                <h4 className='skill-name'> Ruby</h4>
            </div>
            <div className='skill-3'>
                <img className='skills-logo' src={rails} alt='pic'></img>
                <h4 className='skill-name'> Ruby on Rails</h4>
            </div>
            <div className='skill-4'>
                <img className='skills-logo' src={github} alt='pic'></img>
                <h4 className='skill-name'> GitHub</h4>
            </div>
            <div className='skill-5'>
                <img className='skills-logo' src={vscode} alt='pic'></img>
                <h4 className='skill-name'> VSCode</h4>
            </div>
            <div className='skill-6'>
                <img className='skills-logo' src={postgresql} alt='pic'></img>
                <h4 className='skill-name'> Postgresql</h4>
            </div>
            <div className='skill-7'>
                <img className='skills-logo' src={javascript} alt='pic'></img>
                <h4 className='skill-name'> JavaScript</h4>
            </div>
            <div className='skill-8'>
                <img className='skills-logo' src={html} alt='pic'></img>
                <h4 className='skill-name'> HTML</h4>
            </div>
            <div className='skill-9'>
                <img className='skills-logo' src={css} alt='pic'></img>
                <h4 className='skill-name'> CSS</h4>
            </div>
            <div className='skill-10'>
                <img className='skills-logo' src={postman} alt='pic'></img>
                <h4 className='skill-name'> Postman</h4>
            </div>
            <div className='skill-11'>
                <img className='skills-logo' src={Bootstrap} alt='pic'></img>
                <h4 className='skill-name'> Boostrap</h4>
            </div>
            <div className='skill-12'>
                <img className='skills-logo' src={npm} alt='pic'></img>
                <h4 className='skill-name'> NPM</h4>
            </div>
        </div>
        </div>
    )
}

export default Skills;