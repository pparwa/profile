const colors = document.querySelectorAll('.color')
const followbtn = document.getElementById('follow')
followbtn.addEventListener('click',function()
{
    var number =Number( document.getElementById('number').innerHTML )
    console.log(number)
     document.getElementById('number').innerHTML =  number + 1
})
console.log(colors)

colors.forEach(function(item)
{
    item.addEventListener('click',function(event)
    {
        document.documentElement.style.setProperty("--them-color", event.target.style.backgroundColor) 
    })
})
