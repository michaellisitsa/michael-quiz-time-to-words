const { convertTimeToWords } = require("./index");

describe("Time to words", () => {
  it("Handles midnight", () => {
    const timeInWords = convertTimeToWords("0:00");
    expect(timeInWords).toBe("midnight");
  });
  it("Handles midday", () => {
    const timeInWords = convertTimeToWords("12:00");
    expect(timeInWords).toBe("midday");
  });

  it("Handles round hours", () => {
    const timeInWords = convertTimeToWords("3:00");
    expect(timeInWords).toBe("three o'clock");
  });

  it("Handles 30 - 8:30", () => {
    const timeInWords = convertTimeToWords("8:30");
    expect(timeInWords).toBe("half past eight");
  });

  it("Handles times after 30 mins - 2:45", () => {
    const timeInWords = convertTimeToWords("2:45");
    expect(timeInWords).toBe("quarter to three");
  });

  it("Handles non-special times after 30 mins - 2:57", () => {
    const timeInWords = convertTimeToWords("2:57");
    expect(timeInWords).toBe("three to three");
  });

  it("Handles non-special times before 30 mins - 2:10", () => {
    const timeInWords = convertTimeToWords("2:10");
    expect(timeInWords).toBe("ten past two");
  });

  it("Handles 24 hour time", () => {
    const timeInWords = convertTimeToWords("15:30");
    expect(timeInWords).toBe("half past three");
  });
});
