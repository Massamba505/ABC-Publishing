using System.Text.Json;
using ABCPublishing.Api.Models;

namespace ABCPublishing.Api.Data;

public class DataSource (string bookPath)
{
    private readonly string _bookPath = bookPath;

    public Dictionary<string, Section>? GetAllSections()
    {
        var book = File.ReadAllText(_bookPath);
        var serializerOptions = new JsonSerializerOptions(JsonSerializerDefaults.Web);

        return JsonSerializer.Deserialize<Dictionary<string, Section>>(book, serializerOptions);
    }
}
