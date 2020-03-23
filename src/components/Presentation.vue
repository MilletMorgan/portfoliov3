<!-- eslint-disable -->

<template>
	<div class="profile">
		<!--		<div class="fullscreen-bg">-->
		<!--			<video loop muted autoplay poster="../assets/files/background.png" id="bgvid">-->
		<!--				<source src="../assets/files/background.webm" type="video/webm">-->
		<!--			</video>-->
		<!--		</div>-->

		<router-view/>
		<router-view class ="us__content"/>
		<router-view name="helper" class="us__content us__content--helper"/>
		<router-view name="svg" class="us__content us__content--helper"/>


		<div class="row">
			<div class="col-md-5">
				<div class="row">
					<div class="col-md-6">
						<img class="img-profile my-shadow wow animated fadeIn" src="../assets/img/profile.png"
							 alt="profile">
					</div>
					<div class="col-md-6">
						<div class="title-profile wow animated fadeIn text-light">
							<h1>MORGAN MILLET</h1>
							<h5>DEVELOPPEUR WEB</h5>
						</div>
					</div>
				</div>
				<br><br><br>

				<div class="row">
					<div class="col-md-6">
						<a href="https://srv-file7.gofile.io/download/64gtqe/cv.pdf" download>
							<div class="link-button shadow-hover make-it-slow wow animated fadeIn">
								<button class="link-button2">
									TELECHARGER MON CV
								</button>
							</div>
						</a>

					</div>
					<div class="col-md-6">
						<a href="https://srv-file7.gofile.io/download/64gtqe/cv.pdf" download>
							<div class="link-button shadow-hover make-it-slow wow animated fadeIn">
								<button class="link-button2">
									TELECHARGER MA GRILLE DE COMPETANCES
								</button>
							</div>
						</a>
					</div>
				</div>

				<br>
				<hr>
				<br>

				<p class="justify wow animated fadeIn">
					Après avoir passé mon BAC STMG option Services Informatique de Gestion, j’ai décidé de poursuivre
					mes études par un BTS SIO option SLAM. Ce BTS nous enseigne les bases du développement web et
					logiciel en complément de cours plus généralisé. À la suite de cela, je souhaite poursuivre mes
					études jusqu'au Master. En plus de mes études, j'ai créé ma micro entreprise afin de pouvoir
					développer des sites web pour professionnel et particulier.

				</p>
			</div>
			<div class="col-md-7 wow animated fadeIn">
				<div class="row">
					<router-link class="col-md-4" to="/experiences">
						<div id="experiences" class="link-btn shadow-hover make-it-slow wow animated fadeIn">
							<div class="link-btn2">
								EXPERIENCES
							</div>
						</div>
					</router-link>
					<router-link class="col-md-4" to="/formations">
						<div id="formations" class="link-btn shadow-hover make-it-slow wow animated fadeIn">
							<div class="link-btn2">
								FORMATIONS
							</div>
						</div>
					</router-link>
					<router-link class="col-md-4" to="/competences">
						<div class="link-btn shadow-hover make-it-slow wow animated fadeIn">
							<div class="link-btn2">
								COMPETENCES
							</div>
						</div>
					</router-link>
					<router-link class="col-md-4" to="/veilles">
						<div class="link-btn shadow-hover make-it-slow wow animated fadeIn">
							<div class="link-btn2">
								VEILLES
							</div>
						</div>
					</router-link>
					<router-link class="col-md-4" to="/stages">
						<div class="link-btn shadow-hover make-it-slow wow animated fadeIn">
							<div class="link-btn2">
								STAGES
							</div>
						</div>
					</router-link>
					<router-link class="col-md-4" to="/portfolio">
						<div class="link-btn shadow-hover make-it-slow wow animated fadeIn">
							<div class="link-btn2">
								PORTFOLIO
							</div>
						</div>
					</router-link>
					<router-link class="col-md-12" to="/contact">
						<div class="link-btn shadow-hover make-it-slow wow animated fadeIn">
							<div class="link-btn2">
								CONTACT
							</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    /**
     import JQuery from 'jquery'
     let $ = JQuery;

     $(document).ready(function(){
        $('.cube-link2').mouseover(function(){
            $('.cube-link').css(
                'background','-webkit-gradient(linear, right top, left top, from(#da1b60), to(#ff8a00))',
                'transition', 'all 0.3s cubic-bezier(.25,.8,.25,1)'
            );
        });
        $('.cube-link2').mouseout(function(){
            $('.cube-link').css(
                'background','-webkit-gradient(linear, right top, left top, from(#ff8a00), to(#da1b60))',
                'transition', 'all 0.3s cubic-bezier(.25,.8,.25,1)'
            );
        });
    });

     **/

    export default {
        name: 'Presentation'
    };
</script>

<style scoped>

</style>
