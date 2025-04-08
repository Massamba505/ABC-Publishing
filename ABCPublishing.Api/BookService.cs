using System.Text.Json;
using ABCPublishing.Api.Models;

namespace ABCPublishing.Api;

public class BookService
{
    private readonly string BookDirectory = "BookData";
    private readonly string BookFileName = "the-adventures-of-sherlock-holmes.json";
    private readonly string _BookPath;

    public BookService()
    {
        _BookPath = Path.Combine(AppContext.BaseDirectory, BookDirectory, BookFileName);
    }
    
    public Dictionary<string, BookSection>? GetAllSections()
    {
        var book = File.ReadAllText(_BookPath);

        return JsonSerializer.Deserialize<Dictionary<string, BookSection>>(book);
    }
}
