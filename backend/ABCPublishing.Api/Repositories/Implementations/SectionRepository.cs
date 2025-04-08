using System.Text.Json;
using ABCPublishing.Api.Models;

namespace ABCPublishing.Api.Repositories;

public class SectionRepository(string bookPath) : ISectionRepository
{
    private readonly string _bookPath = bookPath;

    public Dictionary<string, BookSection>? GetAllSections()
    {
        var book = File.ReadAllText(_bookPath);
        var serializerOptions = new JsonSerializerOptions(JsonSerializerDefaults.Web);

        return JsonSerializer.Deserialize<Dictionary<string, BookSection>>(book, serializerOptions);
    }

    public BookSection? GetSection(string sectionName)
    {
        var sections = GetAllSections();

        if (sections != null && sections.TryGetValue(sectionName, out var section))
        {
            return section;
        }

        return null;
    }
}
