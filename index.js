function countTrue(arr){
    //declaração da variável count
	var count = 0;
    //filtragem e contagem dos valores verdadeiros com base na variável "count"
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === true){
			count++;
		}
	}
    //retornar os valores da variável "count"
	return count;
}