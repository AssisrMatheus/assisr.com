import moment from "moment";

const minutesTimeout = 10;

const cacheFetch = async <T>(
  input: string,
  init?: RequestInit
): Promise<T | undefined> => {
  const response = await fetch(input);

  if (response && response.ok) {
    const result = await response.json();

    if (result) {
      localStorage.setItem(
        `cache-${encodeURIComponent(input)}`,
        JSON.stringify({
          result,
          ts: moment()
            .add(minutesTimeout, "minutes")
            .valueOf()
        })
      );

      return result;
    } else {
      return undefined;
    }
  }

  return undefined;
};

const cachedFetch = <T>(
  input: string,
  init?: RequestInit
): Promise<T | undefined> => {
  const cachedValue = localStorage.getItem(
    `cache-${encodeURIComponent(input)}`
  );

  if (cachedValue) {
    const value = JSON.parse(cachedValue);
    if (moment(value.ts).isAfter(moment())) {
      return value.result;
    } else {
      return cacheFetch(input, init);
    }
  } else {
    return cacheFetch(input, init);
  }
};

export default cachedFetch;
