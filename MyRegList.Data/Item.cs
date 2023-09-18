using System;
using System.Collections.Generic;

namespace MyRegList.Data.Models;

public partial class Item
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Description { get; set; } = null!;

    public string? ImageUrl { get; set; }

    public string Type { get; set; } = null!;
}
