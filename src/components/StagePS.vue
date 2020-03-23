<!-- eslint-disable -->
<template>
	<div id="stage">
		<div class="container">
			<div class="jumbotron-ps">
				<h1 class="title-stage text-light wow animated fadeIn">STAGE<br/>PISTIL STUDIO</h1>
			</div>
			<br/><br/><br/><br/>
			<div class="row">
				<div class="col-md-4">
					<img class="my-shadow wow animated fadeInLeft img-fluid"
						 src="../assets/img/pistil.jpg" alt="linkvalue"/>
					<br/><br/><br/><br/><br/>
					<img
							class="my-shadow wow animated fadeInLeft img-fluid" id="img1"
							src="../assets/img/pistil/pfquiz-login.png" alt="stack"/><br/><br/><br/><br/><br/><img
						class="my-shadow wow animated fadeInLeft img-fluid" id="img2"
						src="../assets/img/pistil/pfquiz-admin-show-all.png" alt="stack"/><br/><br/><br/><br/><br/><img
						class="my-shadow wow animated fadeInLeft img-fluid" id="img3"
						src="../assets/img/pistil/pfquiz-questionnaire-edit.png" alt="stack"/></div>
				<div class="col-md-8 fadeInRight wow animated justify">
					<h2 class="wow animated fadeIn text-light">LinkValue</h2><a class="wow animated fadeIn lien"
																				href="http://pistil-studio.fr/">http://pistil-studio.fr/</a><br/><br/>
					<p class="wow animated fadeIn">Pistil Studio est un studio web qui développe des site sur mesure en
						apportant une expertise sur le visuel.</p><br/>
					<hr/>
					<br/>
					<h4 class="wow animated fadeIn text-light">Secudiag</h4>
					<p class="wow animated fadeIn">Secudiag est le premier projet auquel j'ai peu participé, il s'agit
						d'un service web pour une agence de formation, le site propose un questionnaire pour evaluer ses
						connaissances sur les formations.</p><br/><br/>
					<p class="wow animated fadeIn">Je me suis personnelement occupé de la partie "back-office", c'est a
						dire toute la partie accessible par les administrateurs ainsi que le système d'authentification.
						Les administrateurs ont accès à plusieurs données, dont la listes des utilisateurs et des
						questionnaires, etc... Ces pages proposent plusieus actions comme l'ajout, la suppression ou
						l'edition.</p><br/>
					<hr/>
					<br/>
					<h4 class="wow animated fadeIn text-light">Pixagility</h4>
					<p class="wow animated fadeIn">Le second projet, Pixagility, est la création sur mesure d'un thème
						wordpress pour un client.</p><br/><br/>
					<p class="wow animated fadeIn">A l'aide de la maquette fournit par le client, j'ai développé
						plusieurs "briques" en HTML & SCSS, une fois importer en php et grace à l'extension Elementor de
						wordpress, le client peut disposer les briques comme il le souhaite.</p><br/><br/>
					<p class="wow animated fadeIn">J'ai créer 4 briques responsives, dont une ou j'ai peu apprendre à
						utiliser l'API Google maps, ce qui me permet d'avoir plus de possibilité de personnalisation,
						ainsi que l'api Youtube.</p><br/><br/>
				</div>
			</div>
			<div class="carousel slide carousel-stage" id="carouselExampleIndicators" data-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item active">
						<div class="row row-carousel">
							<div class="col-md-12 animated fadeInRight">
								<img class="img-carousel"
									 src="../assets/img/pistil/pfquiz-admin-show-all.png"
									 alt="stack"/>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="row row-carousel">
							<div class="col-md-12 animated fadeInLeft">
								<img class="img-carousel" src="../assets/img/pistil/pfquiz-admin-new.png" alt="stack"/>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="row row-carousel">
							<div class="col-md-12 animated fadeInRight">
								<img class="img-carousel" src="../assets/img/pistil/pfquiz-questionnaire-edit.png"
									 alt="stack"/></div>
						</div>
					</div>
				</div>
				<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"/>
					<span class="sr-only">Previous</span>
				</a>
				<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"><span
						class="carousel-control-next-icon" aria-hidden="true"/>
					<span class="sr-only">Next</span>
				</a>
			</div>
		</div>
	</div>
</template>


<script>
	$('.carousel').carousel();

	export default {
		name: "StagePS",
		created() {
			document.title = "Stage chez Pistil Studio";
		}
	}
</script>

<style scoped>

</style>