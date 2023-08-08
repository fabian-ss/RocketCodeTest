import { useForm } from 'react-hook-form'

export const NombreForm = ({...props}) => {
    const { register, handleSubmit,
      formState: {
        errors
      }
    } = useForm()

    const onSubmit = handleSubmit((data) => {
      if(props.estado.formName === false){
        props.data.backend.nombre = data.nombre
        props.data.backend.segundoNombre = data.segundoNombre
        props.data.backend.apellidoPaterno = data.apellidoPaterno
        props.data.backend.apellidoMaterno = data.apellidoMaterno
        props.estado.formName = true
        props.setEstado({...props.estado})
        props.setData({...props.data})
      }
    })

    return (

      <form onSubmit={onSubmit}>
        <div className="flex flex-col px-4 ">
          <input className='border-2 mt-1 rounded-sm indent-1.5 p-1 bg-gray-200 border-slate-300' type="text" placeholder="Nombre" {...register("nombre", {
            required: {
              value: true,
              message: "Nombre es requerido"
            },
            minLength: {
              value: 2,
              message: "Este campo debe tener más de 2 letras"
            },
            maxLength: {
              value: 25,
              message: "No puede exeder de 25 caracteres"
            },
            pattern: {
              value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
              message: "Solo se admiten letras"
            },

          })} />
          {errors.nombre && <span className='text-red-600 text-sm'>{errors.nombre.message}</span>}

        <input className='border-2 mt-1 rounded-sm indent-1.5 p-1 bg-gray-200 border-slate-300' type="text" placeholder='Segundo nombre' {...register("segundoNombre", {
          maxLength: {
            value: 25,
            message: "No puede exeder de 25 caracteres"
          },
          pattern: {
            value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
            message: "Solo se admiten letras"
          },
        })} />
        {errors.segundoNombre && <span className='text-red-600 text-sm'>{errors.segundoNombre.message}</span>}

        <input className='border-2 mt-1 rounded-sm indent-1.5 p-1 bg-gray-200 border-slate-300' type="text" placeholder="Apellido paterno" {...register("apellidoPaterno", {
          required: {
            value: true,
            message: "Apellido paterno es requerido"
          },
          minLength: {
            value: 2,
            message: "Este campo debe tener más de 2 letras"
          },
          maxLength: {
            value: 25,
            message: "No puede exeder de 25 caracteres"
          },
          pattern: {
            value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
            message: "Solo se admiten letras"
          },
        })} />
        {errors.apellidoPaterno && <span className='text-red-600 text-sm'>{errors.apellidoPaterno.message}</span>}

        <input className='border-2 my-1 rounded-sm indent-1.5 p-1 bg-gray-200 border-slate-300' type="text" placeholder="Apellido materno" {...register("apellidoMaterno", {
          required: {
            value: true,
            message: "Apellio materno es requerido"
          },
          minLength: {
            value: 2,
            message: "Este campo debe tener más de telefono2 letras"
          },
          maxLength: {
            value: 25,
            message: "No puede exeder de 25 caracteres"
          },
          pattern: {
            value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
            message: "Solo se admiten letras"
          },
        })} />
        {errors.apellidoMaterno && <span className='text-red-600 text-sm'>{errors.apellidoMaterno.message}</span>}
        <button></button>
      </div>
      </form>
    )
  }
