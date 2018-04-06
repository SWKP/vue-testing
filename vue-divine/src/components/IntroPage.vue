<template>
    <div>
        <div id="fullpage">
	<div class="section" id="section0">
		<div class="content">
			<h1>DEAR DIVINE,</h1>
			<p>Don't speculate just meditate.</p>
		</div>
	</div>
	<div class="section" id="section1">

			<div class="content">
				<h2>In a dark place we find ourselves, and a little more knowlede lights our way.</h2>
				<p>
					-Master Yoda
				</p>
			</div>
	</div>
	<div class="section" id="section2">
        <div class="slide" id="slide1">
            <div class="content">
			<h2>Join Dear Divine if you want to... live</h2>
			<p>T-800</p>
                <button style="background-color:red;">DIE</button><button class="joinButton" @click="signUp" style="background-color:green;"><a href="/SignUp">LIVE</a></button>
		</div>
        </div>
		<div class="slide" id="slide2">
			<div class="content">
				<h1>Slide two!</h1>
			</div>
		</div>
		<div class="slide" id="slide2">
			<div class="content">
				<h1>More slides!</h1>
			</div>
		</div>
	</div>
</div>
    </div>
</template>

<script>
    import { eventBus } from './../main';
    import '../assets/js/javascript.fullPage.js';
    import '../assets/css/javascript.fullPage.css';
    /*import '../assets/js/mounted.js';*/
    import '../assets/css/fonts.css';

    export default {
        data: function () {
            return {

            }
        },
        methods: {
             signUp: function(){
                console.log('LIVE');
                eventBus.$emit('signUpComponentSwap');
            }
        },
        mounted(){
            fullpage.initialize('#fullpage', {
            anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
            menu: '#menu',
            navigation: true,
            navigationPosition: 'right',
            navigationColor: '#f2f',
            navigationTooltips: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
            slidesNavigation: false,
            slidesNavPosition: 'bottom',
            scrollBar: false,
            //scrolling
            css3: true,
            scrollingSpeed: 500,
            autoScrolling: true,
            easingcss3: 'ease-out',
            loopHorizontal: true,
            touchSensitivity: 5,
            //Accessibility
            keyboardScrolling: true,
            recordHistory: true,
            //design
            controlArrows: true
        });
            console.log('WORKING?');
        }

    }
</script>

<style scoped>


    /* Reset CSS
		 * --------------------------------------- */
		body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,
		form,fieldset,input,textarea,p,blockquote,th,td {
		    padding: 0;
		    margin: 0;
		}
		a{
			text-decoration:none;
		}
		table {
		    border-spacing: 0;
		}
		fieldset,img {
		    border: 0;
		}
		address,caption,cite,code,dfn,em,strong,th,var {
		    font-weight: normal;
		    font-style: normal;
		}
		strong{
			font-weight: bold;
		}
		ol,ul {
		    list-style: none;
		    margin:0;
		    padding:0;
		}
		caption,th {
		    text-align: left;

		}
		h1,h2,h3,h4,h5,h6 {
		    font-weight: normal;
		    font-size: 100%;
		    margin:0;
		    padding:0;
		    color:#444;
            line-height: 1.25em;
		}
    h2{
        font-size:64px;
    }
		q:before,q:after {
		    content:'';
		}
		abbr,acronym { border: 0;
		}


		/* Custom CSS
		 * --------------------------------------- */
		body{
			font-family: arial,helvetica;
			color: #F2F2F2;
		}
		h1{
			font-size: 6em;
		}
		p{
			font-size: 2em;
		}
		.content{
			position: relative;
			top: 50%;
			transform: translateY(-50%);
			text-align: center;
		}
    .section{

    }

		/* Section 1
		 * --------------------------------------- */
		#section0{
			background-color: #BFDA00;
            height: 100vh!important;
            background-image:url(../assets/img/slide01.jpg);
            background-repeat: no-repeat;
            background-size: cover;
		}
		#section0 h1{
			color: #fff;
            font-family: Rambla, Helvetica, Arial, sans-serif;
		}
		#section0 p{
			color: #fff;
			opacity: 0.5;
		}


		/* Section 2
		 * --------------------------------------- */
		#section1{
			background-color: #14333a;
            height: 100vh!important;
		}
		#section1 h2{
			color: limegreen;
            font-family: Rambla, Helvetica, Arial, sans-serif;
            padding: 20px 10%;
		}
		#section1 p{
			opacity: 0.8;
            color: #dcb484;
		}


		/* Section 3
		 * --------------------------------------- */
    #slide1{
        background-image:url(../assets/img/spaceBg01.jpg);
            background-repeat: no-repeat;
            background-size: cover;
    }
		#section2{
			background-color: #2C3E50;
            height: 100vh!important;
		}
		#section2 h2{
			color: #fff;
            font-family: Centauri, Helvetica, Arial, sans-serif;
            padding: 20px 10%;
            text-shadow: 7px 7px 7px #692369;
		}
		#section2 p{
			opacity: 0.6;
            color:white;
		}

    /*Other styling */
    #fp-nav ul li a span, .fp-slidesNav ul li a span {
    background: #fff!important;
    }
    button {
        margin: 10px;
        padding: 10px 30px;
        border-radius: 20px;
        transition: all 0.25s ease-in;
    }
    button {
        font-size: 15px;
        color: white;
    }
    button:hover{
        background-color:black!important;
    }

</style>
