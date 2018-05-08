function cadastra() {
	//cria um objeto
	var objeto = new Object ();
	//atribui valores as propriedades
	objeto.nome = prompt("Informe o nome") ;
	objeto.p1 = parsefloat.(prompt("Informe p1"));
	objeto.p2 = parsefloat.(prompt("Informe p2"));
	objeto.media = (objeto.p1+objeto.p2) /2 ;
	//adciono o objeto no vetor
	vetor.push(objeto);
	alert("Aluno cadastrado com sucesso")
}

	function lista(){
		var saida ="";
		for(var i=0;i<vetor.length;i++){
			saida = saida +(vetor[i].nome +""+ vetor[i].p1+vetor[i].p2+vetor[i].media)+"<br/>";
		}
		documento.getElementById("lista").innerHTML = saida;
	}

}