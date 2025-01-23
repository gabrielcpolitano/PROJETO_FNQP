// Strong number is a number with the sum of the factorial of its digits is equal to the number itself.

// For example, 145 is strong, because 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Task
// Given a positive number, find if it is strong or not, and return either "STRONG!!!!" or "Not Strong !!".

// Examples
// 1 is a strong number, because 1! = 1, so return "STRONG!!!!".
// 123 is not a strong number, because 1! + 2! + 3! = 9 is not equal to 123, so return "Not Strong !!".
// 145 is a strong number, because 1! + 4! + 5! = 1 + 24 + 120 = 145, so return "STRONG!!!!".
// 150 is not a strong number, because 1! + 5! + 0! = 122 is not equal to 150, so return "Not Strong !!".

class Kata
{
    public static string StrongNumber(int number)
    {
      int soma = 0;
      int numeroOriginal = number;
      
        while(number>0){
          int digito = number % 10;
          soma += Fatorial(digito);
          number/=10;
        }
      if(soma == numeroOriginal){
        return "STRONG!!!!";
      }
      return "Not Strong !!";    
    }
  
    public static int Fatorial(int num){
        if (num <= 1){ return 1; }
        return num * Fatorial(num-1);
    }
}

using NUnit.Framework;

[TestFixture]
class Tests
{
    [TestCase(1, "STRONG!!!!")]
    [TestCase(2, "STRONG!!!!")]
    [TestCase(145, "STRONG!!!!")]
    [TestCase(7, "Not Strong !!")]
    [TestCase(93, "Not Strong !!")]
    [TestCase(185, "Not Strong !!")]
    public void BasicTests(int input, string expected)
    {
        Assert.That(Kata.StrongNumber(input), Is.EqualTo(expected));
    }
}