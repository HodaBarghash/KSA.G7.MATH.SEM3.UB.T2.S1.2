function ExecuteScript(strId)
{
  switch (strId)
  {
      case "65XwFTCfa5a":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbxzz3b4uuZdG8qIs-coKGZunvK5lWMtbiVDurY8J0cWXHoA-JL2KIdWZhrP8p2_dDY/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

