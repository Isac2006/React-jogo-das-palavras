import style from "./style.module.css"

type Promps = React.ComponentProps<"input">

export function Input({...rest}: Promps){
    return <input type="text" className={style.input} {...rest}/>

}{}