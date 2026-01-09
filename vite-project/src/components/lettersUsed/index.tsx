import style from "./style.module.css"
import { Letter } from "../letter/index"

export type LettersUsedProps = {
    value: string
    correct: boolean
}

export type Props = {
    data: LettersUsedProps[]
}

export function LettersUsed({ data }: Props) {
    return (
        <div className={style.LettersUsed}>
            <h5>Letras usadas</h5>
            <div>
                {/* Removi a letra "R" fixa para não confundir o jogo */}
                {
                    data.map(({ value, correct }, index) => (
                        <Letter 
                            key={index} // Importante adicionar key em listas
                            value={value} 
                            color={correct ? "correct" : "wrong"} 
                        /> // <-- Faltava fechar a tag e o parêntese
                    ))
                }
            </div>
        </div>
    )
}