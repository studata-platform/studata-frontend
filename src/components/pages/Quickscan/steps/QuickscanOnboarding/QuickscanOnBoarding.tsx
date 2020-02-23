import React, { Fragment, useCallback, useContext } from "react";
import { useHistory } from "react-router";
import { HeadingType } from "../../../../../components/general/Heading";
import InputType from "../../../../../components/general/Input/data/InputType";
import Wrapper, {
  WrapperWidth
} from "../../../../../components/general/Wrapper";
import RoutePath from "../../../../../data/RoutePath";
import { FontColor } from "../../../../../data/style/variables";
import numberFormatter from "../../../../../util/forms/formatters/numberFormatter";
import numberValidator from "../../../../../util/forms/validators/optionalNumberValidator";
import urlValidator from "../../../../../util/forms/validators/optionalUrlValidator";
import requiredValidator from "../../../../../util/forms/validators/requiredValidator";
import Header from "../../../../blocks/Header";
import Input from "../../../../general/Input";
import InputGroup from "../../../../general/InputGroup";
import Circle from "../../../../util/Circle";
import { Context as QuickscanContext } from "../../Quickscan";
import { Form, FormHeading, FormParagraph, SubmitButton } from "./styled";

const QuickscanOnboarding = () => {
  const quickscanContext = useContext(QuickscanContext);
  const history = useHistory();

  const submitHandler = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.target as HTMLFormElement);

      const company = {
        companyName: formData.get("companyName") as string,
        website: formData.get("website") as string,
        sector: formData.get("sector") as string,
        region: formData.get("region") as string,
        employeeCount: parseInt(formData.get("employeeCount") as string, 10)
      };

      if (company.companyName === "") {
        return;
      }

      quickscanContext.setResult({
        ...quickscanContext.result,
        company
      });

      history.push(RoutePath.QuickscanQuestions);
    },
    [quickscanContext, history]
  );

  return (
    <Fragment>
      <Circle x={25} y={-20} />

      <Header />

      <Wrapper width={WrapperWidth.Smaller}>
        <Form onSubmit={submitHandler}>
          <FormHeading
            headingType={HeadingType.Secondary}
            fontColor={FontColor.Accent}
          >
            Bedrijfsgegevens
          </FormHeading>
          <FormParagraph>
            Wij zijn erg geïnteresseerd met welk bedrijf wij het genoegen
            hebben. Kan u ons wat meer vertellen over het bedrijf? Zodoende
            kunnen wij een persoonlijke analyse uitvoeren.
          </FormParagraph>
          <InputGroup>
            <Input
              label="Bedrijfsnaam"
              name="companyName"
              validator={requiredValidator}
            />

            <Input label="Website" name="website" validator={urlValidator} />

            <Input label="Sector" name="sector" />
            <Input label="Regio" name="region" />

            <Input
              label="Aantal werknemers"
              name="employeeCount"
              type={InputType.Number}
              formatter={numberFormatter}
              validator={numberValidator}
            />
          </InputGroup>
          <SubmitButton type="submit">Start de Quickscan</SubmitButton>{" "}
        </Form>
      </Wrapper>
    </Fragment>
  );
};

export default QuickscanOnboarding;