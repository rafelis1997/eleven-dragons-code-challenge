import * as Select from "@radix-ui/react-select"
import { ChevronDownIcon, CheckIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import * as zod from 'zod'
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from 'next/router'

import { Header } from "../../components/Header";
import { NewFormContainer, 
        NewUserFormContent, 
        SelectTrigger, 
        StyledContent, 
        StyledItem, 
        StyledViewport, 
        StyledPortal, 
        InputContainer, 
        SelectContainer, 
        StyledSeparator,
        SubmitButton, 
        ErrorText} from "../../styles/pages/new-user-form";
import { User, UserListContext } from "../../context/UsersListContext";
import Head from "next/head";

const NewUserFormSchema = zod.object({
  name: zod.string({required_error:"Nome é obrigatório"}).min(4).max(20).regex(/^[a-zA-z_ ]*$/),
  email: zod.string({required_error:"Email é obrigatório"}).email({ message: "Endereço de email em formato inválido" }),
  status: zod.enum(["active", "inactive"]),
})

type EditUserFormInputs = zod.infer<typeof NewUserFormSchema>



export default function EditUser() {
  const { usersList } = useContext(UserListContext) 
  const router = useRouter();
  const { id } = router.query;
  const { handleUserEdit } = useContext(UserListContext);

  let user = usersList.find(user => user.id == Number(id)) as User;

  const { register, handleSubmit, formState: { isSubmitting, errors }, control, reset } = useForm<EditUserFormInputs>({
    resolver: zodResolver(NewUserFormSchema),
    defaultValues: {
      name: user?.name,
      email: user?.email,
      status: user?.status,
    }
  });

  function handleNewUserSubmit(data: EditUserFormInputs) {
    if(typeof id === "string") {
      const numberId = Number(id)
      const editedUser = {
        id: numberId,
        ...data
      }
      handleUserEdit(editedUser)
      router.back()
      reset()
    }
  }

  return (
    <>
      <Head>
        <title>Editar usuário | Eleven Dragons</title>
      </Head>

      <Header url="/" buttonText="Home"/>

      <NewFormContainer>
        <h1>Editar usuário</h1>

        <NewUserFormContent onSubmit={handleSubmit(handleNewUserSubmit)}>
          <InputContainer>
            <label htmlFor="name">Nome</label>
            <input id="name" type="text" placeholder="Seu nome..." {...register("name")} defaultValue={user?.name}/>
            {errors.name && <ErrorText>Entre um nome válido entre 4-20 caracteres</ErrorText>}

          </InputContainer>
          
          <InputContainer>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" placeholder="email@seuemail.com" {...register("email")} defaultValue={user?.email}/>
            {errors.email && <ErrorText>Entre um email válido no formato email@email.com</ErrorText>}
          </InputContainer>
          
          <SelectContainer>
            <label htmlFor="status">Status</label>

            <Controller 
              control={control}
              name="status"
              render={({field: {value=user?.status, onChange}}) => {
                return (
                  <Select.Root value={value} onValueChange={onChange} >
                    <SelectTrigger>
                      <Select.Value>
                        {value === "active" ? "Ativo" : "Inativo" }
                      </Select.Value>
                      <Select.Icon>
                        <ChevronDownIcon />
                      </Select.Icon>
                    </SelectTrigger>
      
                    <StyledPortal>
                      <StyledContent>
                        <StyledViewport>
                          <StyledItem value="active">
                            <Select.ItemText>Ativo</Select.ItemText>
                            <Select.ItemIndicator>
                              <CheckIcon />
                            </Select.ItemIndicator>
                          </StyledItem>
      
                          <StyledSeparator />
      
                          <StyledItem value="inactive">
                            <Select.ItemText>Inativo</Select.ItemText>
                            <Select.ItemIndicator>
                              <CheckIcon />
                            </Select.ItemIndicator>
                          </StyledItem>
                        </StyledViewport>
                      </StyledContent>
                    </StyledPortal>
                  </Select.Root>
                )
              }}
            />
            
          </SelectContainer>
          

          <SubmitButton type="submit" disabled={isSubmitting}>Editar</SubmitButton>
        </NewUserFormContent>
      </NewFormContainer>
    </>
  )
}