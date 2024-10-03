import { PageWrapper, Form, SearchField, ButtonComponent, CardComponent } from "./styles"

import { useState, useEffect, ChangeEvent } from "react";
import Input from "components/Input/Input";
import Button from "components/Button/Button";

function Lesson_10() {
    const URL_UNI:string = "http://universities.hipolabs.com/search?country="

    const [uni, setUni] = useState<string | undefined>(undefined)
    const [error, setError] = useState<string | undefined>(undefined)
    const [inputValue, setInputValue] = useState<string>("");


    const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
      };

    const getUni = async () => {
        setUni(undefined)
        setError(undefined)

    }
  return  
   <PageWrapper>
  <Form>
  <SearchField>
    <Input 
              value={inputValue}
              onChange={onChangeValue}
              name="search"
              label="Country"
              placeholder="Enter Country for searching universities"
              id="input-search"/>
  </SearchField>
  <ButtonComponent>
    <Button name="Get Universities" onClick={getUni}/>
  </ButtonComponent>
  <CardComponent></CardComponent>
  </Form>
  </PageWrapper>
}

export default Lesson_10;
