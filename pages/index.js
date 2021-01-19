import { useState } from 'react';
import { Button, Badge} from '@material-ui/core';
import DoneAllIcon from '@material-ui/icons/Done';

function Home() {
    return (
    <html>
        <head>
        <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        </head>    
        <body style={{fontFamily:'Roboto'}}>
            <div>Now it's updated. <a href="/contato">Contato</a>
                <Contador />
            </div>
        </body>
    </html>
    )
}

function Contador() {
    const [contador,setContador] = useState(0);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>
                <Badge badgeContent={contador} color="primary">
                    <DoneAllIcon />
                </Badge>
            </div>
            <Button variant="contained" color="primary" onClick={adicionarContador}>Adicionar +1</Button>
        </div>
    )
}

export default Home
