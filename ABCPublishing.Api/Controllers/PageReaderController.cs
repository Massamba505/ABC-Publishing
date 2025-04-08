using ABCPublishing.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace ABCPublishing.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PageReaderController : ControllerBase
    {
        private readonly string _bookPath = "C:/bootcamps/coding/ABC Publishing/Backend/ABCPublishing/ABCPublishing.Api/BookData/the-adventures-of-sherlock-holmes.json";

        [HttpGet("section/{sectionName}")]
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
