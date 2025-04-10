using ABCPublishing.Api.Data;
using ABCPublishing.Api.Repositories.Implementations;
using ABCPublishing.Api.Repositories.Interfaces;
using ABCPublishing.Api.Service.Implementations;
using ABCPublishing.Api.Service.Interfaces;
using Scalar.AspNetCore;

namespace ABCPublishing.Api;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.

        builder.Services.AddControllers();

        builder.Services.AddSingleton<DataSource>(provider =>
            new DataSource(
                builder.Configuration.GetValue<string>("AppSettings:SherlockFilePath")
                ));

        builder.Services.AddScoped<ISectionRepository, SectionRepository>();
        builder.Services.AddScoped<ISectionService, SectionService>();

        // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
        builder.Services.AddOpenApi();

        builder.Services.AddCors(option =>
        {
            option.AddPolicy("CorsPolicy", policy =>
            {
                policy.WithOrigins("http://localhost:5173")
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials();
            });
        });

        var app = builder.Build();

        app.UseCors("CorsPolicy");

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.MapOpenApi();
            app.MapScalarApiReference();
        }

        app.UseHttpsRedirection();

        app.UseAuthorization();


        app.MapControllers();

        app.Run();
    }
}
