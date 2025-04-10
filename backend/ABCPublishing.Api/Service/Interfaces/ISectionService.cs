using ABCPublishing.Api.Models;

namespace ABCPublishing.Api.Service.Interfaces;

public interface ISectionService
{
    Dictionary<string, Section>? GetAllSections();
    Section? GetSection(string sectionName);
}
