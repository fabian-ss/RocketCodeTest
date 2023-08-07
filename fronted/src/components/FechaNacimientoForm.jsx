import { useForm } from 'react-hook-form'

export const FechaNacimientoForm = () => {

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
        <input type="date" {...register("fechaNacimiento", {
          required: {
            value: true,
            message: "Fecha de nacimiento es requerida"
          },
          validate: (value) => {
            console.log("value",value);
            const miFecha = new Date(value)
            const fechaActual = new Date()
            const edad = fechaActual.getFullYear() - miFecha.getFullYear()
            console.log("fechaActual",fechaActual.getFullYear());
            console.log("miFecha",miFecha.getFullYear());
  
            console.log("edad",edad);
  
            return edad >= 18 && edad < 100 || "Escoge una fecha valida, debes ser mayor de edad"
          }
        }
        )} />
        {errors.fechaNacimiento && <span>{errors.fechaNacimiento.message}</span>}
        <button></button>
  
      </form>
    )
  }