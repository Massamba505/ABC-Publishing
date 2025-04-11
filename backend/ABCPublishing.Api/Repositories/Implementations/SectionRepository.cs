using ABCPublishing.Api.Data;
using ABCPublishing.Api.Models;
using ABCPublishing.Api.Repositories.Interfaces;

namespace ABCPublishing.Api.Repositories.Implementations;

public class SectionRepository(DataSource dataSource) : ISectionRepository
{
    private readonly DataSource _dataSource = dataSource;

    public Dictionary<string, Section>? GetAllSections()
    {
        return _dataSource.GetAllSections();
    }

    public Section? GetSection(string sectionName)
    {
        var sections = _dataSource.GetAllSections();

        if (sections != null && sections.TryGetValue(sectionName, out Section? value))
        {
            return value;
        }

        return null;
    }
}
