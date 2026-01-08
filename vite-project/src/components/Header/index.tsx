import logo from "../../assets/react.svg"
import style from "./style.module.css"

type Props = {
  current: number
  max: number
  onRestart: () => void
}

export function Header({ current, max, onRestart }: Props) {
  return (
    <div className={style.conteiner}>
      <header>
        <span>
          <strong>{current}</strong> de {max} tentativas
        </span>

        <button type="button" onClick={onRestart}>
          reiniciar
        </button>
      </header>

      <img src={logo} alt="logo" />
    </div>
  )
}
