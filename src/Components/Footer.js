import React, {Component} from "react"
import styled from "styled-components"

const Rodape = styled.p`
    font-size: 1rem;
    position: fixed;
    text-align: center;
    top: 95vh;
    width: 100%;
`

export default class Footer extends Component{
    render(){
        return(
            <>
                <Rodape>{this.props.rodape}</Rodape>
            </>
        )
    }
}