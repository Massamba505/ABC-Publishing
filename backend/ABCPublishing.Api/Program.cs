using ABCPublishing.Api.Repositories;

namespace ABCPublishing.Api;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.

        builder.Services.AddControllers();
        
        var filePath = builder.Configuration.GetValue<string>("AppSettings:SherlockFilePath");

        builder.Services.AddSingleton<ISectionRepository>(provider =>
            new SectionRepository(
                builder.Configuration.GetValue<string>("AppSettings:SherlockFilePath")
                ));

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
        }

        app.UseHttpsRedirection();

        app.UseAuthorization();


        app.MapControllers();

        app.Run();
    }
}
