import { useForm } from "../Hooks/useForm";

export const FormWithCustomHook = () => {

  const { formState, onInputChange, username, email, password, onResetForm} = useForm(
    {
      username: '',
      email: '',
      password: '',
    }
  );

  //const { username, email, password} = formState; la desestructuración se coloca en el useForm.js

  return (
    <>
        <h1>Formulario con Custom Hook</h1>
        <hr/>

        <input 
            type="text" 
            className="form-control"
            placeholder="Username"
            name="username" 
            value={username}
            onChange = {onInputChange}
        />

        <input 
            type="email" 
            className="form-control mt-5"
            placeholder="fernando@google.com"
            name="email" 
            value={email}
            onChange = {onInputChange}
        />

        <input 
            type="password" 
            className="form-control mt-5"
            placeholder="contraseña"
            name="password" 
            value={password}
            onChange = {onInputChange}
        />

        <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>  {/* CLASE 124 */} 

    </>
  )
}
