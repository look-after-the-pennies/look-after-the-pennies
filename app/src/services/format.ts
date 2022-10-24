const isNull = (value: number | undefined, fallback: number) => {
  return value ? value : fallback;
};

const currency = (number: number | undefined): string | undefined => {
  if (typeof number === 'number') {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',

      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    }).format(number);
  } else {
    return undefined;
  }
};

const date = (
  date: string | undefined,
  format?: string
): string | undefined => {
  if (date) {
    const ds = date?.split('-');
    return ds[2] + '-' + ds[1] + '-' + ds[0];
  }
};

const format = {
  isNull: isNull,
  currency: currency,
  date: date,
};

export default format;
