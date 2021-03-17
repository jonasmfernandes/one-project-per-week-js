const text = [
  `I'm baby chambray keytar kitsch pork belly bushwick church-key, art party scenester craft beer tilde franzen gochujang hot chicken. Whatever schlitz hella intelligentsia, retro narwhal ramps kinfolk XOXO wolf migas deep v. Waistcoat taxidermy meditation plaid lumbersexual DIY swag. Godard lomo you probably haven't heard of them, sartorial whatever taiyaki 3 wolf moon scenester freegan iceland schlitz. Meggings gentrify single-origin coffee offal food truck crucifix. Shaman shabby chic actually humblebrag quinoa narwhal, echo park vinyl photo booth stumptown. Pabst gentrify polaroid 90's try-hard deep v tofu irony meditation iceland.`,

`DIY disrupt lumbersexual banjo organic try-hard. Chambray marfa humblebrag hashtag, actually synth try-hard gluten-free pickled direct trade tofu brunch pop-up air plant taxidermy. Ugh VHS cold-pressed whatever hexagon next level, seitan hammock cloud bread post-ironic pour-over pop-up. Man braid raclette snackwave poke meh vice polaroid lomo. Viral aesthetic pop-up tote bag biodiesel humblebrag, four loko thundercats schlitz trust fund. 3 wolf moon narwhal try-hard pour-over. Leggings street art forage cardigan.`,

`Hammock jean shorts crucifix subway tile adaptogen williamsburg YOLO, food truck tacos. Raw denim pok pok 3 wolf moon, yr scenester chia butcher 90's. 8-bit slow-carb activated charcoal listicle, banh mi cold-pressed yr. Blog marfa palo santo, green juice quinoa live-edge heirloom. Shabby chic deep v activated charcoal plaid actually pickled. Gentrify mumblecore fashion axe, hot chicken copper mug meditation tofu slow-carb butcher.`,

`Whatever YOLO fashion axe, chia waistcoat jean shorts kickstarter schlitz portland trust fund church-key. Ramps williamsburg schlitz, tacos gastropub kogi stumptown hella copper mug tofu vape meditation forage next level. Pinterest fanny pack readymade waistcoat butcher poke hashtag. Post-ironic shoreditch wolf, kitsch bespoke deep v kinfolk selfies keffiyeh kogi ethical. Authentic tbh fam mumblecore, taiyaki four loko subway tile hashtag cred kitsch keytar edison bulb. Marfa prism hoodie health goth listicle brunch readymade ethical mlkshk edison bulb palo santo meditation cardigan woke vexillologist. Next level single-origin coffee selvage skateboard, lomo chia sustainable.`,

`Pug migas tote bag pinterest bicycle rights hexagon thundercats. Helvetica fam jean shorts cloud bread raclette cornhole adaptogen dreamcatcher small batch kickstarter farm-to-table ugh thundercats. XOXO hell of schlitz tilde shoreditch. +1 seitan vice man braid umami cronut heirloom shaman. Fingerstache bespoke asymmetrical, deep v portland forage gochujang retro affogato meh DIY before they sold out chillwave vaporware. Leggings wolf gluten-free selvage. Pinterest shabby chic raw denim irony, asymmetrical authentic health goth wayfarers fanny pack slow-carb blog.`
]

const form = document.querySelector(".lorem-form")
const amount = document.getElementById("amount")
const result = document.querySelector(".lorem-text") 

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);

  if (isNaN(value) || value <= 0 || value > 9) {
    result.innerHTML = `<p class="result">${text[random]}</p>`;
  }
  else {
    let tempText = text.slice(0,value);
    tempText = tempText.map(function(item){
      return `<p class="result">${item}</p>`;
    })
    .join("");
    result.innerHTML = tempText;
  }
})