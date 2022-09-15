import { Header } from "../../components/Header";
import { NewFormContainer, NewUserFormContent, SelectTrigger, StyledContent, StyledItem, StyledViewport, StyledPortal, InputContainer, SelectContainer, StyledSeparator, SubmitButton } from "../../styles/pages/new-user-form";
import * as Select from "@radix-ui/react-select"
import { ChevronDownIcon, CheckIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { UserListContext } from "../../context/UsersListContext";

export default function NewUserForm() {
  const { handleNewUserAdd } = useContext(UserListContext);

  return (
    <>
      <Header url="/" buttonText="Home"/>

      <NewFormContainer>
        <h1>Criar novo usuário</h1>

        <NewUserFormContent >
          <InputContainer>
            <label htmlFor="name">Nome</label>
            <input id="name" type="text" placeholder="Seu nome..."/>

          </InputContainer>
          
          <InputContainer>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" placeholder="email@seuemail.com"/>
          </InputContainer>
          
          <SelectContainer>
            <label htmlFor="status">Status</label>
            <Select.Root>
              <SelectTrigger>
                <Select.Value placeholder="Selecione status"/>
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
          </SelectContainer>
          

          <SubmitButton type="submit">Adicionar</SubmitButton>
        </NewUserFormContent>
      </NewFormContainer>
    </>
  )
}