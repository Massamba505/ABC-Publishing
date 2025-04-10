using ABCPublishing.Api.Models;

namespace ABCPublishing.Api.Repositories;

public interface ISectionRepository
{
    Dictionary<string, Section>? GetAllSections();
    Section? GetSection(string sectionName);
}
