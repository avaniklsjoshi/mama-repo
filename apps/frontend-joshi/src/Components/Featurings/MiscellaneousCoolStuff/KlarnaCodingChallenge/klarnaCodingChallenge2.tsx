// // failing on enhances transaction with category when there are many similar transactions for several categories
// 2. uses the categories of the transaction with the smallest amount difference

// enhances transaction with category when there are many similar transactions for several categories
// categorizeSimilarTransactions() › uses the categories of the transaction with the smallest amount difference
// categorizeSimilarTransactions() › works with the example

const transactions = [
    {
      id: "bfd6a11a-2099-4b69-a7bb-572d8436cf73",
      sourceAccount: "my_account",
      targetAccount: "coffee_shop",
      amount: -350,
      time: "2021-03-12T12:34:00Z"
    },
    {
      id: "bfd6a11a-2099-4b69-a7bb-572d8436cf73",
      sourceAccount: "my_account",
      targetAccount: "coffee_shop",
      amount: -1610,
      category: "eating_out",
      time: "2021-03-12T12:34:00Z"
    },
  {
    id: "a8170ced-1c5f-432c-bb7d-867589a9d4b8",
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -690,
    category: "eating_at_house",
    time: "2021-04-12T08:20:00Z"
  },
  {
    id: "a8170ced-1c5f-432c-bb7d-867589a9d4b8",
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -680,
    time: "2021-04-12T08:20:00Z"
  }

];

interface IResType {
  [key: string]: number;
}

export const categorizeSimilarTransactions = (transactions: any) => {
  if (transactions.length == 0) return [];
  const newTrans: any = transactions; //can be deep cloned, if necessary

  for (let i = 0; i < newTrans.length; i++) {
    if (newTrans[i].category) continue; //continue to next loop transaction item
    else {
      for (let j = 0; j < newTrans.length; j++) {
  // 1. Check same targetAccount and the amount difference is not greater than 1000
        if (
          newTrans[i].targetAccount == newTrans[j].targetAccount &&
          Math.abs(newTrans[i].amount - newTrans[j].amount) <= 1000 &&
          ( newTrans[i].category || newTrans[j].category)
        ) {
  // 2. Check if an uncategorized transaction is similar to more than one transaction, it should take the category from the one with the smallest amount difference.
           if (
            newTrans[i].category &&
            newTrans[i].category >
              Math.abs(newTrans[i].amount - newTrans[j].amount)
          ) {
            newTrans[i].category = newTrans[j].category;
          } else
            newTrans[i].category = newTrans[i].category || newTrans[j].category; //1.
        }
        }
      }
    }


  return newTrans;
};

export default function KlarnaCodingChallenge2() {
  console.log(categorizeSimilarTransactions(transactions));
  return (
    <>
      <div>klarnaCodingChallenge Bot!!!!</div>
    </>
  );
}
