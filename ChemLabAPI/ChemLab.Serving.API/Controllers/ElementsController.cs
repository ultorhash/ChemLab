using ChemLab.Serving.AppService.Data.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace ChemLab.Serving.API.Controllers
{
    [ApiExplorerSettings(GroupName = "Resources")]
    [EnableCors]
    [ApiController]
    [Route("/api/[controller]")]
    public class ElementsController : ControllerBase
    {
        private readonly IElementsRepository _repository;

        public ElementsController(IElementsRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<bool>> GetElements()
        {
            var elements = await _repository.GetElementsAsync();
            return Ok(elements);
        }
    }
}
