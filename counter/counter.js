const para= document.getElementsByTagName('p')
let count=0;
function incr()
{
    if (count<25)
    {
    count++;
    para[0].textContent=count;
    para[1].textContent="incremented"
    }
    else
    {
        alert("should be less than 25")
    }
    if (count%2==0)
    {
        para[2].textContent="even"
    }
    else
    {
        para[2].textContent="odd"
    }
}
function decr()
{
    if (count>0)
    {
    count--;
    para[0].textContent=count;
    para[1].textContent="decremented"
    }
    else
    {
        alert("should be greater than 0")
    }
    if (count%2==0)
    {
        para[2].textContent="even"
    }
    else
    {
        para[2].textContent="odd"
    }
}
function reset()
{
    count=0;
    para[0].textContent=count;
    para[1].textContent=""
}