function cadastra() {
	//cria um objeto
	var objeto = new Object ();
	//atribui valores as propriedades
	objeto.nome = prompt("Informe o nome") ;
	objeto.p1 = parseFloat(prompt("Informe p1"));
	objeto.p2 = parseFloat(prompt("Informe p2"));
	objeto.media = (objeto.p1 + objeto.p2) /2 ;
	//adciono o objeto no vetor
	vetor.push(objeto);
	alert("Aluno cadastrado com sucesso")
}

	function lista(){
		var saida ="";
		for(var i=0;i<vetor.length;i++){
			saida = saida +(vetor[i].nome +""+ vetor[i].p1+vetor[i].p2+vetor[i].media)+"<br/>";
			if (vetor[i].media>=6){
				saida = saida+" - Aprovado";
			}
			else if (vetor[i].media>=3) {
				saida=saida+" - Exame";
			}
			else saida = saida + "- reprovado";
		}
		document.getElementById("lista").innerHTML = saida;
	}
	function limpa(){
		vetor = [];
	}
	function maiorMedia(){
		maior = vetor[0].media; //assumo a maior media
		for(var i=1;i<vetor.length;i++){
			if (vetor[i].media>maior){
				maior = vetor[i].media;
				nome = vetor[i].nome;
			}
		}
		alert ("Nome do aluno com maior media"+nome);
	}
