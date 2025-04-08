using System.Text.Json;
using ABCPublishing.Api.Models;

namespace ABCPublishing.Api;

public class BookService
{
    private readonly string BookPath;
    
    public BookService(string bookPath)
    {
        BookPath = bookPath;
    }
    
    public Dictionary<string, BookSection>? GetAllSections()
    {
        var book = File.ReadAllText(BookPath);

        return JsonSerializer.Deserialize<Dictionary<string, BookSection>>(book, new JsonSerializerOptions(JsonSerializerDefaults.Web));
    }

    public BookSection? GetSection(string sectionName)
    {
        var sections = GetAllSections();

        if (sections != null && sections.ContainsKey(sectionName))
        {
            return sections[sectionName];
        }

        return null;
    }
}
