function Heap()
{
    c_delay =0;
    HeapSort(array_size);
    enable_buttons();
}
function HeapiFy(index, num)
{
    div_update(divs[index], div_sizes[index], "yellow");
    var largest = index;
    var l = 2*index+1;
    var r = 2*index+2;
    if(l<num && div_sizes[l]>div_sizes[largest])
        largest = l;
    if(r<num && div_sizes[r]>div_sizes[largest])
        largest  =r;
    if(largest!=index){
        var temp = div_sizes[index];
        div_sizes[index] = div_sizes[largest];
        div_sizes[largest] = temp;
        div_update(divs[index], div_sizes[index], "red");
        div_update(divs[largest], div_sizes[largest], "red");
        HeapiFy(largest, num);
    }
}

function HeapSort(num)
{
    for(var i = Math.floor(num/2)-1; i>=0; i--){
        HeapiFy(i, num);
    }
    for(var i = num-1; i>0; i--){
        var tempo = div_sizes[0];
        div_sizes[0] = div_sizes[i];
        div_sizes[i] = tempo;
        div_update(divs[0], div_sizes[0], "red");
        div_update(divs[i], div_sizes[i], "green");
        HeapiFy(0, i);
    }
    div_update(divs[i], div_sizes[i], "green");     
}