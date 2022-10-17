import styled from "styled-components"


export const Container = styled.main `
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Box = styled.div `
    max-width: 400px;
    width: 100%;
    border-radius: 8px;
    padding: 5px;
    background-color: green;
    display: flex;
    flex-direction: column;
`

export const HeaderBox = styled.header `
    background-color: orange;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
`

export const Form = styled.form `
    width: 100%;
    padding: 15px;

    .inputBox {
        margin: 10px 0px;

        input {
            width: 100%;
            padding: 10px;            
        }
    }
    
    .applyForm {
        width: 100%;
        display: flex;
        justify-content: center;

        button {
            background-color: orange;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
        }
    }
`