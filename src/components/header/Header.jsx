import './Header.css';

export default function Header(){
    return(
        <>
         <div className="header-container">
            <h1>Rock Paper Scissors</h1>
            <p>Players deliver hand signals representing rock, paper, or scissors, with the outcome determined by these three rules: Rock wins against scissors, Scissors win against paper, Paper wins against rock.</p>
         </div>
        </>
    )
}