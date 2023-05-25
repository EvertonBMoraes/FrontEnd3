function Button({onClick, type, conteudo}) {
return(
 <button onClick={onClick} type={type}>{conteudo}</button>
)
}
export default Button;


