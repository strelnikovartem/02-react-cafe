import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import type { Votes } from "../../types/votes";
import { type VoteType } from "../../types/votes";
import VoteOptions from "../VoteOptions/VoteOptions";

const initialVotes: Votes = { good: 0, neutral: 0, bad: 0 };

export default function App() {
  const [votes, setVote] = useState<Votes>(initialVotes);

  const handleVote = (type: VoteType): void => {
    setVote({
      ...votes,
      [type]: votes[type] + 1,
    });
  };

  const resetVote = (): void => setVote(initialVotes);

  const totalVotes: number = Object.values(votes).reduce(
    (sum, value) => sum + value,
    0
  );
  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions
          onVote={handleVote}
          onReset={resetVote}
          canReset={totalVotes > 0}
        />
      </div>
    </>
  );
}
