import React, { useState } from 'react'
import { ContactoForm } from '../components/ContactoForm'
import { NombreForm } from '../components/NombreForm'
import { FechaNacimientoForm } from '../components/FechaNacimientoForm'
import formLogo from '../assets/form4.svg'
import userImage from '../assets/user.png'
import reloj from '../assets/reloj.svg'
import axios from 'axios'


function ChatForm() {

  const [estado, setEstado] = useState({
    formName: false,
    formBirth: false,
    formContato: false,
  })

  const [data, setData] = useState({
    active: false,
    backend: {
      nombre: "",
      segundoNombre: "",
      apellidoMaterno: "",
      apellidoPaterno: "",
      fechaNacimiento: "",
      email: "",
      telefono: ""
    },
  })
  const seeAllData = () => {
    if (estado.formName && estado.formBirth && estado.formContato) {
      data.active = true
      setData({ ...data })
    }

    registerForm().then(() => {
      alert("Registro creado con exito")
    }).catch(() => {
      alert("No se pudo crear el registro")
    })
  }

  const registerForm = async () => {
    const res = await axios.post(import.meta.env.VITE_URLFORM, data.backend)
    return res
  }

  return (
    <div className='flex flex-col w-full bg-white-400 justify-center items-center my-4 '>

      <div className='bg-[#F174DC] flex justify-between w-11/12 max-w-[20rem] '>

        <div className='ml-5'>
          <h1 className='font-bold py-4'>
            Titulo del formulario
          </h1>
          <div className='flex'>

            <img src={reloj} alt="logo" width={15} height={15} className='mb-4 mx-3' />

            <h3 className='text-sm pb-4 font-semibold'>
              En menos de 5 min
            </h3>

          </div>

        </div>

        <div className='self-center  mr-5'>
          <img src={formLogo} alt="logo" width={30} height={30} />
        </div>

      </div>

      <div className='white w-11/12  flex justify-between max-w-[20rem] pt-4'>

        <div className='flex justify-center w-1/6 h-fit '>
          <img className='rounded-full h-11 w-11' src={userImage} alt="logo" width={30} height={30} />
        </div>

        <div className='w-5/6 bg-slate-200 py-3'>

          <h1 className='pl-4 font-bold'>¿Cuál es tu nombre?</h1>
          <div className='w-full'>
            <NombreForm estado={estado} setEstado={setEstado} data={data} setData={setData} />
          </div>

        </div>

      </div>


      {estado.formName ?
        <>
          <h1 className='-ml-16 my-2 p-2 bg-[#F174DC]'>{data.backend.nombre + " " +
            data.backend.segundoNombre + " " +
            data.backend.apellidoPaterno + " " +
            data.backend.apellidoMaterno
          }</h1>
        </> : null
      }

      {estado.formName === true ?

        <div className='white w-11/12 flex justify-between max-w-[20rem] pt-4'>

          <div className='flex justify-center w-1/6 h-fit '>
            <img className='rounded-full h-11 w-11' src={userImage} alt="logo" width={30} height={30} />
          </div>

          <div className='w-5/6 bg-slate-200 p-3'>

            <h1 className='pl-4 font-bold'>¿Cuál es tu fecha de nacimiento?</h1>

            <div className='w-full'>

              <FechaNacimientoForm estado={estado} setEstado={setEstado} data={data} setData={setData} />

            </div>

          </div>

        </div>

        : null
      }

      {estado.formBirth ?
        <>
          <h1 className='-ml-36 p-2 my-2 bg-[#F174DC]'>{data.backend.fechaNacimiento}</h1>
        </>
        : null
      }

      {estado.formName && estado.formBirth ?
        <div className='white w-11/12  flex justify-between max-w-[20rem] pt-3'>

          <div className='flex justify-center w-1/6 h-fit '>
            <img className='rounded-full h-11 w-11' src={userImage} alt="logo" width={30} height={30} />
          </div>

          <div className='w-5/6 bg-slate-200 py-3'>

            <h1 className='pl-4 font-bold'>Datos de contacto</h1>
            <div className='w-full'>
              <ContactoForm estado={estado} setEstado={setEstado} data={data} setData={setData} />
            </div>

          </div>

        </div>
        : null
      }

      {estado.formName && estado.formBirth && estado.formContato ?
        <div className='flex white w-11/12 flex-col justify-between max-w-[20rem] pt-3'>

          <h1 className='ml-10 px-2 pt-2 bg-[#F174DC] text-sm'>{"Correo electrónico: " +
            data.backend.email
          }</h1>
          <h1 className='ml-10 px-2 pb-2 bg-[#F174DC] text-sm'>{"Teléfono: " +
            data.backend.telefono
          }</h1>

          <h1 className='ml-16 mt-4 my-2 p-2 bg-slate-200 text-sm'>Si tus datos son correctos por favor continuamos.</h1>

          <button onClick={() => { seeAllData() }} className='ml-5 bg-[#f64283] w-11/12 mb-4 p-2 mt-2 rounded-md'>Iniciar</button>

        </div>

        : null
      }

      {data.active === true ?
        <div className='-mr-3 w-10/12 justify-between max-w-[20rem] p-2 bg-[#F174DC] text-sm rounded-md'>
          <h1
            className=''>{
              "Fecha de nacimiento: " +
              data.backend.fechaNacimiento
            }
          </h1>
          <h1
            className=' text-sm'>{
              "Correo electrónico: " +
              data.backend.email
            }
          </h1>
          <h1
            className='text-sm'>{
              "Teléfono celular: " +
              data.backend.telefono
            }
          </h1>
          <h1
            className='text-sm'>{
              "Nombre: " +
              data.backend.nombre + " " +
              data.backend.segundoNombre + " " +
              data.backend.apellidoPaterno + " " +
              data.backend.apellidoMaterno

            }
          </h1>
        </div>


        : null}

    </div>
  )
}

export default ChatForm