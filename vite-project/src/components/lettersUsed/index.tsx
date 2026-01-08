import style from "./style.module.css"
import { Letter } from "../letter/index"




export function LettersUsed(){
    return <div className={style.LettersUsed}>
        <h5>Letras usadas</h5>
        <div>
            <Letter value="R"/>
             <Letter value="A"/>
              <Letter value="I"/>
        </div>
    </div>
}