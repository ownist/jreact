/**
 * Task 2: তাপমাত্রা কনভার্টার (Temperature Converter)
 *
 * সেলসিয়াস তাপমাত্রাকে ফারেনহাইটে রূপান্তর করার একটি ছোট লজিক লিখুন। সূত্র: (C * 9/5) + 32। যেকোনো একটি সেলসিয়াস মান ইনপুট হিসেবে নিয়ে ফারেনহাইট মানটি বের করুন।
 */

const convertCelciousToFahrenhite = (celcius) => {
  let fahrenhiteValue = (celcius * 9) / 5 + 32;
  console.log(`${celcius} cel = ${fahrenhiteValue.toFixed(2)} fh`);
};

convertCelciousToFahrenhite(80);
