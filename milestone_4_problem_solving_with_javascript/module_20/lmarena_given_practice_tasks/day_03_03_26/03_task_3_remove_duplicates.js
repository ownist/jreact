/**
 * Task 3: ডুপ্লিকেট রিমুভার (Remove Duplicates)
 *
 * একটি অ্যারেতে অনেকগুলো সংখ্যা আছে এবং কিছু সংখ্যা একাধিকবার আছে (যেমন: [1, 2, 2, 3, 4, 4, 5])।
 * আপনাকে এমন একটি প্রোগ্রাম লিখতে হবে যা ওই অ্যারে থেকে সব ডুপ্লিকেট সংখ্যা বাদ দিয়ে শুধুমাত্র ইউনিক (Unique) সংখ্যাগুলোর একটি নতুন অ্যারে তৈরি করবে।
 */

const removeDuplicates = (arr) => {
  const uniqueArr = [];

  arr.forEach((n) => {
    if (!uniqueArr.includes(n)) {
      uniqueArr.push(n);
    }
  });

  console.log(uniqueArr);
};

removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
