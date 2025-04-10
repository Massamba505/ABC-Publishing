using Microsoft.AspNetCore.Mvc;
using ABCPublishing.Api.Models;
using ABCPublishing.Api.Service.Interfaces;

namespace ABCPublishing.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SectionController(ISectionService sectionService) : ControllerBase
{
    private readonly ISectionService _sectionService = sectionService;

    [HttpGet]
    public ActionResult<Dictionary<string, Section>> GetAllSections()
    {
        var sections = _sectionService.GetAllSections();

        if (sections == null)
        {
            return NotFound();
        }

        return Ok(sections);
    }

    [HttpGet("{sectionName}")]
    public ActionResult<Section> GetSection(string sectionName)
    {
        var section = _sectionService.GetSection(sectionName);

        if (section == null)
        {
            return NotFound();
        }

        return Ok(section);
    }
}
