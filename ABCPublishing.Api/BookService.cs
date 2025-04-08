using System.Text.Json;
using ABCPublishing.Api.Models;

namespace ABCPublishing.Api;

public class BookService
{ 
    public Dictionary<string, BookSection>? GetAllSections(string bookPath)
    {
        var book = File.ReadAllText(bookPath);

        return JsonSerializer.Deserialize<Dictionary<string, BookSection>>(book);
    }

}
