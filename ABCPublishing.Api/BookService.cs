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

    public BookSection? GetSection(string bookPath, string sectionName)
    {
        var sections = GetAllSections(bookPath);

        if (sections != null && sections.ContainsKey(sectionName))
        {
            return sections[sectionName];
        }

        return null;
    }
}
