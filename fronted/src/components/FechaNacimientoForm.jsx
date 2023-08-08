import { useForm } from 'react-hook-form'

export const FechaNacimientoForm = ({ ...props }) => {

  const { register, handleSubmit,
    formState: {
      errors
    }
  } = useForm()

  console.log(errors);

  const onSubmit = handleSubmit((data) => {
    if (props.estado.formBirth === false) {
      props.estado.formBirth = true
      props.data.backend.fechaNacimiento = data.fechaNacimiento
      props.setEstado({ ...props.estado })
      props.setData({ ...props.data })

      // localStorage.setItem("fechaNacimiento", data.fechaNacimiento)
    }
  })

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col px-4 -mb-3">
        <input className='border-2 mt-1 rounded-sm bg-gray-200 border-slate-300 indent-1.5' type="date" {...register("fechaNacimiento", {
          required: {
            value: true,
            message: "Fecha de nacimiento es requerida"
          },
          validate: (value) => {
            console.log("value", value);
            const miFecha = new Date(value)
            const fechaActual = new Date()
            const edad = fechaActual.getFullYear() - miFecha.getFullYear()
            console.log("fechaActual", fechaActual.getFullYear());
            console.log("miFecha", miFecha.getFullYear());
            console.log("edad", edad);

            return edad >= 18 && edad < 100 || "Escoge una fecha valida, debes ser mayor de edad"
          }
        }
        )} />
        {errors.fechaNacimiento && <span className='text-red-600 text-sm'>{errors.fechaNacimiento.message}</span>}

      </div>
      <button></button>

    </form>
  )
}