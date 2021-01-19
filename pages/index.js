function Home() {
    return <div>Now it's updated. <lcase>GO TO:</lcase> <a href="/contato">Contato</a></div>
}

function lcase(props) {
    const value = props.children
    const valueLCase = value.toLowerCase()

    return <lcase>{valueLCase}</lcase>
}

export default Home
