namespace API.Entities
{
    public class AppUser
    {
        
        public long Id { get; set; }
        public string UserName { get; set; }
        public string UserEmail { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}
