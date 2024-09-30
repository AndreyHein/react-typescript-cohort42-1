import Button from "components/Button/Button";

import { FeedbackProps } from "./types";

import { ButtonCountControl, CountControl, FeedbackControl, PageWrapper } from "./styles";

function Feedback({
  likes,
  dislikes,
  onDislike,
  onLike,
  resetResults,
}: FeedbackProps) {
  return (
    <PageWrapper>
      <FeedbackControl>
        <ButtonCountControl>
          <Button name="Like" onClick={onLike} />
          <CountControl>{likes}</CountControl>
        </ButtonCountControl>
        <ButtonCountControl>
          <Button name="Dislike" onClick={onDislike} />
          <CountControl>{dislikes}</CountControl>
        </ButtonCountControl>
      </FeedbackControl>
      <Button name="Reset Results" onClick={resetResults} />
    </PageWrapper>
  );
}

export default Feedback;