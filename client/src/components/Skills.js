import react from './images/react.png';
import Ruby from './images/Ruby.png';
import rails from './images/rails.png';
import github from './images/github.png';
import vscode from './images/Visual_Studio_Code.png';
import postgresql from './images/Postgresql.png';
import javascript from './images/javascript.png';
import html from './images/HTML.png';
import css from './images/CSS.png';
import postman from './images/postman.png';
import Bootstrap from './images/Bootstrap.png';
import npm from './images/npm.png';


function Skills(){
    return(
        <div id='skills'>
            <h2>Skills </h2>
            <img src={react} alt='pic'></img>
            <h4> React</h4>
            <img src={Ruby} alt='pic'></img>
            <h4> Ruby</h4>
            <img src={rails} alt='pic'></img>
            <h4> Ruby on Rails</h4>
            <img src={github} alt='pic'></img>
            <h4> GitHub</h4>
            <img src={vscode} alt='pic'></img>
            <h4> VSCode</h4>
            <img src={postgresql} alt='pic'></img>
            <h4> Postgresql</h4>
            <img src={javascript} alt='pic'></img>
            <h4> JavaScript</h4>
            <img src={html} alt='pic'></img>
            <h4> HTML</h4>
            <img src={css} alt='pic'></img>
            <h4> CSS</h4>
            <img src={postman} alt='pic'></img>
            <h4> Postman</h4>
            <img src={Bootstrap} alt='pic'></img>
            <h4> Boostrap</h4>
            <img src={npm} alt='pic'></img>
            <h4> npm</h4>
        </div>
    )
}

export default Skills;