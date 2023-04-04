import React, { useState } from "react";

type TCountryData = string[];
const data = { India: "Delhi", Germany: "Berlin" };

export default function CountryCapitalGame() {
  function shuffle(array: TCountryData) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex]
      ];
    }
    return array;
  }

  const generateButtonArray = () => {
    const arr: TCountryData = [];
    Object.entries(data).forEach(([key, value]) => {
      arr.push(key);
      arr.push(value);
    });
    shuffle(arr);
    return arr;
  };

  const [buttonArray, setButtonArray] = useState<TCountryData>(
    generateButtonArray()
  );
  const [clickedText, setClickedText] = useState<string[]>([]);

  //Checks corresponding capital with country
  const matcher = (newButtonId: string) => {
    // If country clicked first, If capital clicked first
    if (
      data[newButtonId as keyof typeof data] == clickedText[0] ||
      data[clickedText[0] as keyof typeof data] === newButtonId
    )
      return true;

    return false;
  };
  const clickHandler = (e: React.SyntheticEvent) => {
    const newButtonId = (e.target as HTMLInputElement).id;
    const button = document.getElementById(newButtonId);
    if (clickedText.length == 2) {
      clickedText.forEach((val) => {
        document.getElementById(val)!.style.backgroundColor = "white";
      });
      button!.style.backgroundColor = "blue";
      setClickedText([newButtonId]);
    } else if (clickedText.length === 0 && button) {
      button.style.backgroundColor = "blue";
      setClickedText([newButtonId]);
    } else {
      // one button is already clicked
      //match logic from clicked with buttonArray
      if (matcher(newButtonId)) {
        // set blue color
        document.getElementById(clickedText[0])!.style.backgroundColor = "blue";
        document.getElementById(newButtonId)!.style.backgroundColor = "blue";

        // remove both capital and country
        setButtonArray(
          buttonArray.filter((a) => {
            console.log(a, newButtonId, clickedText[0]);
            return a !== newButtonId && a !== clickedText[0];
          })
        );
        setClickedText([]);
      } else {
        // set red color
        document.getElementById(clickedText[0])!.style.backgroundColor = "red";
        document.getElementById(newButtonId)!.style.backgroundColor = "red";

        setClickedText([...clickedText, newButtonId]);
      }
    }
  };
  console.log(clickedText, buttonArray);
  return (
    <div>
      Your game component
      <div>
        {buttonArray.length == 0
          ? "Congratulations"
          : buttonArray.map((button) => (
              <button key={button} id={button} onClick={clickHandler}>
                {button}
              </button>
            ))}
      </div>
    </div>
  );
}
