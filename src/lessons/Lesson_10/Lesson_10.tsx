import { useState, ChangeEvent } from "react";

import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";
import UniversityList from "./UniversityList";

import {
  PageWrapper,
  HEADER,
  H1,
  H2,
  Container,
  SearchForm,
  InputComponent,
  ButtonsContainer,
  ButtonComponent,
  CardComponent,
  ErrorComponent,
} from "./styles";
import { Uni } from "./types";
import { fetchUni } from "./fetchUni";

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

    if (!inputValue.trim()) {
      alert("Please enter a country name!");
      return;
    }

    const result = await fetchUni(inputValue);

    if (result.error) {
      setError(result.error);
    } else if (result.data) {
      setUni(result.data);
    }
  };

  const onReset = () => {
    setUni(undefined);
    setError(undefined);
    setInputValue("");
  };

  const closeModal = () => {
    setError(undefined);
  };

  return (
    <PageWrapper>
      <HEADER>
        <H1>Universities Worldwide</H1>
        <H2>
          Welcome to the searchable database of Universities around the world!
        </H2>
      </HEADER>
      <Container>
        <SearchForm>
          <InputComponent>
            <Input
              value={inputValue}
              onChange={onChangeValue}
              name="search"
              label=""
              placeholder="Select the country in which you would like to study"
              id="input-search"
            />
          </InputComponent>
          <ButtonsContainer>
            <ButtonComponent>
              <Button name="Search" onClick={getUni} />
            </ButtonComponent>
            <ButtonComponent>
              <Button name="Reset Results" onClick={onReset} />
            </ButtonComponent>
          </ButtonsContainer>
        </SearchForm>
        <CardComponent>
          {uni && <UniversityList unis={uni} />}
          {error && (
            <Modal closeModal={closeModal}>
              <ErrorComponent>{error}</ErrorComponent>
            </Modal>
          )}
        </CardComponent>
      </Container>
    </PageWrapper>
  );
}

export default Lesson_10;
