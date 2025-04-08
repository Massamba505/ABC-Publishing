using ABCPublishing.Api;

namespace BookReadingLogicTest;

public class Tests
{
    BookService _bookService;

    [SetUp]
    public void Setup()
    {
        var bookDirectory = Path.Combine(Directory.GetCurrentDirectory(), "TestBookData", "testBook.json");
        
        _bookService = new BookService("TestBookData", "testBook");
    }

    [Test]
    public void GIVEN_JSON()
    {
        Assert.Pass();
    }
}
