using System.Collections.ObjectModel;
using HS.Project.CostCalculator.Wpf.Entities;
using HS.Project.CostCalculator.Wpf.Services;

namespace HS.Project.CostCalculator.Wpf.Materials;

public class MaterialsListViewModel
{
    private readonly IMaterialsService _materialsService = new MaterialsService();

    public MaterialsListViewModel()
    {
        Materials = new ObservableCollection<Material>(_materialsService.Get());
    }

    public ObservableCollection<Material> Materials { get; set; }
}