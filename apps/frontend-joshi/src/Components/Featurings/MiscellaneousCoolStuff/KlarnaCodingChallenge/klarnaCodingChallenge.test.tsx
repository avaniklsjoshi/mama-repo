import { getBalanceByCategoryInPeriod } from "./klarnaCodingChallenge";
import { categorizeSimilarTransactions } from "./klarnaCodingChallenge2";

describe("getBalanceByCategoryInPeriod()", () => {
  // This is an example test. Please add your own tests if needed
  it("returns the correct balance matching a category", () => {
    expect(
      getBalanceByCategoryInPeriod(
        [
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
            time: "2021-04-07T21:16:57.819Z"
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
        ],
        ["sports", "entertainment"],
        new Date("2021-04-01"),
        new Date("2021-04-30")
      )
    ).toEqual({ sports: -9200, entertainment: -13100 });
  });

  // add your tests here
  it("returns the correct balance matching a category in specified period", () => {
    expect(
      getBalanceByCategoryInPeriod(
        [
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
        ],
        ["sports", "entertainment"],
        new Date("2021-04-01"),
        new Date("2021-04-08")
      )
    ).toEqual({ sports: -9200, entertainment: -7400 });
  });

  it("returns 0 if category not present in specified period", () => {
    expect(
      getBalanceByCategoryInPeriod(
        [
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
        ],
        ["eating_out"],
        new Date("2021-04-01"),
        new Date("2021-04-08")
      )
    ).toEqual({ eating_out: 0 });
  });

  it("returns the correct balance matching a category in specified period and includes dates", () => {
    expect(
      getBalanceByCategoryInPeriod(
        [
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
        ],
        ["sports"],
        new Date("2021-04-01"),
        new Date("2021-04-05")
      )
    ).toEqual({ sports: -9200 });
  });
});

describe("categorizeSimilarTransactions()", () => {
  // These are example tests. Please add your own tests if needed
  it("returns empty array if transactions is empty", () => {
    expect(categorizeSimilarTransactions([])).toEqual([]);
  });

  it("enhances categorization when there are similar transactions", () => {
    expect(
      categorizeSimilarTransactions([
        {
          id: "a001bb66-6f4c-48bf-8ae0-f73453aa8dd5",
          sourceAccount: "my_account",
          targetAccount: "coffee_shop",
          amount: -620,
          time: "2021-04-10T10:30:00Z"
        },
        {
          id: "bfd6a11a-2099-4b69-a7bb-572d8436cf73",
          sourceAccount: "my_account",
          targetAccount: "coffee_shop",
          amount: -350,
          category: "eating_out",
          time: "2021-03-12T12:34:00Z"
        },
        {
          id: "a8170ced-1c5f-432c-bb7d-867589a9d4b8",
          sourceAccount: "my_account",
          targetAccount: "coffee_shop",
          amount: -1690,
          time: "2021-04-12T08:20:00Z"
        }
      ])
    ).toEqual([
      {
        id: "a001bb66-6f4c-48bf-8ae0-f73453aa8dd5",
        sourceAccount: "my_account",
        targetAccount: "coffee_shop",
        amount: -620,
        category: "eating_out",
        time: "2021-04-10T10:30:00Z"
      },
      {
        id: "bfd6a11a-2099-4b69-a7bb-572d8436cf73",
        sourceAccount: "my_account",
        targetAccount: "coffee_shop",
        amount: -350,
        category: "eating_out",
        time: "2021-03-12T12:34:00Z"
      },
      {
        id: "a8170ced-1c5f-432c-bb7d-867589a9d4b8",
        sourceAccount: "my_account",
        targetAccount: "coffee_shop",
        amount: -1690,
        time: "2021-04-12T08:20:00Z"
      }
    ]);
  });

  // add your tests here
});
