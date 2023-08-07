import { useForm } from 'react-hook-form'

export const ContactoForm = () => {

    const { register, handleSubmit,
      formState: {
        errors
      }
    } = useForm()
  
    console.log(errors);
  
    const onSubmit = handleSubmit((data) => {
      console.log("formulario enviado", data);
    })
  
    return (
      <form onSubmit={onSubmit}>
  
        <input type="email" placeholder="Correo electrónico" {...register("correo", {
          required: {
            value: true,
            message: "El correo es requerido"
          },
          maxLength: {
            value: 100,
            message: "No puede exeder de 100 caracteres"
          },        
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Correo no valido"
          }
        })} />
        {errors.correo && <span>{errors.correo.message}</span>}
  
        <input type="number" placeholder="teléfono" {...register("telefono")} />
        <button type='submit'></button>
      </form>
  
    )
  }