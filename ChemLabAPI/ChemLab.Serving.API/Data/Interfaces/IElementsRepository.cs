using ChemLab.Serving.AppService.Data.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ChemLab.Serving.AppService.Data.Interfaces
{
    public interface IElementsRepository
    {
        Task<List<Element>> GetElementsAsync();
    }
}
