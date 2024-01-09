import React, { useState } from 'react'
import { ContainerForm, ContainerSignup, Input } from './styled'
import useForm from '../../hooks/useForm'

export default function Signup() {

    const { form, onChangeInputs, limparInputs} = useForm(
        {
            nomeUsuario:'',
            email:'',
            senha:'',
            confirmaSenha:''
        }
    )

    

    const enviarCadastro = (event) => {
        //* EXTRA: validando a senha - ter certeza que o usuário sabe qual senha cadastrou
        event.preventDefault()
        if (form.senha === form.confirmaSenha) {
            alert('senhas cadastrada com sucesso')
            console.log({form})
            limparInputs()
        } else {
            alert('senhas diferentes')
            console.log({form})
    } 
    }
    return (
        <ContainerSignup>
            <ContainerForm onSubmit={enviarCadastro}>
                <label htmlFor='nome'>Nome de usuario:</label>
                <Input
                    id='nome'
                    name= 'nomeUsuario'
                    type='text'
                    required
                    pattern='a-zA-Zà-úÀ-Ú\s]'
                    value={form.nomeUsuario}
                    onChange={onChangeInputs}
                    placeholder="username"
                />
                <label htmlFor='email'>Email:</label>
                <Input
                    id='email'
                    name='email'
                    type='email'
                    required
                    pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'                    
                    value={form.email}
                    onChange={onChangeInputs}
                    placeholder="nome@email.com"
                />
                <label htmlFor='senha'>Senha:</label>
                <Input
                    id='senha'
                    name="senha"
                    type='text'
                    required
                    pattern='[1-9]\d{2}'
                    title='digite apenas tres numeros'
                    value={form.senha}
                    onChange={onChangeInputs}
                    placeholder="Crie sua senha"
                />
                <label htmlFor='confirma-senha'>Confirmação de senha:</label>
                <Input
                    id='confirma-senha'
                    name='confirmaSenha'
                    type='text'
                    required
                    pattern='[1-9]\d{2}'
                    title='digite apenas tres numeros'
                    value={form.confirmaSenha}
                    onChange={onChangeInputs}
                    placeholder="Confirme a senha"
                />
                <button type='submit'>Cadastrar</button>
            </ContainerForm>
        </ContainerSignup>
    )
} 
