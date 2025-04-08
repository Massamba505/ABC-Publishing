using ABCPublishing.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace ABCPublishing.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SectionController : ControllerBase
    {
        private readonly string _bookPath = "./BookData/the-adventures-of-sherlock-holmes.json";

        [HttpGet("{sectionName}")]
        public ActionResult<BookSection> GetSection(string sectionName)
        {
            var bookService = new BookService(_bookPath);
            var section = bookService.GetSection(sectionName);

            if (section == null)
            {
                return NotFound();
            }
            
            return Ok(section);
        }
    }
}
