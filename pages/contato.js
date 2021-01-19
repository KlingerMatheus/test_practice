function Contato(){
    return (<div>Eae Galera, volte  <a href="/index">Home</a>
            <Capslock texto="Klinger Matheus Vieira da Silva" /></div>)
}

function Capslock(props) {
    const value = props.texto
    const returnText = value.toUpperCase()

    return <p>{returnText}</p>
}

export default Contato