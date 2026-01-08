import style from "./style.module.css"

type Props = {
  value?: string
}

export function Letter({ value = "" }: Props) {
  return (
    <div className={style.letterBox}>
      <span>{value}</span>
    </div>
  )
}
