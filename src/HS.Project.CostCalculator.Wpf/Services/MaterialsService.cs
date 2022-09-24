using System.Collections.Generic;
using HS.Project.CostCalculator.Wpf.Entities;

namespace HS.Project.CostCalculator.Wpf.Services;

public class MaterialsService : IMaterialsService
{
    public List<Material> Get()
    {
        return new List<Material>
        {
            new() { Name = "Test Material #1" },
            new() { Name = "Test Material #2" },
            new() { Name = "Test Material #3" }
        };
    }
}