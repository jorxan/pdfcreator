const colors = {
	green : {
		wrapperBackground : '#E6E1C3',
		headerBackground  : '#C1C72C',
		headerColor       : 'black',
		photoBorderColor  : '#black'
	},
	blue  : {
		wrapperBackground : '#5F64D3',
		headerBackground  : '#26175A',
		headerColor       : 'white',
		photoBorderColor  : '#73448C'
	},
	pink  : {
		wrapperBackground : '#879CDF',
		headerBackground  : '#FF8374',
		headerColor       : 'white',
		photoBorderColor  : '#FEE24C'
	},
	red   : {
		wrapperBackground : '#DE9967',
		headerBackground  : '#870603',
		headerColor       : 'white',
		photoBorderColor  : 'white'
	}
};

function generateHTML(color, res, map, stars) {
	return `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <title>Document</title>
      <style>
          @page {
            margin: 0;
          }
         *,
         *::after,
         *::before {
         box-sizing: border-box;
         }
         html, body {
         padding: 0;
         margin: 0;
         }
         html, body, .wrapper {
         height: 100%;
         }
         .container {
            padding: 50px;
            padding-left: 100px;
            padding-right: 100px;
            }
            .wrapper {
                background-color: ${colors[color].wrapperBackground};
                padding-top: 100px;
                }
                body {
                background-color: white;
                -webkit-print-color-adjust: exact !important;
                font-family: 'Cabin', sans-serif;
                }
                main {
                background-color: #E9EDEE;
                height: auto;
                padding-top: 30px;
                }
                h1, h2, h3, h4, h5, h6 {
                font-family: 'BioRhyme', serif;
                margin: 0;
                }
                h1 {
                font-size: 3em;
                }
                h2 {
                font-size: 2.5em;
                }
                h3 {
                font-size: 2em;
                }
                h4 {
                font-size: 1.5em;
                }
                h5 {
                font-size: 1.3em;
                }
                h6 {
                font-size: 1.2em;
                }
         </style>
      </head>
      <body>
      <div class = "wrapper">
    <div class= "container">
      <div class= "jumbotron text-center">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
</div>
</div>
      
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
   </body>`;
}

module.exports = {
	generateHTML : generateHTML
};
