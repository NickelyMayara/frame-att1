import styled from "styled-components"

const cor = {
    ciano1: 'hsl(179, 62%, 43%)',
    verde: 'hsl(71, 73%, 54%)',
    cinzaClaro: 'hsl(204, 43%, 93%)',
    cinzaEscuro: 'hsl(218, 22%, 67%)'
}

export const Container2 = styled.section`
    display: flex;
`
export const TituloB1 = styled.h1`
    color: ${cor.ciano1};
    font-size: 27px;
    padding-top: 25px;
    font-weight: 800;
`

export const SubTituloB1 = styled.p`
    color: ${cor.verde};
    font-size: 17px;
    font-weight: 700;
`

export const TextoB1 = styled.p`
    color: ${cor.cinzaEscuro};
    font-weight: 600;
`

export const Bloco1 = styled.div`
    width: 700px;
    height: 200px;
    background-color: white;
    border-radius: 10px 10px 0px 0px;
    padding: 0px 50px;
    box-shadow: 0.1em 0.1em 0.8em #4f4e4e;
`
export const Bloco2 = styled.div`
    width: 300px;
    height: 200px;
    background-color: ${cor.ciano1};
    border-radius: 0px 0px 0px 10px;
    color: ${cor.cinzaClaro};
    padding: 50px;
`
export const TituloB2 = styled.h1`
    font-size: 18px;
`

export const Span = styled.span`
    font-size: 35px;
    font-weight: 700;
    color: white;
    margin-right: 10px;
`

export const SubTituloB2 = styled.p`
    font-size: 15px;
    display: flex;
    align-items: center;
`

export const TextoB2 = styled.p`
    font-size: 15px;
`

export const Botao = styled.button`
    margin-top: 15px;
    background-color: ${cor.verde};
    border: transparent;
    width: 300px;
    height: 50px;
    border-radius: 10px;
    box-shadow: 0.1em 0.1em 0.8em #4f4e4e;
    color: white;
    font-size: 16px;
    font-weight: 700;
`

export const Bloco3 = styled.div`
    width: 300px;
    height: 200px;
    align-items: start;
    background-color: ${cor.ciano1};
    opacity: 80%;
    border-radius: 0px 0px 10px 0px;
    color: ${cor.cinzaClaro};
    padding: 50px;
`