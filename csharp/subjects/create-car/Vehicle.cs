using System;
using System.Collections.Generic;

namespace CSharpDiscovery.Quest04
{
    public abstract class Vehicule
    {
        public string Brand { get; set; }
        public string Color { get; set; }
        public int CurrentSpeed { get; set; }

        public static List<Vehicule> ListOfVehicules { get; set; } = new List<Vehicule>();
        public Vehicule()
        {
            Brand = "Unknown";
            Color = "Unknown";
            CurrentSpeed = 0;
            _AddToList();
        }
        public Vehicule(string Brand, string Color, int CurrentSpeed = 0)
        {
            this.Brand = Brand;
            this.Color = Color;
            this.CurrentSpeed = CurrentSpeed;
            _AddToList();
        }

        public string PrintSpeed()
        {
            return CurrentSpeed > 0 ? $"moving at {CurrentSpeed}km/h." : "stopped.";
        }

        private void _AddToList()
        {
            ListOfVehicules.Add(this);
        }

        public static void WhoIsHere()
        {
            Console.WriteLine("---------------------------------");
            if (ListOfVehicules.Count > 0)
            {
                Console.WriteLine("Vehicules on the road :");
                foreach (Vehicule item in ListOfVehicules)
                {
                    Console.WriteLine("- " + item.ToString() + ", " + item.PrintSpeed());
                }
            }
            else
            {
                Console.WriteLine("Nobody's on the road for now !");
            }
            Console.WriteLine("---------------------------------");
        }
    }
}