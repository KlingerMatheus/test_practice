function Home() {
    return <div>Now it's updated. <lcase>go to:</lcase> <a href="/contato">Contato</a></div>
}

function Capslock(props) {
    const value = props.children
    const valueLCase = value.toUpperCase()

    return <Capslock>{valueLCase}</Capslock>
}

export default Home
