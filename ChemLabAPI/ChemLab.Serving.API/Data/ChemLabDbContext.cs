using ChemLab.Serving.AppService.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChemLab.Serving.AppService.Data
{
    public class ChemLabDbContext : DbContext
    {
        public ChemLabDbContext(DbContextOptions<ChemLabDbContext> options)
            : base(options)
        {

        }

        public DbSet<Element> Elements { get; set; }
    }
}
