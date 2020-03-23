new Vue({
  el: '#app',
  data() {
  return {
	time:  ['21 de Março 2020 - 17:53'],
	category: [
	 {
	  category_id: "1",
	  category_name: "Caldas da Rainha"
	}, 
	{
	  category_id: "2",
	  category_name: "Lisboa"
	},
	{
	  category_id: "3",
	  category_name: "Porto"
	}

	],
	active: '1',
	destaques: [
	 {
		"imagem":"img/avaliarsintomas.jpg",
		"nome":"Avaliar Sintomas - Covid19",
		"categoria":"Covid-19",
		"desc":"Aprenda a fazer a despiste ao Covid-19.",
		"linkUm":"https://www.sns24.gov.pt/avaliar-sintomas/?intro-sc=covid-19",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
		"imagem":"img/covid19duvidas.jpg",
		"nome":"COVID19 dúvidas respondidas por profissionais de saúde",
		"categoria":"Covid-19",
		"desc":"Grupo do Facebook com profissionais de saúde que esclarecem dúvidas sobre o Covid-19.",
		"linkUm":"https://www.facebook.com/groups/covid19duvidas/",
		"linkUmTxt":"Grupo de Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	 {
		"imagem":"img/helpcaldascovid.jpg",
		"nome":"Help Caldas Covid-19",
		"categoria":"Ajuda",
		"desc":"VOLUNTÁRIOS! Iniciativa popular para ajudar quem mais precisa perto de si. ",
		"linkUm":"https://chat.whatsapp.com/C4XX81xljPT5ttb8ZrnVkB",
		"linkUmTxt":"Chat WhatsApp",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": "1"
	},
	{
		"imagem":"img/wemendesbatas.jpg",
		"nome":"Ajuda para os nossos profissionais de saúde.",
		"categoria":"Ajuda",
		"desc":"AJUDEM!Túnicas, batas e toucas para os nossos profissionais de saúde - 262 833 937",
		"linkUm":"https://www.facebook.com/wemendessisters/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": "1"
	},
	{
		"imagem":"img/merceariazen.jpg",
		"nome":"Mercearia Zen",
		"categoria":"Mercearia",
		"desc":"Minimercado, frutas, legumes, mercearia, peixe congelado e chás. Super alimentos. Entrega em casa ou drive-thru. 916 830 665",
		"linkUm":"https://www.facebook.com/MerceariaZen/",
		"linkUmTxt":"Facebook",
		"linkDois":"mailto:zennarius@gmail.com",
		"linkDoisTxt":"Email",
		"linkTres":"https://www.instagram.com/merceariazen/",
		"linkTresTxt":"Instagram",
		"category_id": "1"
	},

	 {
		"imagem":"img/bior.jpg",
		"nome":"Mercearia biológicos da rainha",
		"categoria":"Mercearia",
		"desc":"Frutas, legumes e mercearia seca. Compras presenciais e drive thru. 966 568 998",
		"linkUm":"https://www.facebook.com/biologicosrainha/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": "1"
	},
	 {
		"imagem":"img/teatrodonamaria.jpg",
		"nome":"Teatro Nacional D. Maria II",
		"categoria":"Entretenimento",
		"desc":"Teatro em casa.",
		"linkUm":"https://www.facebook.com/TNDMII/",
		"linkUmTxt":"Facebook",
		"linkDois":"https://www.tndm.pt/pt/calendario/d-maria-ii-em-casa/",
		"linkDoisTxt":"Site",
		"linkTres":"https://www.instagram.com/tndmii/",
		"linkTresTxt":"Instagram",
		"category_id": [1,2,3]
	},
	{
		"imagem":"img/cognitivus.jpg",
		"nome":"Centro Explicações Cognitivus",
		"categoria":"Para os mais novos",
		"desc":"Centro de explicações com regime online - 967 561 206",
		"linkUm":"https://www.facebook.com/Cognitivus.centrodeestudos/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": "1"
	},
	{
		"imagem":"img/oclock.jpg",
		"nome":"O’Clock Foz do Arelho",
		"categoria":"Comida em casa",
		"desc":"Take away e entregas em casa - 913 890 113 - 937 450 983",
		"linkUm":"https://www.facebook.com/oclockfozdoarelho/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": "1"
	},
	{
		"imagem":"img/jardimcafe.jpg",
		"nome":"Jardim Caffé",
		"categoria":"Comida em casa",
		"desc":"Take away - 937 270 965",
		"linkUm":"https://www.facebook.com/Jardim-Caff%C3%A9-250086612527946/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": "1"
	},
	{
		"imagem":"img/clinicaveterenariaobidos.jpg",
		"nome":"Clínica Veterinária Óbidos",
		"categoria":"Animais",
		"desc":"Ração, desparasitante e medicação - Entregam em casa - 927 549 555 - 262 959 072",
		"linkUm":"https://www.facebook.com/CVObidos/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": "1"
	},
	{
		"imagem":"img/farmaciaalvorinha.jpg",
		"nome":"Farmácia de Alvorninha",
		"categoria":"Farmácias",
		"desc":"Entrega em casa 262 930 706 - farmacia.alvorninha@gmail.com",
		"linkUm":"mailto:farmacia.alvorninha@gmail.com",
		"linkUmTxt":"Email",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": "1"
	},
	{
		"imagem":"img/comuniti.jpg",
		"nome":"Comuniti",
		"categoria":"Hipermercado",
		"desc":"Compras online e entrega em casa.",
		"linkUm":"https://comuniti.pt/pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	}

	],
	hipermercados: [
	  {
		"imagem":"img/continente.png",
		"nome":"Continente online",
		"categoria":"Hipermercado",
		"desc":"Compras online e entrega em casa.",
		"linkUm":"https://www.continente.pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	 {
		"imagem":"img/elecrerc.jpg",
		"nome":"E.Lecrerc online",
		"categoria":"Hipermercado",
		"desc":"Compras online e entrega no drive in. O site está muito lento.",
		"linkUm":"https://www.e-leclerc.pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": "1"
	},
	 {
		"imagem":"img/auchan.gif",
		"nome":"Auchan online",
		"categoria":"Hipermercado",
		"desc":"Compras online e entrega em casa. Existe uma fila de espera de uma hora para entrar no site.",
		"linkUm":"https://www.auchan.pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
		"imagem":"img/dott.png",
		"nome":"Dott",
		"categoria":"Hipermercado",
		"desc":"Compras online e entrega em casa.",
		"linkUm":"https://dott.pt/pt/campaign/envios-gratuitos-bens-essenciais",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
		"imagem":"img/comuniti.jpg",
		"nome":"Comuniti",
		"categoria":"Hipermercado",
		"desc":"Compras online e entrega em casa.",
		"linkUm":"https://comuniti.pt/pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	 {
		"imagem":"img/bneed.jpg",
		"nome":"Bneed",
		"categoria":"Hipermercado",
		"desc":"Serviço de shopping online na cidade do Porto.",
		"linkUm":"http://www.bneed.pt/global/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id": "3"
	},
	 {
		"imagem":"img/ninghtshift.jpg",
		"nome":"A Night Shift",
		"categoria":"Hipermercado",
		"desc":"Serviço de entrega de alguns produtos de supermercado durante a noite",
		"linkUm":"https://www.nightshift.com.pt/pt/sobre-nos",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id": "2"
	},
	{
		"imagem":"img/goodafter.jpg",
		"nome":"Good After",
		"categoria":"Hipermercado",
		"desc":" Dedica-se à venda de produtos que se encontram perto do fim do prazo de validade.",
		"linkUm":"https://goodafter.com/pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id": [1,2,3]
	}

   

	],
	minimercados: [
	  {
		"imagem":"img/mereceariapena.jpg",
		"nome":"Mercearia Pena",
		"categoria":"Minimercados",
		"desc":"Entrega em casa - 262 832 580",
		"linkUm":"https://www.merceariapena.pt/",
		"linkUmTxt":"Site",
		"linkDois":"https://www.facebook.com/mercearia.pena/",
		"linkDoisTxt":"Facebook",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": "1"
	},
	 {
		"imagem":"img/aloja.jpg",
		"nome":"A loja",
		"categoria":"Minimercados",
		"desc":"Entrega em casa",
		"linkUm":"https://www.facebook.com/A-Loja-333106493857374/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": "1"
	},
	 {
		"imagem":"img/bancadacristina.jpg",
		"nome":"Banca da Cristina",
		"categoria":"Minimercados",
		"desc":"Contactar a página por MP.",
		"linkUm":"https://www.facebook.com/bancadacristina/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": "1"
	},
	{
		"imagem":"img/gelrainha.jpg",
		"nome":"Gelrainha",
		"categoria":"Outros",
		"desc":"Entrega em casa.",
		"linkUm":"https://www.facebook.com/336596157004472/posts/507739116556841/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": "1"
	},
	{
		"imagem":"img/graneldarainha.jpg",
		"nome":"Granel da Rainha",
		"categoria":"Outros",
		"desc":"Entrega em casa por correio.",
		"linkUm":"https://www.facebook.com/rainhagranel/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": "1"
	},
	{
		"imagem":"img/default.jpg",
		"nome":"Gaeiroeste",
		"categoria":"Outros",
		"desc":"Carnes frescas e congeladas. Congelados de: bacalhau, peixe, crustáceos, salgados e bolos. 932 299 133",
		"linkUm":"https://www.facebook.com/gaeiroeste.ramos.9",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": "1"
	},
	{
		"imagem":"img/default.jpg",
		"nome":"Raíz D Oeste Talho Vitor Eustáquio",
		"categoria":"Outros",
		"desc":"Talho, bebidas, mercearia fina, entrega em casa. 918 110 910 - raizdoeste@gmail.com",
		"linkUm":"https://www.facebook.com/Ra%C3%ADz-D-Oeste-Talho-Vitor-Eust%C3%A1quio-2127081267341541/",
		"linkUmTxt":"Facebook",
		"linkDois":"mailto:raizdoeste@gmail.com",
		"linkDoisTxt":"Email",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": "1"
	},
	{
		"imagem":"img/hortapedescalco.jpg",
		"nome":"Horta do Pé Descalço",
		"categoria":"Outros",
		"desc":"Hortícolas, entregam em casa.",
		"linkUm":"https://www.facebook.com/hortadopedescalco/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": "1"
	},
	{
		"imagem":"img/default.jpg",
		"nome":"Gilma Trancoso",
		"categoria":"Outros",
		"desc":"Hortícolas, entregam em casa. Encomendas: 926 075 187",
		"linkUm":"https://www.facebook.com/gilma.trancoso",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": "1"
	},
	{
		"imagem":"img/beeorganic.jpg",
		"nome":"Beeorganic",
		"categoria":"Outros",
		"desc":"Hortícolas de origem biológica – Ponto de entrega - 918 363 507",
		"linkUm":"https://www.facebook.com/beeorganic.pt/",
		"linkUmTxt":"Facebook",
		"linkDois":"http://beeorganic.pt/",
		"linkDoisTxt":"Site",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": "1"
	},
	{
		"imagem":"img/biosmercado.jpg",
		"nome":"BiO's Mercado Biológico",
		"categoria":"Outros",
		"desc":"Verduras, horticulas, e mercearias alimentícias biologicas. Atendimento à porta. 917 832 582",
		"linkUm":"https://www.facebook.com/BiOsCaldasRainha/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": "1"
	},
	{
		"imagem":"img/osprodutosdaquinta.jpg",
		"nome":"Os Produtos de Quinta",
		"categoria":"Outros",
		"desc":"Verduras, horticulas, frutos, etc. Entregam em casa.",
		"linkUm":"https://www.facebook.com/osprodutosdequinta/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": "1"
	},
	{
		"imagem":"img/sandraloirinha.jpg",
		"nome":"Sandra loirinha",
		"categoria":"Outros",
		"desc":"Verduras, horticulas, frutos, etc. Mensagem privada pelo Facebook",
		"linkUm":"https://www.facebook.com/hortasdasandraepaulo/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": "1"
	},
	{
		"imagem":"img/drogariadascaldas.jpg",
		"nome":"Drogaria das Caldas",
		"categoria":"Outros",
		"desc":"Drogaria com horário condicionado e que pode fazer entregas - 262 108 249",
		"linkUm":"https://www.facebook.com/DrogariaDasCaldas/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": "1"
	},
	{
		"imagem":"img/merceariazen.jpg",
		"nome":"Mercearia Zen",
		"categoria":"Mercearia",
		"desc":"Minimercado, frutas, legumes, mercearia, peixe congelado e chás. Super alimentos. Entrega em casa ou drive-thru. 916 830 665",
		"linkUm":"https://www.facebook.com/MerceariaZen/",
		"linkUmTxt":"Facebook",
		"linkDois":"mailto:zennarius@gmail.com",
		"linkDoisTxt":"Email",
		"linkTres":"https://www.instagram.com/merceariazen/",
		"linkTresTxt":"Instagram",
		"category_id": "1"
	},
	{
		"imagem":"img/bior.jpg",
		"nome":"Mercearia biológicos da rainha",
		"categoria":"Mercearia",
		"desc":"Frutas, legumes e mercearia seca. Compras presenciais e drive thru. 966 568 998",
		"linkUm":"https://www.facebook.com/biologicosrainha/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": "1"
	},
	 {
		"imagem":"img/hortadobairro.jpg",
		"nome":"Horta do Bairro",
		"categoria":"Minimercados",
		"desc":"Entrega de produtos horticolas em sua casa.",
		"linkUm":"http://hortadobairro.pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : "2"
	},
	{
		"imagem":"img/cuizeat.jpg",
		"nome":"Cuizeat",
		"categoria":"Minimercados",
		"desc":"Entrega produtos alimentares tendo como base receitas.",
		"linkUm":"https://www.cuizeat.com/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : "2"
	},
	{
		"imagem":"img/aquintinha.jpg",
		"nome":"A Quintinha",
		"categoria":"Minimercados",
		"desc":"Frutas e legumes biológicos.",
		"linkUm":"http://www.quintinha.com/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : "3"
	},
	{
		"imagem":"img/biohabitos.jpg",
		"nome":"Bio Habitus",
		"categoria":"Minimercados",
		"desc":"Frutas, legumes pão e produtos a granel - 966 885 052",
		"linkUm":"https://www.facebook.com/BioHabitus/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : "3"
	},
	{
		"imagem":"img/bioemcasa.jpg",
		"nome":"Bio em Casa",
		"categoria":"Minimercados",
		"desc":"Frutas e legumes biológicos e locais.",
		"linkUm":"https://www.bioemcasa.com/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : "3"
	},
	{
		"imagem":"img/hortaaporta.jpg",
		"nome":"Horta à Porta",
		"categoria":"Minimercados",
		"desc":"Frutas e legumes biológicos.",
		"linkUm":"http://www.hortaaporta.com/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : "3"
	},
	{
		"imagem":"img/padariaribeiro.jpg",
		"nome":"Padaria Ribeiro",
		"categoria":"Padaria",
		"desc":"Padaria - 916 824 173",
		"linkUm":"https://www.instagram.com/padaria.ribeiro/",
		"linkUmTxt":"Instagram",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : "3"
	},
	{
		"imagem":"img/default.jpg",
		"nome":"Trindade Pão Artesanal",
		"categoria":"Padaria",
		"desc":"Padaria - Encomendar com 48h de antecedência.",
		"linkUm":"mailto:trindadepaoartesanal@gmail.com",
		"linkUmTxt":"Email",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : "3"
	},
	{
		"imagem":"img/tamaras.jpg",
		"nome":"Tâmaras",
		"categoria":"Pastelaria",
		"desc":"Pastelaria Vegan.",
		"linkUm":"https://www.tamaraspastelariasaudavel.com/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : "3"
	},
	{
		"imagem":"img/biodiversos.jpg",
		"nome":"Biodiversus",
		"categoria":"Hortícolas",
		"desc":"Entrega de produtos biológicos.",
		"linkUm":"http://www.biodiversus.pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : "3"
	},
	{
		"imagem":"img/robi.jpg",
		"nome":"Lojas Robi",
		"categoria":"Supermercado",
		"desc":"Supermercado e Mini-mercados com Talho, Fruta & Legumes, Mercearia, Congelados - 255 962 299",
		"linkUm":"http://www.robi.com.pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : "3"
	},
	{
		"imagem":"img/obradorta.jpg",
		"nome":"Obra d'Horta",
		"categoria":"Hortícolas",
		"desc":"Hortícolas e Frutas Biológicos",
		"linkUm":"http://obradehorta.pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : "3"
	},
	{
		"imagem":"img/orapazdaquinta.jpg",
		"nome":"O Rapaz da Quinta",
		"categoria":"Hortícolas",
		"desc":"Hortícolas e Frutas Biológicos - 961 057 377",
		"linkUm":"https://www.facebook.com/orapazdaquinta",
		"linkUmTxt":"Facebook",
		"linkDois":"mailto:orapazdaquinta@gmail.com",
		"linkDoisTxt":"Email",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : "3"
	},
	{
		"imagem":"img/humusagri.jpg",
		"nome":"Húmus - Agricultura Biológica",
		"categoria":"Hortícolas",
		"desc":"Hortícolas e Frutas Biológicos - 925 229 824",
		"linkUm":"https://www.facebook.com/humus.bio/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : "3"
	},
	{
		"imagem":"img/default.jpg",
		"nome":"Talho Cecília Ferreira",
		"categoria":"Talho",
		"desc":"Talho - 226 182 659",
		"linkUm":"tel:+351226182659",
		"linkUmTxt":"Telefone",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : "3"
	},
	{
		"imagem":"img/default.jpg",
		"nome":"Peixaria Celeste Cadilhe",
		"categoria":"Peixaria",
		"desc":"Peixaria - 226 180 110",
		"linkUm":"tel:+351226180110",
		"linkUmTxt":"Telefone",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : "3"
	},
	{
		"imagem":"img/padariaformosa.jpg",
		"nome":"Padaria Formosa",
		"categoria":"Padaria",
		"desc":"Padaria Pastelaria - 226 180 781",
		"linkUm":"http://www.padariaformosa.com/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : "3"
	},
	{
		"imagem":"img/cestaverde.jpg",
		"nome":"Cesta Verde",
		"categoria":"Mercearia",
		"desc":"Legumes, frutas, ervas aromáticas, a granel: frutos secos, leguminosas, especiarias.",
		"linkUm":"http://www.cestaverde.pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : "3"
	}

	],
	ajuda: [
	  {
		"imagem":"img/vamosnos.jpg",
		"nome":"Vamos nÓs por si",
		"categoria":"Ajuda",
		"desc":"Óbidos, mais de 65 anos, doentes crónicos. Supermercado, Farmácia - Espaço Ó - 912 268 168 - Precisam-se voluntários",
		"linkUm":"https://www.facebook.com/espaco.ativacao/",
		"linkUmTxt":"Facebook",
		"linkDois":"https://docs.google.com/forms/d/e/1FAIpQLScrLqGKp9jH6bqTtrYIg7FByBcriMDD2CxSBmxQoJg1pLeBww/viewform",
		"linkDoisTxt":"Voluntários",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id" : "1"
	},
	 {
		"imagem":"img/ordempsi.jpg",
		"nome":"Ordem dos Psicólogos Portugueses",
		"categoria":"Ajuda",
		"desc":"Recomendações da Ordem de Psicológicos Portugueses",
		"linkUm":"https://www.facebook.com/ordemdospsicologos/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id" : [1,2,3]
	},
	 {
		"imagem":"img/wemendesbatas.jpg",
		"nome":"Ajuda para os nossos profissionais de saúde.",
		"categoria":"Ajuda",
		"desc":"AJUDEM!Túnicas, batas e toucas para os nossos profissionais de saúde - 262 833 937",
		"linkUm":"https://www.facebook.com/wemendessisters/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id" : [1,2,3]
	},
	 {
		"imagem":"img/helpcaldascovid.jpg",
		"nome":"Help Caldas Covid-19",
		"categoria":"Ajuda",
		"desc":"VOLUNTÁRIOS! Iniciativa popular para ajudar quem mais precisa perto de si. ",
		"linkUm":"https://chat.whatsapp.com/C4XX81xljPT5ttb8ZrnVkB",
		"linkUmTxt":"Chat WhatsApp",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id" : "a"
	},
	 {
		"imagem":"img/naosaiatornada.jpg",
		"nome":"Não saia, nós vamos por si",
		"categoria":"Ajuda",
		"desc":"Para maiores de 65 anos ou portadores de doença crónica. Compras, farmácia, correios. (Tornada e Salir do Porto) 910 422 918",
		"linkUm":"tel:+315910422918",
		"linkUmTxt":"Telefone",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id" : "1"
	},
	 {
		"imagem":"img/vixinhoamigo.jpg",
		"nome":"Vizinho Amigo",
		"categoria":"Ajuda",
		"desc":"VOLUNTÁRIOS - Ajudam quem não pode sair de casa.",
		"linkUm":"https://www.facebook.com/Vizinho-Amigo-111145073840476/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : [1,2,3]
	},
	 {
		"imagem":"img/vixinhoamigo.jpg",
		"nome":"SOS Vizinho",
		"categoria":"Ajuda",
		"desc":"VOLUNTÁRIOS - Ajuda a quem mais precisa.",
		"linkUm":"https://sosvizinho.pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : [1,2,3]
	},
	 {
		"imagem":"img/queroajudar.jpg",
		"nome":"Quero Ajudar",
		"categoria":"Ajuda",
		"desc":"VOLUNTÁRIOS - Apoio psicológico, compras de supermercado ou da farmácia.",
		"linkUm":"https://app.queroajudar.org/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : [1,2,3]
	}
   
   
	],
	farmacias: [
	  {
		"imagem":"img/farmaciaalvorinha.jpg",
		"nome":"Farmácia de Alvorninha",
		"categoria":"Farmácias",
		"desc":"Entrega em casa 262 930 706 - farmacia.alvorninha@gmail.com",
		"linkUm":"mailto:farmacia.alvorninha@gmail.com",
		"linkUmTxt":"Email",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id" :"1"
	},
	 {
		"imagem":"img/farmaciasenhoraajuda.jpg",
		"nome":"Farmácia Senhora da Ajuda - Gaeiras",
		"categoria":"Farmácias",
		"desc":"Entrega em casa 262 958 637 - 960 173 114(WhatsApp) - fsajuda@gmail.com",
		"linkUm":"mailto:fsajuda@gmail.com",
		"linkUmTxt":"Email",
		"linkDois":"https://www.facebook.com/fsajuda/",
		"linkDoisTxt":"Facebook",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id" :"1"
	},
	{
		"imagem":"img/farmaciarosa.jpg",
		"nome":"Farmácia Rosa",
		"categoria":"Farmácias",
		"desc":"Entrega em casa. 262 831 996 - 915 702 242(WhatsApp) - farmacia.rosa@correiarosa.pt",
		"linkUm":"mailto:farmacia.rosa@correiarosa.pt",
		"linkUmTxt":"Email",
		"linkDois":"https://www.facebook.com/farmaciarosacaldasdarainha/",
		"linkDoisTxt":"Facebook",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id" :"1"
	},
	{
		"imagem":"img/farmaciasantacatarina.jpg",
		"nome":"Farmácia Santa Catarina",
		"categoria":"Farmácias",
		"desc":"Entrega em casa. 262 831 996 - 915 702 242(WhatsApp) - farmacia.rosa@correiarosa.pt",
		"linkUm":"mailto:farmacia.rosa@correiarosa.pt",
		"linkUmTxt":"Email",
		"linkDois":"https://www.facebook.com/farmaciasantcatarina/",
		"linkDoisTxt":"Facebook",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id" :"1"
	},
	{
		"imagem":"img/farmaciaoliveira.jpg",
		"nome":"Farmácia Oliveira - Óbidos",
		"categoria":"Farmácias",
		"desc":"Encomendas por telefone e levantamento na farmácia 262 959 198",
		"linkUm":"https://www.facebook.com/farmaciaoliveiraobidos/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id" :"1"
	},
	{
		"imagem":"img/farmaciafozdoarelho.jpg",
		"nome":"Farmácia Foz do Arelho",
		"categoria":"Farmácias",
		"desc":"Encomendas por telefone e levantamento na farmácia 262 979 229",
		"linkUm":"https://www.facebook.com/farmaciafozdoarelho/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id" :"1"
	},
	 {
		"imagem":"img/farmacianaweb.jpg",
		"nome":"Farmácia na Web",
		"categoria":"Farmácias",
		"desc":"Compras de farmácia online",
		"linkUm":"https://farmacianaweb.pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" :[1,2,3]
	},
	 {
		"imagem":"img/farmaciasadabandeira.jpg",
		"nome":"Farmácia Sá da Bandeira",
		"categoria":"Farmácias",
		"desc":"Entrega de medicamentos em Porto, Matosinhos, Maia, Gondomar e Vila Nova de Gaia - 222 074 040",
		"linkUm":"https://www.sadabandeira.com/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" :"3"
	},
	 {
		"imagem":"img/farmaciagomes.jpg",
		"nome":"Farmácia Gomes",
		"categoria":"Farmácias",
		"desc":"Entrega de medicamentos - 253 961 237",
		"linkUm":"https://www.facebook.com/Farm%C3%A1cia-Gomes-133812733364223/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" :"3"
	},
	 {
		"imagem":"img/atuafarmacia.jpg",
		"nome":"A Tua Farmácia",
		"categoria":"Farmácias",
		"desc":"Entrega de produtos farmaceuticos",
		"linkUm":"https://atuafarmacia.pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" :[1,2,3]
	}
   
	],
	comidaemcasa: [
	  {
		"imagem":"img/chefsemcasa.jpg",
		"nome":"Chefs em Casa",
		"categoria":"Comida em casa",
		"desc":"Entrega em casa, pequeno almoço, almoço, jantar e entrega compras. 917 824 821 / 300 505 15",
		"linkUm":"https://www.facebook.com/Chefsemcasa/",
		"linkUmTxt":"Facebook",
		"linkDois":"https://chefs-em-casa.pt/",
		"linkDoisTxt":"Site",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id" : "1"
	},
	 {
		"imagem":"img/funky.jpg",
		"nome":"Funky SushiBar",
		"categoria":"Comida em casa",
		"desc":"Entrega em casa através dos Chefs em casa. Tem take away. 918 159 601",
		"linkUm":"https://www.facebook.com/FunkySushiBar/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id" : "1"
	},
	{
		"imagem":"img/leef.jpg",
		"nome":"Leef",
		"categoria":"Comida em casa",
		"desc":"Entrega em casa.",
		"linkUm":"https://www.facebook.com/leefyourlife/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id" : "1"
	},
	{
		"imagem":"img/novomundo.jpg",
		"nome":"Pizzeria Novo Mundo",
		"categoria":"Comida em casa",
		"desc":"Entrega em casa - 262 842 969 - (Fechado até dia 1 de Abril)",
		"linkUm":"https://www.pizzanovomundo.com/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id" : "1"
	},
	{
		"imagem":"img/telepizza.jpg",
		"nome":"Telepizza",
		"categoria":"Comida em casa",
		"desc":"Entrega em casa - 262 823 212",
		"linkUm":"https://www.telepizza.pt/pizzaria/leiria---caldas-da-rainha/caldas-da-rainha/caldas-da-rainha-03567",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id" : "1"
	},
	{
		"imagem":"img/mrpizza.jpg",
		"nome":"Mr. Pizza",
		"categoria":"Comida em casa",
		"desc":"Entrega em casa - 262 838 999",
		"linkUm":"https://www.telepizza.pt/pizzaria/leiria---caldas-da-rainha/caldas-da-rainha/caldas-da-rainha-03567",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id" : "1"
	},
	{
		"imagem":"img/tibino.jpg",
		"nome":"Tibino casa de petiscos",
		"categoria":"Comida em casa",
		"desc":"Take away - 262 979 047",
		"linkUm":"https://www.facebook.com/Tibino.petisco/s",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id" : "1"
	},
	{
		"imagem":"img/saboresditalia.jpg",
		"nome":"Sabores D´Itália",
		"categoria":"Comida em casa",
		"desc":"Take away - 262 845 600",
		"linkUm":"https://www.facebook.com/Restaurante-Sabores-dIt%C3%A1lia-139819609386055/",
		"linkUmTxt":"Facebook",
		"linkDois":"saboresditalia.com",
		"linkDoisTxt":"Site",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id" : "1"
	},
	{
		"imagem":"img/restaurantegirassol.jpg",
		"nome":"Restaurante Girassol",
		"categoria":"Comida em casa",
		"desc":"Take away - 964 521 215",
		"linkUm":"https://www.facebook.com/restaurantegirassolcaldasdarainha/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id" : "1"
	},
	{
		"imagem":"img/oclock.jpg",
		"nome":"O’Clock Foz do Arelho",
		"categoria":"Comida em casa",
		"desc":"Take away e entregas em casa - 913 890 113 - 937 450 983",
		"linkUm":"https://www.facebook.com/oclockfozdoarelho/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id" : "1"
	},
	{
		"imagem":"img/jardimcafe.jpg",
		"nome":"Jardim Caffé",
		"categoria":"Comida em casa",
		"desc":"Take away - 937 270 965",
		"linkUm":"https://www.facebook.com/Jardim-Caff%C3%A9-250086612527946/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id" : "1"
	},
	 {
		"imagem":"img/ubereats.jpg",
		"nome":"Uber Eats",
		"categoria":"Comida em casa",
		"desc":"Está com fome? Receba a comida que quiser, dos restaurantes de que gosta, entregue à velocidade Uber.",
		"linkUm":"https://www.ubereats.com/pt",
		"linkUmTxt":"Site",
		"linkDois":"https://play.google.com/store/apps/details?id=com.ubercab.eats",
		"linkDoisTxt":"Play Store",
		"linkTres":"https://apps.apple.com/us/app/uber-eats-order-food-delivery/id1058959277",
		"linkUmTres":"App Store",
		"category_id" : [1,2,3]
	},
	 {
		"imagem":"img/glovo.jpg",
		"nome":"Glovo",
		"categoria":"Comida em casa",
		"desc":"Comida em casa em minutos.",
		"linkUm":"https://glovoapp.com/en/lis",
		"linkUmTxt":"Site",
		"linkDois":"https://play.google.com/store/apps/details?id=com.glovo",
		"linkDoisTxt":"Play Store",
		"linkTres":"https://apps.apple.com/pt/app/glovo-entrega-de-comida-e-mais/id951812684",
		"linkUmTres":"App Store",
		"category_id" : [2,3]
	},
	{
		"imagem":"img/glovo.jpg",
		"nome":"Bite my lunch",
		"categoria":"Comida em casa",
		"desc":"Comida em casa em minutos.",
		"linkUm":"https://bitemylunch.pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : "3"
	},
	{
		"imagem":"img/nomenu.jpg",
		"nome":"NoMenu",
		"categoria":"Comida em casa",
		"desc":"Entrega de refeições.",
		"linkUm":"https://www.nomenu.pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : [2,3]
	},
	{
		"imagem":"img/comeremcasa.jpg",
		"nome":"Comer em Casa",
		"categoria":"Comida em casa",
		"desc":"790 restaurantes em 18 regiões de Portugal.",
		"linkUm":"https://www.comeremcasa.com/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : [2,3]
	}
	,{
		"imagem":"img/takeaway.jpg",
		"nome":"Takeaway",
		"categoria":"Comida em casa",
		"desc":"Encomenda e entrega de comida em casa.",
		"linkUm":"https://www.takeaway.com/pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : [2,3]
	},
	{
		"imagem":"img/paoemcasa.jpg",
		"nome":"Pão em Casa",
		"categoria":"Comida em casa",
		"desc":"Serviço de padaria com entrega em casa",
		"linkUm":"https://paoemcasa.pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : [2,3]
	},
	{
		"imagem":"img/eattasty.jpg",
		"nome":"EatTasty",
		"categoria":"Comida em casa",
		"desc":"Encomenda e entrega de comida em casa.",
		"linkUm":"https://eattasty.pt/home",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : "3"
	},
	{
		"imagem":"img/cookoo.jpg",
		"nome":"COOKOO - The Kitchen Hub",
		"categoria":"Comida em casa",
		"desc":"Encomenda e entrega de comida em casa - 217 272 531",
		"linkUm":"https://www.cookoo.pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : "2"
	},
	{
		"imagem":"img/amordehortela.jpg",
		"nome":"Amor e Hortelã",
		"categoria":"Comida em casa",
		"desc":"Encomenda e entrega de refeições vegetarianas em casa - 917 550 374",
		"linkUm":"https://www.amorehortela.pt/p/servicos.html",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : "3"
	},
	{
		"imagem":"img/patriadoce.jpg",
		"nome":"Patriadoce",
		"categoria":"Comida em casa",
		"desc":"Encomenda e entrega de pastelaria/padaria",
		"linkUm":"https://www.facebook.com/Patriadoce-101096878192715/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : "3"
	},
	{
		"imagem":"img/comidaemcasa.jpg",
		"nome":"Casa da Comida",
		"categoria":"Comida em casa",
		"desc":"Encomenda e entrega de refeições - 218 115 020",
		"linkUm":"https://www.facebook.com/casadacomida.pt/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : "2"
	},
	{
		"imagem":"img/chefpanda.jpg",
		"nome":"ChefPanda",
		"categoria":"Comida em casa",
		"desc":"Encomenda e entrega de pastelaria - 964 270 545",
		"linkUm":"https://www.chefpanda.pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : [2,3]
	},
	{
		"imagem":"img/foodforreal.jpg",
		"nome":"The Food For Real",
		"categoria":"Comida em casa",
		"desc":"Encomenda e entrega de refeições - 926 784 109",
		"linkUm":"https://www.thefoodforreal.com/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : "2"
	},
	{
		"imagem":"img/dominos.jpg",
		"nome":"Domino's",
		"categoria":"Comida em casa",
		"desc":"Encomenda e entrega de pizzas",
		"linkUm":"https://www.dominospizza.pt/pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : [2,3]
	},
	{
		"imagem":"img/amarmita.jpg",
		"nome":"A Marmita",
		"categoria":"Comida em casa",
		"desc":"Encomenda e entrega de refeições - 211 933 159",
		"linkUm":"https://www.amarmita.pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : "2"
	},
	{
		"imagem":"img/masstige.jpg",
		"nome":"Masstige Catering",
		"categoria":"Comida em casa",
		"desc":"Encomenda e entrega de refeições - 913 788 978",
		"linkUm":"https://www.masstige.pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : "2"
	},
	{
		"imagem":"img/magariristorante.jpg",
		"nome":"Ristorante Magari",
		"categoria":"Comida em casa",
		"desc":"Encomenda e entrega de refeições - 221 110 420",
		"linkUm":"https://www.facebook.com/magariristorante/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : "3"
	}
	
   
	],
	servicos: [
	  {
		"imagem":"img/luggit.png",
		"nome":"LUGGit",
		"categoria":"Serviços",
		"desc":"Serviço que  permite enviar bens a um familiar ou amigo sem sair de casa, de forma segura e o mais rápida possível no Porto e em Lisboa - 913 880 216",
		"linkUm":"https://docs.google.com/forms/d/e/1FAIpQLSdbrpgbHrlGl4tsEnal3jIe5RI7oWCHLP2QnPTYOCrqy5lKnw/viewform",
		"linkUmTxt":"Formulário",
		"linkDois":"https://wa.me/351913880216 ",
		"linkDoisTxt":"WhatsApp",
		"linkTres":"http://m.me/luggitapp",
		"linkUmTres":"Messenger",
		"category_id": [2,3]
	}
   
	],
	 animais: [
	  {
		"imagem":"img/clinicaveterenariaobidos.jpg",
		"nome":"Clínica Veterinária Óbidos",
		"categoria":"Animais",
		"desc":"Ração, desparasitante e medicação - Entregam em casa - 927 549 555 - 262 959 072",
		"linkUm":"https://www.facebook.com/CVObidos/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id" : "1"
	},
	{
		"imagem":"img/goldpet.jpg",
		"nome":"Goldpet",
		"categoria":"Animais",
		"desc":"Loja de animain online.",
		"linkUm":"https://goldpet.pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : [1,2,3]
	},
	{
		"imagem":"img/petoutlet.jpg",
		"nome":"PetOutlet",
		"categoria":"Animais",
		"desc":"Loja de animain online - 229 686 051",
		"linkUm":"https://www.petoutlet.pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id" : [1,2,3]
	},
	{
		"imagem":"img/barkyn.jpg",
		"nome":"Barkyn",
		"categoria":"Hipermercado",
		"desc":"Venda online de ração - 912 760 990",
		"linkUm":"https://www.barkyn.com/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkUmTres":"",
		"category_id": [1,2,3]
	}
	

	],
	 paraosmaisnovos: [
	  {
		"imagem":"img/escolavirtual.jpg",
		"nome":"Escola Virtual - Porto Editora",
		"categoria":"Para os mais novos",
		"desc":"Aulas gratuitas. (Óptimo se for em articulação com o professor)",
		"linkUm":"https://www.escolavirtual.pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	 {
		"imagem":"img/auladigital.jpg",
		"nome":"Aula Digital - Leya",
		"categoria":"Para os mais novos",
		"desc":"Aulas gratuitas. (Óptimo se for em articulação com o professor)",
		"linkUm":"https://auladigital.leya.com/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	 {
		"imagem":"img/tsuru.jpg",
		"nome":"Tsuru - Centro de Psicologia e Aprendizagema",
		"categoria":"Para os mais novos",
		"desc":"Ideias bem interessantes para fazer com os miúdos.",
		"linkUm":"https://www.facebook.com/tsurupsicologia/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
	   "imagem":"img/rtpensina.jpg",
		"nome":"RTP - Ensina Júnior",
		"categoria":"Para os mais novos",
		"desc":"Milhares de conteúdos audiovisuais de acesso livre",
		"linkUm":"https://ensina.rtp.pt/temas-artigo/ensina-junior/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
	   "imagem":"img/profeladiogouveia.jpg",
		"nome":"Professor Eládio Gouveia",
		"categoria":"Aulas 2º ano",
		"desc":"O Professor Eládio Gouveia não baixou os braços, parabéns! Grava videos para os seus alunos de 2º ano.",
		"linkUm":"https://www.youtube.com/channel/UCON2o1qx1bNnnofhk36Q7qw",
		"linkUmTxt":"YouTube",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
	   "imagem":"img/estacaodasletras.jpg",
		"nome":"Estação das letras",
		"categoria":"Para os mais novos",
		"desc":"Partilha histórias diárias para crianças de todas as idades.",
		"linkUm":"https://www.facebook.com/TeatroInfantoJuvenilTIAGODUARTE/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
	   "imagem":"img/nomeusacodehistorias.jpg",
		"nome":"No meu saco de histórias",
		"categoria":"Para os mais novos",
		"desc":"Em directo todos os dias.",
		"linkUm":"https://www.facebook.com/No-meu-Saco-de-Hist%C3%B3rias-1878993779062425/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
	   "imagem":"img/bibliotecapnl.jpg",
		"nome":"Biblioteca PNL",
		"categoria":"Para os mais novos",
		"desc":"Biblioteca do plano nacional de leitura com livros digitais.",
		"linkUm":"http://www.planonacionaldeleitura.gov.pt/biblioteca/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
	   "imagem":"img/escolamagica.jpg",
		"nome":"Escola Mágica",
		"categoria":"Para os mais novos",
		"desc":"Plataforma de potencia a aprendizagem de crianças do 1º ao 3º ciclo.",
		"linkUm":"https://www.escolamagica.pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
	   "imagem":"img/khanacademy.jpg",
		"nome":"Khan Academy",
		"categoria":"Para os mais novos",
		"desc":"Exercícios interactivos para todas as idades.",
		"linkUm":"https://pt-pt.khanacademy.org/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
	   "imagem":"img/projectadamastor.jpg",
		"nome":"Projecto Adamastor",
		"categoria":"Para os mais novos",
		"desc":"Biblioteca digital.",
		"linkUm":"http://projectoadamastor.org/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
	   "imagem":"img/ascancoesdamaria.jpg",
		"nome":"As Canções da Maria",
		"categoria":"Para os mais novos",
		"desc":"Canções para os mais novos ouvirem e aprenderem.",
		"linkUm":"https://www.youtube.com/user/XM9696",
		"linkUmTxt":"YouTube",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
		"imagem":"img/cognitivus.jpg",
		"nome":"Centro Explicações Cognitivus",
		"categoria":"Para os mais novos",
		"desc":"Centro de explicações com regime online - 967 561 206",
		"linkUm":"https://www.facebook.com/Cognitivus.centrodeestudos/",
		"linkUmTxt":"Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": "1"
	}
	
	],
	 entretenimento: [
	 {
		"imagem":"img/teatrodonamaria.jpg",
		"nome":"Teatro Nacional D. Maria II",
		"categoria":"Entretenimento",
		"desc":"Teatro em casa.",
		"linkUm":"https://www.facebook.com/TNDMII/",
		"linkUmTxt":"Facebook",
		"linkDois":"https://www.tndm.pt/pt/calendario/d-maria-ii-em-casa/",
		"linkDoisTxt":"Site",
		"linkTres":"https://www.instagram.com/tndmii/",
		"linkTresTxt":"Instagram",
		"category_id": [1,2,3]
	},
	 {
		"imagem":"img/fm2020.jpg",
		"nome":"Footbal Manager 2020",
		"categoria":"Entretenimento",
		"desc":"Jogo gratuito.",
		"linkUm":"https://store.steampowered.com/app/1100600/Football_Manager_2020/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
		"imagem":"img/euficoemcasa.jpg",
		"nome":"Festival Fora de casa",
		"categoria":"Entretenimento",
		"desc":"Espectáculos gratuitos.",
		"linkUm":"https://www.instagram.com/festivaleuficoemcasa/",
		"linkUmTxt":"Instagram",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
		"imagem":"img/rtpensina.jpg",
		"nome":"RTP - Ensina",
		"categoria":"Entretenimento",
		"desc":"Milhares de conteúdos audiovisuais de acesso livre",
		"linkUm":"https://ensina.rtp.pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
		"imagem":"img/medeiafilmes.jpg",
		"nome":"Medeia Filmes",
		"categoria":"Entretenimento",
		"desc":"Quarentena cinéfila com a Medeia Filmes.",
		"linkUm":"http://medeiafilmes.com/noticias/ver/noticia/quarentena-cinefila-com-a-medeia-filmes/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
		"imagem":"img/nga.jpg",
		"nome":"National Gallery of Art, EUA",
		"categoria":"Entretenimento",
		"desc":"Visita virtual ao museu.",
		"linkUm":"https://www.nga.gov/index.html",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
		"imagem":"img/vaticano.jpg",
		"nome":"Museu do Vaticano",
		"categoria":"Entretenimento",
		"desc":"Visita virtual ao museu.",
		"linkUm":"http://www.museivaticani.va/content/museivaticani/en/collezioni/musei/tour-virtuali-elenco.html",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
		"imagem":"img/nam.jpg",
		"nome":"National Archaeological Museum, Grécia",
		"categoria":"Entretenimento",
		"desc":"Visita virtual ao museu.",
		"linkUm":"https://www.namuseum.gr/en/collections/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
		"imagem":"img/prado.jpg",
		"nome":"Museo del Prado",
		"categoria":"Entretenimento",
		"desc":"Visita virtual ao museu.",
		"linkUm":"https://www.museodelprado.es/en/the-collection/art-works",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
		"imagem":"img/louvre.jpg",
		"nome":"Musée du Louvre",
		"categoria":"Entretenimento",
		"desc":"Visita virtual ao museu.",
		"linkUm":"https://www.louvre.fr/en/visites-en-ligne#tabs",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
		"imagem":"img/britishmuseu.jpg",
		"nome":"The British Museum",
		"categoria":"Entretenimento",
		"desc":"Visita virtual ao museu.",
		"linkUm":"https://www.britishmuseum.org/collection",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
		"imagem":"img/hermitage.jpg",
		"nome":"The Hermitage Museum, Rússia",
		"categoria":"Entretenimento",
		"desc":"Visita virtual ao museu.",
		"linkUm":"https://www.hermitagemuseum.org/wps/portal/hermitage/panorama/virtual_visit/panoramas-m-1/!ut/p/z1/jZBNb4MwDIZ_Sw8cScxHgO6WMU2MtUKTto7lUqUVhUwkQSEFab9-UbVLpZXNN0uPXz82ZrjGTPFJtNwKrXjv-g-W7CtKkyDKocx2cQp0TYuH8gXI_WOC3y8A3CgKmP1nfgFgy_HlXwvcBaHZ5tsWs4HbzhfqpHE9CWPPvN9PYhQW1wNX2nDJR1_6gXNi16nV07NLrV5JUVW7PMzjH2DZSxwkmo8SASIhgSBaA2RpmMbZRYqqQ5Q5KdOcGtMYdDbu2521w3jngQfzPKNW67Zv0FFLD34b6fTo3K9JPMi3-mtTwCfppw1drb4BKsDtBQ!!/dz/d5/L2dBISEvZ0FBIS9nQSEh/?lng=pt&lng=",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
		"imagem":"img/brera.jpg",
		"nome":"Pinacoteca de Brera, Itália",
		"categoria":"Entretenimento",
		"desc":"Visita virtual ao museu.",
		"linkUm":"https://pinacotecabrera.org/virtualtour/start.html",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
		"imagem":"img/uffizi.jpg",
		"nome":"Galleria Delgi Uffizi, Itália",
		"categoria":"Entretenimento",
		"desc":"Visita virtual ao museu.",
		"linkUm":"https://www.uffizi.it/mostre-virtuali",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
		"imagem":"img/metropolitan.jpg",
		"nome":"The Metropolitan Museum of Art, EUA",
		"categoria":"Entretenimento",
		"desc":"Visita virtual ao museu.",
		"linkUm":"https://artsandculture.google.com/streetview/metropolitan-museum-of-art/KAFHmsOTE-4Xyw?sv_lng=-73.9624786&sv_lat=40.7803959&sv_h=3.6950576062148457&sv_p=-2.0559112937385606&sv_pid=KeFx8oXHzeuY8L5rfepHaA&sv_z=1.0000000000000002",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
		"imagem":"img/guggen.jpg",
		"nome":"Museu Solomon R. Guggenheim, EUA",
		"categoria":"Entretenimento",
		"desc":"Visita virtual ao museu.",
		"linkUm":"https://www.guggenheim.org/collection-online",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
		"imagem":"img/dali.jpg",
		"nome":"Teatro-Museu Dalí, Espanha",
		"categoria":"Entretenimento",
		"desc":"Visita virtual ao museu.",
		"linkUm":"https://www.salvador-dali.org/en/museums/dali-theatre-museum-in-figueres/visita-virtual/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
		"imagem":"img/fridakahlo.jpg",
		"nome":"Exposição interactiva de Frida Kahlo",
		"categoria":"Entretenimento",
		"desc":"Visita virtual ao museu.",
		"linkUm":"https://artsandculture.google.com/exhibit/frida-kahlo-i-portray-myself/SQJSuxyz6BdIKQ?hl=en",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	}
	

	],
	tecnologia: [
	  {
		"imagem":"img/pcdiga.jpg",
		"nome":"Pcdiga online",
		"categoria":"Tecnologia",
		"desc":"Entregas até 30kg.",
		"linkUm":"https://www.pcdiga.com/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	}
	
	],
	 infocovid19: [
	  {
		"imagem":"img/dgs.jpg",
		"nome":"Covid-19 - DGS",
		"categoria":"Covid-19",
		"desc":"Informações oficiais",
		"linkUm":"https://covid19.min-saude.pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	 {
		"imagem":"img/dgs.jpg",
		"nome":"Covid19 em Portugal - Dados DGS",
		"categoria":"Covid-19",
		"desc":"Informações oficiais",
		"linkUm":"https://esriportugal.maps.arcgis.com/apps/opsdashboard/index.html#/acf023da9a0b4f9dbb2332c13f635829",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	 {
		"imagem":"img/estamoson.jpg",
		"nome":"Não paramos #ESTAMOSON - DGS",
		"categoria":"Covid-19",
		"desc":"Informações oficiais",
		"linkUm":"https://covid19estamoson.gov.pt/",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	 {
		"imagem":"img/poligrafo.jpg",
		"nome":"24 Fake news que o Polígrafo revelou",
		"categoria":"Covid-19",
		"desc":"Fact-Checking",
		"linkUm":"https://poligrafo.sapo.pt/sociedade/artigos/coronavirus-as-24-fake-news-que-o-poligrafo-ja-revelou",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
		"imagem":"img/avaliarsintomas.jpg",
		"nome":"Avaliar Sintomas - Covid19",
		"categoria":"Covid-19",
		"desc":"Aprenda a fazer a despiste ao Covid-19.",
		"linkUm":"https://www.sns24.gov.pt/avaliar-sintomas/?intro-sc=covid-19",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
		"imagem":"img/covid19duvidas.jpg",
		"nome":"COVID19 dúvidas respondidas por profissionais de saúde",
		"categoria":"Covid-19",
		"desc":"Grupo do Facebook com profissionais de saúde que esclarecem dúvidas sobre o Covid-19.",
		"linkUm":"https://www.facebook.com/groups/covid19duvidas/",
		"linkUmTxt":"Grupo de Facebook",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	}
	
	],
	 fitness: [
	  {
		"imagem":"img/crossfitlusiadas.jpg",
		"nome":"CrossFit Lusíadas",
		"categoria":"Fitness",
		"desc":"HOME WOD's diários.",
		"linkUm":"https://www.instagram.com/crossfitlusiadas/",
		"linkUmTxt":"Instagram",
		"linkDois":"https://www.facebook.com/crossfitlusiadas/",
		"linkDoisTxt":"Facebook",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	 {
		"imagem":"img/quarentraining.jpg",
		"nome":"Covid19 em Portugal - Dados DGS",
		"categoria":"Fitness",
		"desc":"Vídeos de Fitness",
		"linkUm":"https://www.youtube.com/channel/UCfw95-Fx5bHNqia8EulCzhw",
		"linkUmTxt":"YouTube",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	}
	
	],
	  actividades: [
	  {
		"imagem":"img/default.jpg",
		"nome":"Fazer pipocas doces em família",
		"categoria":"Actividades",
		"desc":"Vídeo",
		"linkUm":"https://www.youtube.com/watch?v=P_SaaM8Vsmw",
		"linkUmTxt":"YouTube",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	 {
		"imagem":"img/default.jpg",
		"nome":"Verificação do transporte dos alimentos nas plantas",
		"categoria":"Actividades",
		"desc":"Experiência",
		"linkUm":"http://experimentoteca.com/biologia/experimento-conducao-de-agua-nas-plantas-rosa-arco-iris/",
		"linkUmTxt":"Link",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	 {
		"imagem":"img/default.jpg",
		"nome":"Construir um carro com uma garrafa de plástico",
		"categoria":"Actividades",
		"desc":"Vídeo",
		"linkUm":"https://www.youtube.com/watch?v=mhkn8xBYRuU",
		"linkUmTxt":"Youtube",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
		"imagem":"img/default.jpg",
		"nome":"Realizar algumas experiências com água",
		"categoria":"Actividades",
		"desc":"Vídeo",
		"linkUm":"https://www.youtube.com/watch?v=rKiSzbc-N2s",
		"linkUmTxt":"Youtube",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
		"imagem":"img/default.jpg",
		"nome":"Construir um telefone",
		"categoria":"Actividades",
		"desc":"Vídeo",
		"linkUm":"https://www.youtube.com/watch?v=UAeoD9-2RIo",
		"linkUmTxt":"Youtube",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
		"imagem":"img/moma.jpg",
		"nome":"6 cursos de Arte - MoMA",
		"categoria":"Actividades",
		"desc":"Vídeo",
		"linkUm":"https://culturacolectiva.com/arte/cursos-de-arte-del-moma-gratis-y-en-linea",
		"linkUmTxt":"Site",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	}
	
	],
	 papelaria: [
	  {
		"imagem":"img/papelariavogal.jpg",
		"nome":"Papelaria Vogal",
		"categoria":"Papelaria",
		"desc":"Compras online com entrega em casa ou levantamento na papelaria.",
		"linkUm":"https://papelariavogal.com/",
		"linkUmTxt":"Site",
		"linkDois":"https://www.facebook.com/vogal.papelariatecnica/",
		"linkDoisTxt":"Facebook",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": "1"
	}
	

	],
	 apps: [
	  {
		"imagem":"img/houseparty.jpg",
		"nome":"Houseparty iOS",
		"categoria":"Apps",
		"desc":"O Houseparty é a rede social cara-a-cara onde se pode conectar com as pessoas de quem mais gosta.",
		"linkUm":"https://apps.apple.com/pt/app/houseparty/id1065781769?l=en",
		"linkUmTxt":"App Store",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	},
	{
		"imagem":"img/houseparty.jpg",
		"nome":"Houseparty Android",
		"categoria":"Apps",
		"desc":"O Houseparty é a rede social cara-a-cara onde se pode conectar com as pessoas de quem mais gosta.",
		"linkUm":"https://play.google.com/store/apps/details?id=com.herzick.houseparty&hl=pt",
		"linkUmTxt":"Play Store",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": [1,2,3]
	}
	

	],
	 oficinas: [
	  {
		"imagem":"img/default.jpg",
		"nome":"Benfeito Vintage de Carvalhal Benfeito",
		"categoria":"Oficinas",
		"desc":"Reparação de máquinas agriculas e florestais assim como de ciclomotores clássicos. 262 927 161 - 916 817 999",
		"linkUm":"mailto:benfeitovintage@hotmail.com",
		"linkUmTxt":"Email",
		"linkDois":"",
		"linkDoisTxt":"",
		"linkTres":"",
		"linkTresTxt":"",
		"category_id": "1"
	}

	]
  }
},

 computed: {

	categoryHipermercados ()
	{
	 let that = this
	 return this.hipermercados.filter (p => {
		if (Array.isArray (p.category_id)) {
		 let active = parseInt (that.active);
		 return p.category_id.includes (active)
	   } else {
		 return p.category_id === that.active
	   }
	 })
	},

	categoryMinimercados ()
	{
	 let that = this
	 return this.minimercados.filter (p => {
		if (Array.isArray (p.category_id)) {
		 let active = parseInt (that.active);
		 return p.category_id.includes (active)
	   } else {
		 return p.category_id === that.active
	   }
	 })
	},

	categoryAjuda ()
	{
	 let that = this
	 return this.ajuda.filter (p => {
		if (Array.isArray (p.category_id)) {
		 let active = parseInt (that.active);
		 return p.category_id.includes (active)
	   } else {
		 return p.category_id === that.active
	   }
	 })
	},

	categoryFarmacias ()
	{
	 let that = this
	 return this.farmacias.filter (p => {
		if (Array.isArray (p.category_id)) {
		 let active = parseInt (that.active);
		 return p.category_id.includes (active)
	   } else {
		 return p.category_id === that.active
	   }
	 })
	},

	categoryComidaemcasa ()
	{
	 let that = this
	 return this.comidaemcasa.filter (p => {
		if (Array.isArray (p.category_id)) {
		 let active = parseInt (that.active);
		 return p.category_id.includes (active)
	   } else {
		 return p.category_id === that.active
	   }
	 })
	},
	categoryServicos ()
	{
	 let that = this
	 return this.servicos.filter (p => {
		if (Array.isArray (p.category_id)) {
		 let active = parseInt (that.active);
		 return p.category_id.includes (active)
	   } else {
		 return p.category_id === that.active
	   }
	 })
	},

	categoryAnimais ()
	{
	 let that = this
	 return this.animais.filter (p => {
		if (Array.isArray (p.category_id)) {
		 let active = parseInt (that.active);
		 return p.category_id.includes (active)
	   } else {
		 return p.category_id === that.active
	   }
	 })
	},

	categoryParaosmaisnovos ()
	{
	 let that = this
	 return this.paraosmaisnovos.filter (p => {
		if (Array.isArray (p.category_id)) {
		 let active = parseInt (that.active);
		 return p.category_id.includes (active)
	   } else {
		 return p.category_id === that.active
	   }
	 })
	},

	categoryEntretenimento ()
	{
	 let that = this
	 return this.entretenimento.filter (p => {
		if (Array.isArray (p.category_id)) {
		 let active = parseInt (that.active);
		 return p.category_id.includes (active)
	   } else {
		 return p.category_id === that.active
	   }
	 })
	},

	categoryTecnologia ()
	{
	 let that = this
	 return this.paraosmaisnovos.filter (p => {
		if (Array.isArray (p.category_id)) {
		 let active = parseInt (that.active);
		 return p.category_id.includes (active)
	   } else {
		 return p.category_id === that.active
	   }
	 })
	},

	categoryInfocovid19 ()
	{
	 let that = this
	 return this.infocovid19.filter (p => {
		if (Array.isArray (p.category_id)) {
		 let active = parseInt (that.active);
		 return p.category_id.includes (active)
	   } else {
		 return p.category_id === that.active
	   }
	 })
	},

	categoryFitness ()
	{
	 let that = this
	 return this.fitness.filter (p => {
		if (Array.isArray (p.category_id)) {
		 let active = parseInt (that.active);
		 return p.category_id.includes (active)
	   } else {
		 return p.category_id === that.active
	   }
	 })
	},

	categoryActividades ()
	{
	 let that = this
	 return this.actividades.filter (p => {
		if (Array.isArray (p.category_id)) {
		 let active = parseInt (that.active);
		 return p.category_id.includes (active)
	   } else {
		 return p.category_id === that.active
	   }
	 })
	},

	categoryPapelaria ()
	{
	 let that = this
	 return this.papelaria.filter (p => {
		if (Array.isArray (p.category_id)) {
		 let active = parseInt (that.active);
		 return p.category_id.includes (active)
	   } else {
		 return p.category_id === that.active
	   }
	 })
	},

	categoryOficinas ()
	{
	 let that = this
	 return this.oficinas.filter (p => {
		if (Array.isArray (p.category_id)) {
		 let active = parseInt (that.active);
		 return p.category_id.includes (active)
	   } else {
		 return p.category_id === that.active
	   }
	 })
	},

	categoryApps ()
	{
	 let that = this
	 return this.apps.filter (p => {
		if (Array.isArray (p.category_id)) {
		 let active = parseInt (that.active);
		 return p.category_id.includes (active)
	   } else {
		 return p.category_id === that.active
	   }
	 })
	}


  },
  methods: {
	toggle(i, v) {
	  this.active = i
	  //console.log(i)
	  //this.currentView = v
	}
  }
 
})