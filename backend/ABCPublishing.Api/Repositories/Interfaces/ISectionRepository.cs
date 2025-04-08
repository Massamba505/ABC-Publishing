using ABCPublishing.Api.Models;

namespace ABCPublishing.Api.Repositories;

public interface ISectionRepository
{
    Dictionary<string, BookSection>? GetAllSections();
    BookSection? GetSection(string sectionName);
}
