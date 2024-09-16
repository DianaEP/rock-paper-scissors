import './Header.css';

export default function Header(){
    return(
         <div className="header-container">
            <h1>Rock Paper Scissors</h1>
            <ul>Players deliver hand signals representing rock, paper, or scissors, with the outcome determined by these three rules:
                <li>Rock wins against scissors</li> 
                <li>Scissors win against paper</li> 
                <li>Paper wins against rock</li>
            </ul>
         </div>
    )
}