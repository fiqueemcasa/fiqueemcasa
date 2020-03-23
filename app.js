new Vue({
  el: '#app',
  data() {
  return {
	time:  ['21 de Março 2020 - 17:53'],
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":"Instagram"
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
		"linkTresTxt":""
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
		"linkTresTxt":"Instagram"
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":"Instagram"
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
	}
   
	],
		farmacias: [
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
		"linkTresTxt":""
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
		"linkTresTxt":""
	},
   
	],
	farmacias: [
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
		"linkTresTxt":""
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
		"linkTresTxt":""
	},
   
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
	}
   
	],
	comidaemcasa: [
	  {
		"imagem":"img/chefsemcasa.jpg",
		"nome":"FChefs em Casa",
		"categoria":"Comida em casa",
		"desc":"Entrega em casa, pequeno almoço, almoço, jantar e entrega compras. 917 824 821 / 300 505 15",
		"linkUm":"https://www.facebook.com/Chefsemcasa/",
		"linkUmTxt":"Facebook",
		"linkDois":"https://chefs-em-casa.pt/",
		"linkDoisTxt":"Site",
		"linkTres":"",
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":"Instagram"
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
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
		"linkTresTxt":""
	}

	]
  }
}
 
})