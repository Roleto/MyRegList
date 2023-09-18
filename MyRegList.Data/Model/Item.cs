using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyRegList.Data.Model;

public partial class Item
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [StringLength(20)]
    public string Name { get; set; } = null!;

    [StringLength(240)]
    public string Description { get; set; } = null!;

    [StringLength(240)]
    public string? ImageUrl { get; set; }

    [StringLength(20)]
    public string Type { get; set; } = null!;  
}
