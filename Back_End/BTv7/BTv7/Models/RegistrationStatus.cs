﻿using BTv7.Repositories;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BTv7.Models
{
    public class RegistrationStatus : IValidatableObject
    {
        [Key]
        public int ID { get; set; }
        [Required]
        public string Status { get; set; }


        [JsonIgnore]
        public virtual ICollection<Login> Logins { get; set; }


        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            List<ValidationResult> errors = new List<ValidationResult>();
            RegistrationStatusRepository db = new RegistrationStatusRepository();

            if (db.GetAll().Where(x => x.Status == Status).FirstOrDefault() != null)
            {
                errors.Add(new ValidationResult($"{nameof(Status)} exists already.", new List<string> { nameof(Status) }));
            }





            return errors;
        }
    }
}