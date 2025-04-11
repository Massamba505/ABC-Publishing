using ABCPublishing.Api.Models;
using ABCPublishing.Api.Repositories.Interfaces;
using ABCPublishing.Api.Service.Interfaces;

namespace ABCPublishing.Api.Service.Implementations;

public class SectionService(ISectionRepository todoRepository) : ISectionService
{
    private readonly ISectionRepository _sectionRepository = todoRepository;

    public Dictionary<string, Section>? GetAllSections()
    {
        return _sectionRepository.GetAllSections();
    }

    public Section? GetSection(string sectionName)
    {
        return _sectionRepository.GetSection(sectionName);
    }
}
