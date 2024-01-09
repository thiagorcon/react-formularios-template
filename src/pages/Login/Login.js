import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { irParaCadastro } from '../../Routes/coordinator'
import { ContainerForm, ContainerLogin, Input } from './styled'
import useForm from '../../hooks/useForm';

export default function Login() {

const { form, onChangeInputs, limparInputs} = useForm(
  {
  email: "",
  password : ""
}
);
 
  const navigate = useNavigate()



  const enviaLogin = (e) => {
    alert('funcionou')
    e.preventDefault()
    console.log({ form })
    limparInputs()
  }

  return (
    <ContainerLogin>
      <ContainerForm onSubmit={enviaLogin}>
        <label htmlFor='email'>Email:</label>
        <Input
          name='email' 
          id='email'
          value={form.email}
          onChange={onChangeInputs}
          placeholder="nome@email.com"
          type='email'
          required
        />
        <label htmlFor='senha'>Senha:</label>
        <Input
          id='senha'
          name='password'
          value={form.password}
          onChange={onChangeInputs}
          placeholder="Digite sua senha"
          type='password'
          required
          //pattern='[a-z]d{3}}'
          title='digite 3 numeros'
        />
        <button>Fazer Login</button>
      </ContainerForm>
      <button onClick={() => irParaCadastro(navigate)}>Ainda não tenho uma conta</button>
    </ContainerLogin>
  )
}
