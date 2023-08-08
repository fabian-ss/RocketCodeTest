import { useForm } from 'react-hook-form'

export const ContactoForm = ({ ...props }) => {

  const { register, handleSubmit,
    formState: {
      errors
    }
  } = useForm()

  console.log(errors);

  const onSubmit = handleSubmit((data) => {

    if (props.estado.formContato === false && data.telefono !== '') {
      props.data.backend.email = data.correo
      props.data.backend.telefono = data.telefono
      props.estado.formContato = true
      props.setEstado({ ...props.estado })
      props.setData({ ...props.data })
    }
  })

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col px-4 pt-2">
        <input type="email" className='border-2 mt-1 bg-gray-200 border-slate-300 first-letter:rounded-sm indent-1.5 p-1' placeholder="Correo electrónico" {...register("correo", {
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
        {errors.correo && <span className='text-red-600 text-sm'>{errors.correo.message}</span>}

        <input type="number" className='border-2 mt-1 bg-gray-200 border-slate-300 rounded-sm indent-1.5 p-1' placeholder="teléfono" {...register("telefono", {
          minLength: {
            value: 10,
            message: "No puede se menor de 10 digitos"
          },
          maxLength: {
            value: 10,
            message: "No puede exeder de 10 digitos"
          },
        })} />
        {errors.telefono && <span className='text-red-600 text-sm'>{errors.telefono.message}</span>}

      </div>

      <button type='submit'></button>
    </form>

  )
}