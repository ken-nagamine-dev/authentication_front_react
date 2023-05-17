import { useForm } from "react-hook-form";
import style from './Login.module.css'
import { useAuth } from "../../context/AuthProvider/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
   const { register, handleSubmit } = useForm()
   const auth = useAuth()
   const navigate = useNavigate()

   async function handleSignIn(data: any) {
      try{
         await auth.authenticate(data.email, data.password)

         navigate("/dashboard")
      } catch(error) {
         console.log(error)
         alert('Invalid email or password')
      }
   }

   return (
      <div className={style.container}>
         <div className={style.login_container}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(handleSignIn)}>
               <div className={style.input_container}>
                  <label htmlFor="email-address">
                     Email address
                  </label>
                  <input
                     {...register('email')}
                     id="email-address"
                     name="email"
                     type="email"
                     placeholder="Email address"
                     required
                  />
               </div>
               <div className={style.input_container}>
                  <label htmlFor="password">
                     Password
                  </label>
                  <input
                     {...register('password')}
                     id="password"
                     name="password"
                     type="password"
                     placeholder="Password"
                     required
                  />
               </div>
               <div className={style.button_container}>
                  <button type="submit" className={style.btn}>
                     Sign In
                  </button>
               </div>
            </form>
         </div>
      </div>
   )
}