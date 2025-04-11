using ABCPublishing.Api.Controllers;
using ABCPublishing.Api.Models;
using ABCPublishing.Api.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;
using NSubstitute;

namespace ABC_PublishingTests;

public class SectionControllerTests
{
    private ISectionService _sectionService;
    private SectionController _controller;

    [SetUp]
    public void SetUp()
    {
        _sectionService = Substitute.For<ISectionService>();
        _controller = new SectionController(_sectionService);
    }

    [Test]
    public void GIVEN_SectionExists_WHEN_GetSectionIsCalled_THEN_ReturnOkWithSection()
    {
        // Arrange
        var sectionName = "bohemia-chapter-1";
        var expectedSection = new Section { Title = "Chapter I", Content = new(), Navigation = new() };
        _sectionService.GetSection(sectionName).Returns(expectedSection);

        // Act
        var result = _controller.GetSection(sectionName);

        // Assert
        Assert.That(result.Result, Is.InstanceOf<OkObjectResult>());
        var okResult = (OkObjectResult)result.Result;
        Assert.That(okResult.Value, Is.EqualTo(expectedSection));
    }

    [Test]
    public void GIVEN_SectionDoesNotExist_WHEN_GetSectionIsCalled_THEN_ReturnNotFound()
    {
        // Arrange
        var sectionName = "non-existent-section";
        _sectionService.GetSection(sectionName).Returns((Section?)null);

        // Act
        var result = _controller.GetSection(sectionName);

        // Assert
        Assert.That(result.Result, Is.InstanceOf<NotFoundResult>());
    }
}
