import {
  PageWrapper,
  Form,
  SearchField,
  ButtonComponent,
  CardComponent,
} from "./styles";

import { Uni } from "./types";
import { fetchUni } from "./fetchUni";

import { useState, ChangeEvent } from "react";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import UniversityList from "./UniversityList";
import ErrorMessage from "./ErrorMessage";

function Lesson_10() {
  const [uni, setUni] = useState<Uni[] | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [inputValue, setInputValue] = useState<string>("");

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const getUni = async () => {
    setUni(undefined);
    setError(undefined);

    const result = await fetchUni(inputValue);
    if (result.error) {
      setError(result.error);
    } else if (result.data) {
      setUni(result.data);
    }
  };
  return (
    <PageWrapper>
      <Form>
        <SearchField>
          <Input
            value={inputValue}
            onChange={onChangeValue}
            name="search"
            label="Country"
            placeholder="Enter Country for searching universities"
            id="input-search"
          />
        </SearchField>
        <ButtonComponent>
          <Button name="Get Universities" onClick={getUni} />
        </ButtonComponent>
        <CardComponent>
          {uni && <UniversityList unis={uni} />}
          {error && <ErrorMessage message={error} />}
        </CardComponent>
      </Form>
    </PageWrapper>
  );
}

export default Lesson_10;
