/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { withFormIdSelector } from "./hocs/with-form-id-selector";
import { FormProvider, useFormContext } from "./context";

const pageCss = css``;

const Name = () => {
  const { name, setName } = useFormContext();

  return (
    <input onChange={(event) => setName(event.target.value)} value={name} />
  );
};

const Countries = () => {
  const { id } = useFormContext();

  console.log("Non-memoised countries re-render");
  return (
    <div>
      <h3>List on countries for form: {id}</h3>
      <ul>
        <li>Australia</li>
        <li>USA</li>
      </ul>
    </div>
  );
};

const CountriesWithFormId = ({ formId }: { formId: string }) => {
  console.log("Countries with selector re-render");
  return (
    <div>
      <h3>List on countries for form: {formId}</h3>
      <ul>
        <li>Australia</li>
        <li>USA</li>
      </ul>
    </div>
  );
};

const CountriesWithFormIdSelector = withFormIdSelector(CountriesWithFormId);

const Form = () => {
  return (
    <form css={pageCss}>
      <Name />
      <Countries />
      <CountriesWithFormIdSelector />
    </form>
  );
};

export const Page = () => {
  return (
    <FormProvider>
      <Form />
    </FormProvider>
  );
};
