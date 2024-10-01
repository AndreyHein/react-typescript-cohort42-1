import { useState, useEffect } from "react";

import { CardWrapper, JokeInfo, TextInfo } from "./styles";

import Button from "components/Button/Button";

function Homework_09() {
  const [text, setText] = useState<string | undefined>(undefined);
  const [joke, setJoke] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const getJoke = async () => {
    setText(undefined);
    setJoke(undefined);
    setError(undefined);

    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke",
      { method: "GET" }
    );

    const result = await response.json();

    if (response.ok) {
      setText(result.setup);
      setJoke(result.punchline);
    } else {
      setError("Error during request!");
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return <CardWrapper>
    <Button name="Get Joke" onClick={getJoke}/>
    {text && <TextInfo>{text}</TextInfo>}
    {joke && <JokeInfo>{joke}</JokeInfo>}
    {error && <TextInfo>{error}</TextInfo>}
  </CardWrapper>;
}

export default Homework_09;
