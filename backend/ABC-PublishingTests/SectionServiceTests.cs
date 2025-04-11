using ABCPublishing.Api.Models;
using ABCPublishing.Api.Repositories.Interfaces;
using ABCPublishing.Api.Service.Implementations;
using ABCPublishing.Api.Service.Interfaces;
using NSubstitute;

namespace ABC_PublishingTests;

public class SectionServiceTests
{
    private ISectionRepository _sectionRepository;
    private ISectionService _sectionService;

    [SetUp]
    public void SetUp()
    {
        _sectionRepository = Substitute.For<ISectionRepository>();
        _sectionService = new SectionService(_sectionRepository);
    }

    [Test]
    public void GIVEN_SectionExists_WHEN_GettingThatSection_THEN_ReturnSection()
    {
        // Arrange
        var sectionName = "bohemia-chapter-1";
        Section expectedSection = new() { Title = "Chapter I", Content = new(), Navigation = new() };
        _sectionRepository.GetSection(sectionName).Returns(expectedSection);

        // Act
        var result = _sectionService.GetSection(sectionName);

        // Assert
        Assert.That(result?.Title, Is.EqualTo(expectedSection.Title));
    }

    [Test]
    public void GIVEN_SectionDoesNotExist_WHEN_GettingThatSection_THEN_ReturnNull()
    {
        // Arrange
        var sectionName = "non-existent-section";
        _sectionRepository.GetSection(sectionName).Returns((Section?)null);

        // Act
        var result = _sectionService.GetSection(sectionName);

        // Assert
        Assert.That(result, Is.Null);
    }
}
