import {useForm} from "react-hook-form";
import { User } from "../../../../Components/typescript/User";
import InputText from "../../../../Components/Ui/Input/InputText";
import { validateName } from "./validation/Name";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { useState } from "react";
import { addUser } from "../../../../Components/fetchData/Users";
import { validateEmail } from "./validation/Email";
import { validatePassword } from "./validation/Password";
import InputSubmit from "../../../../Components/Ui/Input/InputSubmit";
import HeaderClient from "../../../../Components/header/HeaderClient";



export default function Inscription() {
    const { register,formState : {errors },handleSubmit } = useForm<User>();
    const navigate = useNavigate() ;
    const queryClient = useQueryClient();
    const [errorServer ,setErrorServer] = useState();
    const mutation = useMutation(addUser, {
        onSuccess: () => {
          queryClient.invalidateQueries('users');
          navigate("/Connexion")
        },
        onError: (error : any) => {
          setErrorServer(error.response.data.message)
        }
    });

    const onSubmit = (formData: User) => {
        const newUser = { ...formData,role:"User"};
        mutation.mutate(newUser);
    };
    
  return (
    <>
        <HeaderClient />
        <div className="w-full flex justify-center items-center h-[830px] ">
            <form onSubmit={handleSubmit(onSubmit)} className="w-[500px] pb-8 bg-black rounded-xl p-4">
                <h1 className="text-4xl mt-4 mb-4 font-bold text-center text-white">Inscription</h1>
                {errorServer && <h1 className="p-2 bg-red-600 text-red-500 bg-opacity-10 text-center"> {errorServer} </h1> }
                <InputText label="Nom" register={register("username",validateName)} Err={errors.username?.message}/>
                <InputText label="Email" register={register("email",validateEmail)} Err={errors.email?.message}/>
                <InputText show={true} label="Mot de passe" register={register("password",validatePassword)} Err={errors.password?.message}/>
                <InputSubmit />
           </form>
        </div>
    </>
  )
}
