const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let myRotation = 0;


let gameObject = {};
var warp = false;
let images = ["ship.png"];



function setup(){
  gameObject.image = new Image();
  gameObject.image.src = "ship.png";
  gameObject.x = canvas.width / 2;
  gameObject.y = canvas.height / 2;
  gameObject.scale = 1
  gameObject.v_y = 1;
  gameObject.v_x = 1;
  animate();

}

function animate(){

  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
    if(warp){
      gameObject.v_y *= 2.001
      gameObject.v_x *= 2.001
    }
    gameObject.y += gameObject.v_y*gameObject.scale;
    gameObject.x += gameObject.v_x*gameObject.scale;
    context.drawImage(gameObject.image,gameObject.x,gameObject.y,gameObject.image.width*gameObject.scale,gameObject.image.height*gameObject.scale);
    if(gameObject.y > canvas.height){
      gameObject.y = 0;
    }
    if(gameObject.x > canvas.width){
      gameObject.x = 0;
  }

  if(gameObject.y < 0){
    gameObject.y = canvas.height;
  }
  if(gameObject.x < 0){
    gameObject.x = canvas.width;
}

  document.addEventListener('keydown', function(event) {
      switch (event.key) {
        case "ArrowUp":
          gameObject.v_y = gameObject.v_y - 0.01;
          break;

          case "ArrowDown":
            gameObject.v_y = gameObject.v_y + 0.01;
            break;

            case "ArrowLeft":
              gameObject.v_x = gameObject.v_x - 0.01;
              break;

              case "ArrowRight":
                gameObject.v_x = gameObject.v_x + 0.01;
                break;
                case "Enter":
                  if(warp){
                    warp = false;
                  }
                  else{
                    warp = true;
                  }
                  console.log("warp:",warp)
                  break;
        default:

      }
  });
}

function getRandomNumber(max){
  return Math.floor(Math.random()*max);
  }
setup();
