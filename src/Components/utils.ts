export const getYears = (startYear:number, endYear:number) => {
    const years =[];
    for (let year = 1970; year <= 2100; year++) {
        years.push(year);
      }
      return years;
};
