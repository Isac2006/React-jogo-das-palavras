import style from "./style.module.css"

type Props = {
  value?: string
  color?: "default" | "correct" | "wrong"
}

export function Letter({ value = "", color = "default" }: Props) {
  return (
    <div className={`
      ${style.letterBox} 
      ${color === "correct" ? style.letterCorrect : ""} 
      ${color === "wrong" ? style.letterWrong : ""}
    `}>
      <span>{value}</span>
    </div>
  )
}