using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class RegisterRequestDTO
{
    [Required]
    public string UserName { get; set; }
    [Required]
    public string Password { get; set; }
    public string UserEmail { get; set; }
}