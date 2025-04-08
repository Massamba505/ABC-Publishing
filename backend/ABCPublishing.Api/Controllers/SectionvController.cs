using Microsoft.AspNetCore.Mvc;
using ABCPublishing.Api.Models;
using ABCPublishing.Api.Repositories;

namespace ABCPublishing.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SectionvController(ISectionRepository sectionRepo) : ControllerBase
{
    private readonly ISectionRepository _sectionRepo = sectionRepo;

    [HttpGet]
    public ActionResult<Dictionary<string, BookSection>> GetAllSections()
    {
        var sections = _sectionRepo.GetAllSections();

        if (sections == null)
        {
            return NotFound();
        }

        return Ok(sections);
    }

    [HttpGet("{sectionName}")]
    public ActionResult<BookSection> GetSection(string sectionName)
    {
        var section = _sectionRepo.GetSection(sectionName);

        if (section == null)
        {
            return NotFound();
        }

        return Ok(section);
    }
}
