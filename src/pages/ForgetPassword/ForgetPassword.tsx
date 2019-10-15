import React from "react";
import { Page, Circle } from "../../util/layout";
import PublicHeader from "../../components/blocks/PublicHeader";
import RoutePath from "../../data/RoutePath";
import {
  FormWrapper,
  Form,
  ForgetPasswordInput,
  ForgotPasswordLink,
  ForgetPasswordButton,
  ButtonWrapper,
  ErrorIcon
} from "./styled";

const mockError = {
  icon: ErrorIcon,
  message: "Dit veld is verplicht"
};

const Signin: React.FC = () => {
  return (
    <Page>
      <Circle x={25} y={-20} />

      <FormWrapper>
        <Form method="post">
          <ForgetPasswordInput
            label="E-mailadres"
            name="email"
            type="email"
            error={mockError}
          />

          <ButtonWrapper>
            <ForgetPasswordButton>Reset wachtwoord</ForgetPasswordButton>
            <ForgotPasswordLink to={RoutePath.Signin}>
              Inloggen
            </ForgotPasswordLink>
          </ButtonWrapper>
        </Form>
      </FormWrapper>

      <PublicHeader />
    </Page>
  );
};

export default Signin;
