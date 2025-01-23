// 7 kyu
// Count all the sheep on farm in the heights of New Zealand// 
// Every Friday and Saturday night, farmer counts sheep coming back to his farm (sheep returned on Friday stay and don't leave).

// Sheep return in groups both of the days -> You will be given two arrays with these numbers (one for Friday and one for Saturday night). Array entries are integers, equal zero or higher - in case a given array is empty, farmer did not count the sheep or got sick (we treat this as no sheep returned that night).

// Farmer knows how many sheep he has in total (third parameter). You need to calculate the amount of sheep lost (not returned to the farm) after final sheep count on Saturday.

// Example 1: Input: [1, 2], [3, 4], 15 --> Output: 5

// Example 2: Input: [3, 1, 2], [4, 5], 21 --> Output: 6

// Example 3: Input: [0], [4, 15], 31 --> Output: 12

// Example 4: Input: [], [4], 15 --> Output: 11

// Good luck! :-)

namespace CodeWars
{
    public class Kata
    {
        public int lostSheep(int[] friday, int[] saturday, int total)
        {
            int sum = 0;
            foreach (int f in friday)
            {
                sum += f;
            }
            foreach (int s in saturday)
            {
                sum += s;
            }

            return (total - sum);
        }
    }
}


using NUnit.Framework;

namespace CodeWars
{
    [TestFixture]
    class KataTestClass
    {
        [TestCase, Order(1)]
        public void BasicTest1()
        {
            Kata kata = new Kata();
            int[] friday = new int[] { 1, 2 };
            int[] saturday = new int[] { 3, 4 };
            Assert.That(kata.lostSheep(friday, saturday, 15), Is.EqualTo(5));
        }

        [TestCase, Order(2)]
        public void BasicTest2()
        {
            Kata kata = new Kata();
            int[] friday = new int[] { 3, 1, 2 };
            int[] saturday = new int[] { 4, 5 };
            Assert.That(kata.lostSheep(friday, saturday, 21), Is.EqualTo(6));
        }

        [TestCase, Order(3)]
        public void BasicTest3()
        {
            Kata kata = new Kata();
            int[] friday = new int[] { 5, 1, 4 };
            int[] saturday = new int[] { 5, 4 };
            Assert.That(kata.lostSheep(friday, saturday, 29), Is.EqualTo(10));
        }

        [TestCase, Order(4)]
        public void BasicTest4()
        {
            Kata kata = new Kata();
            int[] friday = new int[] { };
            int[] saturday = new int[] { 4 };
            Assert.That(kata.lostSheep(friday, saturday, 15), Is.EqualTo(11));
        }
    }
}