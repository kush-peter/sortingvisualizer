export const mergeSort = array => {
    if (array.length===1) return array;
    const mid = Math.floor(array.length/2);
    const h1 = mergeSort(array.slice(0, mid));
    const h2 = mergeSort(array.slice(mid));
    const sortedArray = [];

    let i = 0, j = 0;
    while(i < h1.length && j < h2.length){
        if(h1[i]<h2[j]){
            sortedArray.push(h1[i++]);
        }   
        else{
            sortedArray.push(h2[j++]);
        }
    }
    while (i<h1.length) sortedArray.push(h1[i++]);
    while (j<h2.length) sortedArray.push(h2[j++]);

    return sortedArray;
};