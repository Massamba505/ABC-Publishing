namespace ABCPublishing.Api.Models;

public class BookSection
{
    public string Title { get; set; }
    public List<string> Content { get; set;}
    public List<NavigationLink> Navigation { get; set;}
}
