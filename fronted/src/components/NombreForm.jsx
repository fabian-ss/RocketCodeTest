import { useForm } from 'react-hook-form'

export const NombreForm = () => {
    const { register, handleSubmit,
      formState: {
        errors
      }
    } = useForm()

    const onSubmit = handleSubmit((data) => {
      console.log("formulario enviado", data);
    })

    return (
      <form onSubmit={onSubmit}>

        <input type="text" placeholder="Nombre" {...register("nombre", {
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
        {errors.nombre && <span>{errors.nombre.message}</span>}

        <input type="text" placeholder='Segundo nombre' {...register("segundoNombre", {
          maxLength: {
            value: 25,
            message: "No puede exeder de 25 caracteres"
          },
          pattern: {
            value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
            message: "Solo se admiten letras"
          },
        })} />
        {errors.segundoNombre && <span>{errors.segundoNombre.message}</span>}

        <input type="text" placeholder="Apellio paterno" {...register("apellidoPaterno", {
          required: {
            value: true,
            message: "Apellio paterno es requerido"
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
        {errors.apellidoPaterno && <span>{errors.apellidoPaterno.message}</span>}
        <input type="text" placeholder="Apellido materno" {...register("apellidoMaterno", {
          required: {
            value: true,
            message: "Apellio materno es requerido"
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
        {errors.apellidoMaterno && <span>{errors.apellidoMaterno.message}</span>}
        <button></button>
      </form>
    )
  }
