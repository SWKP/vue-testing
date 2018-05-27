<template>
    <div>
        <div id="fullpage">
	<div class="section slideOne" id="section0">
		<video autoplay muted loop id="myVideo">
				<source src="../assets/video/Sunset-Lapse.mp4" type="video/mp4">
				<source src="../assets/video/Sunset-Lapse.webm" type="video/webm">
				Your browser is not supported!
		</video>
		<div class="content">
			<h1>DEAR DIVINE</h1>
			<p style="max-width:500px; margin:0 auto; padding-bottom:20px;">A spiritual community for truth seekers and truth tellers.</p>
            <a href="/SignUp"><button class="btn btn--white btn--animated">GET STARTED</button></a>
            <a href="#login"><button class="btn btn--white btn--animated">LOGIN</button></a>
		</div>
	</div>
	<div class="section slideTwo" id="section1">

			<div class="content">
                <img src="../assets/img/logo-mainV1.png" style="width: 250px; height: 250px; border-radius: 50%; margin: 0 auto;">
				<h2 style="margin-bottom: -50px;">Dear Divine</h2>
                <h2>Digital divinity...</h2>
                <p>Join to connect with fellow soulseekers through our astrological algorythm.</p>

                <p>Stay to seek, find and exchange spiritual support and information.</p>
                <div></div>
			</div>
	</div>
            <div class="section slideThree" id="section1">

			<div class="content">
				<h2>SEEK</h2>
                <p> Spiritual information and activities to spark your eternal light.</p>

                <img width="800px" src="../assets/img/seekPlaceholder.png" alt="Seek articles placeholder">
			</div>
	</div>
            <div class="section slideFour" id="section1">

			<div class="content">
				<img width="600px" src="../assets/img/findPlaceholder2.png" alt="Find placeholder">
				<h2>FIND</h2>
                <p style="max-width:350px; margin:0 auto; color: white;">Spiritual masters and healers who will inspire you.</p>
			</div>
	</div>
            <div class="section slideFive" id="section1" style="background-color:rgb(230, 173, 0);">

			<div class="content">
				<img width="350px" src="../assets/img/exchangePlaceholder.png" alt="Exchange placeholder">
				<h2>EXCHANGE</h2>
                <p style="max-width:350px; margin:0 auto; color: black;">Information and support with each other and a network of spiritual healers.</p>
			</div>
	</div>
	<div class="section slideSix" id="section2">
		<video autoplay muted loop id="myVideo2">
				<source src="../assets/video/Three-Swans.mp4" type="video/mp4">
				<source src="../assets/video/Three-Swans.webm" type="video/webm">
				Your browser is not supported!
		</video>
        <div class="slide" id="slide1">
            <div class="content">
                <h2>Join Dear Divine</h2>
                <a href="/SignUp"><button class="btn btn--white btn--animated" >Sign Up</button></a>
                <a href="#login"><button class="btn btn--white btn--animated">Login</button></a>
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
        <div class="login" id="login">
        <div class="login__content">
            <a href="#" class="login__close">&times;</a>
            <form action="#" class="form">
                <h2><span>Sign in to</span><br> Dear Divine</h2>
                <div class="form__group">
                    <input type="text" class="form__input" placeholder="Full Name" id="name" required>
                    <label for="name" class="form__label">Full name</label>
                </div>
                <div class="form__group">
                    <input type="password" class="form__input" placeholder="Password" id="password" required>
                    <label for="password" class="form__label">Password</label>
                </div>
            </form>
            <button class="btn btn--purple btn--animated">Login</button>
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
            anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', 'lastPage'],
            menu: '#menu',
            navigation: true,
            navigationPosition: 'right',
            navigationColor: '#f2f',
            navigationTooltips: ['GET STARTED', 'JOIN US', 'SEEK', 'FIND', 'EXCHANGE', 'LOGIN'],
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
            controlArrows: false
        });
            console.log('WORKING?');
        }

    }
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';

    /* Reset CSS -------------------------- */
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

		h1{
			font-size: 6em;
		}
		p{
			font-family: Rambla, Helvetica, Arial, sans-serif;
			font-size: 1.5rem;
		}
		.content{
			position: relative;
			top: 50%;
			transform: translateY(-50%);
			text-align: center;
		}

		/* Section 1
		 * --------------------------------------- */
		#section0{
            height: 100vh!important;
			background-image: linear-gradient(
        to right bottom,
		 rgba(180, 14, 234, 0.6), rgba(180, 14, 234, 0.6));
		 //url(../assets/img/slide02.jpg)
			background-position: center;
            background-repeat: no-repeat;
			background-size: cover;

			& h1{
				color: #fff;
				font-family: Rambla, Helvetica, Arial, sans-serif;
			}

			& p{
				opacity:0.75;
				margin-bottom: 30px!important;
				color: #fff;
				padding: 18px 0 20px 0;
				border: 2px solid #ffffff42;
				border-radius: 5px;
				font-size: 20px;
			}
		}

		/* Section 2
		 * --------------------------------------- */
		#section1{
			height: 100vh!important;

			& h2{
				font-size:50px;
				color: rgb(209, 216, 209);
				font-family: Rambla, Helvetica, Arial, sans-serif;
				padding: 20px 10%;
			}

			& p{
				opacity: 0.8;
				color: #dcb484;
			}
		}


		/* Section 3
		 * --------------------------------------- */
    #slide1{
		background-image: linear-gradient(to right bottom, rgba(188, 64, 228, 0), rgba(65, 51, 123, 0.23));
		//background-image:url(../assets/img/slideEnd01.jpg);
		background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
		#section2{
            height: 100vh!important;
		}
		#section2 h2, #section0 h1 {
			color: #fff;
            font-family: Rambla, Helvetica, Arial, sans-serif;
            padding: 20px 10%;
            text-shadow: 7px 7px 7px #69236952;
		}
		#section2 p{
			opacity: 0.6;
            color:white;
		}

    /*Other styling */
    #fp-nav ul li a span, .fp-slidesNav ul li a span {
    background: #fff!important;
	}

	.slideTwo{
		background: linear-gradient(
        to right bottom,
		 #c21500, #ffc500);

		 & h2 {
			 color: #fff!important;
		 }

		 & p {
			 max-width:320px; margin:20px auto; text-align:left;
			 color: #fff!important;
		 }
	}
	.slideThree{
		background: linear-gradient(
        to right bottom,
		 rgb(52, 247, 178), rgb(26, 136, 98));

		 & h2 {
			 color: #fff!important;
		 }

		 & p {
			 max-width:320px; margin:20px auto; text-align:left;
			 color: #fff!important;
		 }
	}
	.slideFour{
		background: linear-gradient(
        to right bottom,
		 #4b134f, #c94b4b);

		 & h2 {
			 color: #fff!important;
		 }

		 & p {
			 max-width:320px; margin:20px auto; text-align:center;
			 color: #fff!important;
		 }
	}
	.slideFive{
		background: linear-gradient(
        to right bottom,
		 #92FE9D, #00C9FF);

		 & h2 {
			 color: #fff!important;
		 }

		 & p {
			 max-width:320px; margin:20px auto; text-align:center;
			 color: #fff!important;
		 }
	}

	#myVideo, #myVideo2 {
		position: absolute;
		top: 0;
		left: 0;
		width: 100wv;
		z-index: -1;
	}

    /*Login Popup*/
    .login {
        position: fixed;
        background-color:rgba(black, .8);
        height: 100vh;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 99999999;
        opacity: 0;
        visibility: hidden;
        transition: all .4s;

        &:target {
            opacity: 1;
            visibility: visible;
        }

        &__content {
            @include centerElement;
            width: 400px;
            background-color: white;
            box-shadow: 0 2rem 4rem rgba(black, .2);
            border-radius: 3px;
            display: table;
            overflow: hidden;
            opacity: 0;
            transform: translate(-50%, -50%) scale(.25);
            transition: all .4s .2s;
            padding: 2rem;

            button {
                margin: 1rem 2.5rem;
            }

            span {
                font-size: 1rem;
                margin-bottom: -20px;
            }

            h2 {
                text-align:center;
                margin: 3rem 0;
                font-family: Rambla, Helvetica, Arial, sans-serif;
                font-size: 3rem;
                line-height: 2rem;
            }
        }

        &:target &__content {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }

        &__close {
            &:link,
            &:visited {
                color: $color-grey-dark;
                position: absolute;
                top: .5rem;
                right: 1.5rem;
                font-size: 3rem;
                text-decoration: none;
                display: inline-block;
                transition: all .2s;
                line-height: 1;
            }

            &:hover {
                color: $color-purple;
            }
        }
    }

    .form {
        &__input {
            font-size: 1rem;
            font-family: inherit;
            padding: 1rem 2rem;
            margin: 0 auto;
            border-radius: 2px;
            font-family: Rambla, Helvetica, Arial, sans-serif;
            background-color: white;
            border: none;

            border-bottom: 3px solid transparent;
            width: 70%;
            display: block;
            transition: all .3s;

            &:focus {
                outline:1px solid #f1f1f1;
                box-shadow: 0 1rem 2rem rgba($color-black, .1);
                border-bottom: 3px solid $color-primary;
            }

            &:focus:invalid {
                border-bottom:  3px solid $color-secondary-dark;
            }

            &::-webkit-input-placeholder {
                color: $color-grey-dark-2;
            }

        }

        &__label {
            font-family: Rambla, Helvetica, Arial, sans-serif;
            font-size: .7rem;
            font-weight: 500;
            margin-left: 3.5rem;
            margin-top: .7rem;
            display: block;
            transition: all .3s;
        }

        &__input:placeholder-shown + &__label {
            opacity: 0;
            visibility: hidden;
            transform: translateY(-3rem);
        }

    }

</style>
