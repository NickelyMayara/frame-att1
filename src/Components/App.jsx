import { Container2, Bloco1, Bloco2, Bloco3, TituloB1, SubTituloB1, TextoB1, TituloB2, Span, SubTituloB2, TextoB2, Botao } from '../Style/App'

const App = () => {
    return (
        <>
        <Bloco1>
            <TituloB1>Join our community</TituloB1>
            <SubTituloB1>30-day, hassle-free money back guarantee</SubTituloB1>
            <TextoB1>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</TextoB1>
        </Bloco1>
        <Container2>
            <Bloco2> 
                <TituloB2>Monthly Subscription</TituloB2>
                <SubTituloB2><Span>$29</Span> per month</SubTituloB2>
                <TextoB2>Full acess for less then $1 a day</TextoB2>
                <Botao>Sign Up</Botao>
            </Bloco2>
            <Bloco3>
                <h1>Why Us</h1>
                <p>Tutorials by industry experts Peer & expert code review Coding exercises Acces to our GitHub repos Community forum Flashcard decks New videos every week</p>
            </Bloco3>
        </Container2>
        </>
    )
}

export default App;