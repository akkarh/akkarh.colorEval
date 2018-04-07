// process the color info and query WebAIM for accessibility info

// TODO: placeholder for now; replace with actual json result
let input = {
    "tags" : [
      {
        "label" : "Green",
        "color" : "#2A5D24"
      },
      {
        "label" : "Beige",
        "color" : "#A99670"
      },
      {
        "label" : "Gray",
        "color" : "#282523"
      },
      {
        "label" : "Brown",
        "color" : "#523E2D"
      }
    ]
  }

let tags = input["tags"];
let background = tags[0]; // the most prominent color

function parseInput() {
    console.log("here");
}

parseInput();