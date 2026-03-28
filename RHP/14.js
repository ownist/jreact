/**
 * author: ownist
 *
 * day 14 er problem recap ditachi.. eita onek tricky but code deikha ami halka bujte parsi.. jeituku bujji seitukui kortachi
 *
 * eikhane math er sutro ache.. formula use kora hoiche
 */

const find_missing_number = (arr) => {
  // kiyer laigga jani eine array er man joto totr theika 1 baraiche... i mean array er length joto tar loge 1 jog koira 1 ta value beshi count kora hoiche
  const n = arr.length + 1;

  // then eikhane ekta formula use kora hoiche.. ami eitar kicchu buji nai.. but halka bujji, eidare buaj koy nh
  const expected_sum = (n * (n + 1)) / 2;

  // abr eikhane array er jogfol ber korar jonno actual sum name e ekta variable create kora hoiche, and initial value 0 dhora hoiche
  let actual_sum = 0;

  // then eikhane array er opor for loop chalano hoiche, jate prottekbar jei element ta paitache oita jog korte pare
  for (const num of arr) {
    actual_sum += num;
  }

  // then eikhane final output ta ekbare return koira dewa hoitache
  return expected_sum - actual_sum;
};

const input = [1, 2, 4, 5];
const output = find_missing_number(input);
console.log(output);

/**
 * kicchu buji nai bhai.. khali eituk bujji je ei formula jodi mukhosto rakte pari taile ei problem solve krte parmu...
 */
