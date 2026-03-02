/**
 * Task 4: দ্বিতীয় সর্বোচ্চ সংখ্যা (Find Second Largest)
 *
 * একটি সংখ্যার অ্যারে দেওয়া আছে। আপনাকে খুঁজে বের করতে হবে ওই তালিকার মধ্যে দ্বিতীয় সর্বোচ্চ (Second Largest) সংখ্যা কোনটি। (সবচেয়ে বড়টি নয়, তার ঠিক পরের বড়টি)।
 */

const removeDuplicateNumbers = (nums) => {
  const uniqueNums = [];

  nums.forEach((num) => {
    if (!uniqueNums.includes(num)) {
      uniqueNums.push(num);
    }
  });

  const sortedNums = uniqueNums.sort((a, b) => b - a);
  console.log(sortedNums[1]);
};

removeDuplicateNumbers([100, 20, 51, 20, 86, 20, 45, 10, 110]);
