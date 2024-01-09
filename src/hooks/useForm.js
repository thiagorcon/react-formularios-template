import { useState } from "react";

export default function useForm(inicialState) {
     const [form,setForm] = useState(inicialState);

        const onChangeInputs = (event) =>{
          //setForm({...form, [event.target.name]: event.target.value})
          //abaixo opção desestruturando
           const {name,value} = event.target
           setForm({...form, [name] : value})
           //console.log(event.target);
        }

        function limparInputs() {
         setForm(inicialState)
        }

        return { form, onChangeInputs, limparInputs}

}