using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HS.Project.CostCalculator.Wpf.Entities;

namespace HS.Project.CostCalculator.Wpf.Services
{
    public interface IMaterialsService
    {
        List<Material> Get();
    }
}
