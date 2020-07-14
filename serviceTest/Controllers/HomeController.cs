using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace serviceTest.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [EnableCors]
        [HttpGet()]
        [Route("api/[controller]/product")]
        public async Task<IActionResult> product()
        {
            string result = "";
            List<ProductEntity> respData = new List<ProductEntity>()
            {
                new ProductEntity() {
                     productID = 2, productNameEN = "Japan Rail Pass (All Area) Ordinary Car (14 Days)", price = 13180, productImgURL_EN = "https://dev.trovefin.com/MKP.Service.Product/images/product/01 - All Area/01---All-Area_01.jpg"

                },
                 new ProductEntity()
                {
                     productID = 3, productNameEN = "Japan Rail Pass (All Area) Ordinary Car (21 Days)", price = 16860, productImgURL_EN = "https://dev.trovefin.com/MKP.Service.Product/images/product/01 - All Area/01---All-Area_01.jpg"

                },
                  new ProductEntity()
                {
                     productID = 4, productNameEN = "Japan Rail Pass (All Area) Green Car (7 Days)", price = 16860, productImgURL_EN = "https://dev.trovefin.com/MKP.Service.Product/images/product/01 - All Area/01---All-Area_02.jpg"

                },
                    new ProductEntity()
                {
                     productID = 5, productNameEN = "Japan Rail Pass (All Area) Green Car (14 Days)", price = 13180, productImgURL_EN = "https://dev.trovefin.com/MKP.Service.Product/images/product/01 - All Area/01---All-Area_02.jpg"

                },
            };
            result = JsonSerializer.Serialize(respData);



            return StatusCode(200, result);
        }
    }
}
