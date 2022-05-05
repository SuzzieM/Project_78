var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg",
"https://i.postimg.cc/430NfrHs/great-grandpa.jpg", 
"https://i.postimg.cc/Kv1F091M/depositphotos-12583608-stock-photo-senior-reading.jpg", 
"https://i.postimg.cc/Pq0TsY0q/grandpa.jpg", 
"https://i.postimg.cc/XYz0d9jg/grandma.jpg", 
"https://i.postimg.cc/QtnNMvBj/father-s-brother.jpg", 
"https://i.postimg.cc/qBxVQPBq/father-s-brother-wife.jpg", 
"https://i.postimg.cc/Qtq4krgr/cute-born-sister.png", 
"https://i.postimg.cc/wjMnFtMX/father.jpg" , 
"https://i.postimg.cc/ryPC6mwP/mother.jpg", 
"https://i.postimg.cc/JnL6wtrd/sister.jpg", 
"https://i.postimg.cc/Jnyc6Dkm/11-year-old-daughter.png"];
var names = ["Family Book",
"Shree Jai Gopal Malhotra ", 
"Shree Mata NandRani Malhotra ", 
"Subhash Malhotra ", 
"Sushma Malhotra ", 
"Pankaj Malhotra ", 
"Nishi Malhotra ", 
"Geetanshi Malhotra ", 
"Neeraj Malik ", 
"Preeti Malik ", 
"Charvi Malik ", 
"Sanika Malik"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 11
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
