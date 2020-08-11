import React from 'react'
import styled from '@emotion/styled'

const ContenedorFrase = styled.div`
    padding:3rem;
    border-radius:.5rem;
    background-color:#fff;
    max-width:900px;
    margin-top:10rem;

    @media (min-width:992px){
        margin-top:10rem
    }
    h1{
        font-family:Arial, Helvetica, sans-serif;
        text-align:center;
        position:relative;

        &::before{
            content:open-quote;
            font-size:10rem;
            color:black;
            position:absolute;
            left:-4rem;
            top:-3rem;
            margin-right:1rem;
        }
    }
    p{
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        font-size:1.6rem;
        text-align:right;
        color:#666;
        margin-top:2rem;
        font-weight:bold;
    }
`

const Frase = ({ frase }) => {
    if (Object.keys(frase).length === 0) return null;
    return (
        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p>- {frase.author}</p>
        </ContenedorFrase>
    )
}

export default Frase
