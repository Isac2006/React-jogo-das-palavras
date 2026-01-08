import style  from "./style.module.css"



type Props={
    tip: string
}


export function Tip({tip}: Props){
    return <div className={style.tip}>
         <p className={style.icon}>dica</p>
        <div>
            <h3>dica</h3>
            <p>{tip}</p>

        </div>

{}
    </div>

}