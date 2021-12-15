using ChemLab.Serving.AppService.Data.Interfaces;
using ChemLab.Serving.AppService.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ChemLab.Serving.AppService.Data
{
    public class ElementsRepository : IElementsRepository
    {
        private readonly ChemLabDbContext _context;

        public ElementsRepository(ChemLabDbContext context)
        {
            _context = context;
        }

        public async Task<List<Element>> GetElementsAsync()
        {
            return await _context.Elements.ToListAsync();
        }
    }
}
