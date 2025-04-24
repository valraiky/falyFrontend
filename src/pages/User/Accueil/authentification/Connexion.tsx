import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient} from "react-query";
import {AxiosError} from "axios";
import {useState} from "react";
import { Loginfetch } from "../../../../Components/fetchData/Login";
import { Login } from "../../../../Components/typescript/Login";
import HeaderClient from "../../../../Components/header/HeaderClient";
import InputText from "../../../../Components/Ui/Input/InputText";
import InputSubmit from "../../../../Components/Ui/Input/InputSubmit";
import { validateEmail } from "./validation/Email";
import { validatePassword } from "./validation/Password";
import { DataProvider } from "../../../../context/DataContext";

type Testa = {
  message : string
}

export default function Connexion() {
  const { register, formState: { errors }, handleSubmit } = useForm<Login>();
  const navigate = useNavigate();
  const [errorServer, setErrorServer] = useState<string>("");
  const queryClient = useQueryClient();


  const mutation = useMutation(Loginfetch, {
    onSuccess: (value) => {
      queryClient.invalidateQueries('users');
      value.role === "Admin" ? navigate("/Admin") : navigate("/")
    },
    onError: (error : AxiosError<Testa>) => {
      if (error.response && error.response.data) {
        setErrorServer(error.response.data.message);
      } else {
        setErrorServer("An unexpected error occurred");
      }
    }
  });

  const onSubmit = async (formData: Login) => {
    mutation.mutate(formData);
  };

  return (
    <>
      <DataProvider>
        <HeaderClient />
        <div className="w-full flex justify-center items-center h-[830px] ">
            <form onSubmit={handleSubmit(onSubmit)} className="w-[500px] pb-8 bg-black rounded-xl p-4">
                <h1 className="text-4xl mt-4 mb-4 font-bold text-center text-white">Connectez-vous</h1>
                {errorServer && <h1 className="p-2 bg-red-600 text-red-500 bg-opacity-10 text-center"> {errorServer} </h1> }
                <InputText label="Email" register={register("email",validateEmail)} Err={errors.email?.message}/>
                <InputText show={true} label="Mot de passe" register={register("password",validatePassword)} Err={errors.password?.message}/>
                <InputSubmit />
            </form>
        </div>
      </DataProvider>
    </>
  );
}