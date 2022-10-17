import React from "react"

import {Container, Box, HeaderBox, Form} from "../styles/aluno"

import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {useAuth} from "../providers/AuthContext/index"


interface LoginProps {
    email: string
    password: string
}


const Login = () => {

    const {loginStudent} = useAuth()

    const loginSchema = yup.object().shape({
        email: yup.string().required("Campo Obrigatório").email("Email Inválido"),
        password: yup.string().required("Campo Obrigatório")
    })

    const {register, handleSubmit, formState: {errors}} = useForm<LoginProps>({
        resolver: yupResolver(loginSchema)
    })

    const onSubmit = (data: LoginProps) => {
        loginStudent(data)
    }

    return (
        <Container>
            <Box>
                <HeaderBox>
                    <h2>Login do Aluno</h2>
                </HeaderBox>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="inputBox">
                        <input type="text" placeholder="Email" id="email" {...register("email")}/>
                    </div>
                    <div className="inputBox">
                        <input type="password" placeholder="Password" id="password" {...register("password")}/>
                    </div>
                    <div className="applyForm">
                        <button type="submit">Acessar</button>
                    </div>
                </Form>
            </Box>
        </Container>
    )
}


export default Login