import KlarnaCodingChallenge2 from "./klarnaCodingChallenge2";
// failing on equal date
const transactions = [
  {
    id: "11ff73b5-e771-441c-886a-498d93b5093d",
    sourceAccount: "my_account",
    targetAccount: "restaurant",
    amount: -9600,
    currency: "EUR",
    category: "eating_out",
    time: "2021-04-08T05:15:56.905Z"
  },
  {
    id: "8c3ec38d-1821-4d49-aef1-2385cb3c2b1b",
    sourceAccount: "my_account",
    targetAccount: "cinema",
    amount: -5700,
    currency: "EUR",
    category: "entertainment",
    time: "2021-04-10T21:16:57.819Z"
  },
  {
    id: "d1c77d7c-ccda-453c-ac01-444e9d5abca3",
    sourceAccount: "my_account",
    targetAccount: "book_store",
    amount: -7400,
    currency: "EUR",
    category: "entertainment",
    time: "2021-04-07T22:46:44.071Z"
  },
  {
    id: "837127ab-f523-4b11-bed3-ae488be4545d",
    sourceAccount: "my_account",
    targetAccount: "fitness_club",
    amount: -9200,
    currency: "EUR",
    category: "sports",
    time: "2021-04-05T01:55:16.646Z"
  }
];

const categories = ["sports"];
const start = new Date("2021-04-01");
const end = new Date("2021-04-05");
interface IResType {
  [key: string]: number;
}

const isDate = function (date: Date) {
  return true;
  //return new Date(date) !== "Invalid Date" && !isNaN(new Date(date)); //TODO: update ts
};
const convertCategoriesArrToObjFn = function (categories: string[]) {
  return categories.reduce(
    (accumulator: IResType, current) => (
      (accumulator[current] = 0), accumulator
    ),
    {}
  );
};
export const getBalanceByCategoryInPeriod = (
  transactions: any,
  categories: string[],
  start: Date,
  end: Date
) => {
  if (
    !isDate(start) ||
    !isDate(end) ||
    categories.length === 0 ||
    transactions.length === 0
  )
    return {};
  const startDate = start.toDateString();
  const endDate = end.toDateString();
  const categoriesObj = convertCategoriesArrToObjFn(categories);

  // Filtering the result in new category object categoriesObj
  transactions.forEach((transaction: any) => {
    if (
      categoriesObj[transaction.category] ||
      categoriesObj[transaction.category] == 0
    ) {
      if (transaction.time >= startDate && transaction.time <= endDate) {
        //TODO: crop strings to compare only dates not time.
        //crop only date, remove time from both strings
        if (!categoriesObj[transaction.category])
          categoriesObj[transaction.category] = 0;
        categoriesObj[transaction.category] += transaction.amount;
      }
    }
  });

  return categoriesObj;
};

export default function KlarnaCodingChallenge() {
  //   console.log(
  //     getBalanceByCategoryInPeriod(transactions, categories, start, end)
  //   );
  return (
    <>
      <div>klarnaCodingChallenge Bot!!!!</div>
      <KlarnaCodingChallenge2 />
    </>
  );
}
