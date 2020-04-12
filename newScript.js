const images_Pills = [
  {
    loc: 'images/Pills/aspirin.jpg',
    alt: 'Aspirin',
    title: 'Hackme Co. Aspirin',
    price: '$24.99',
    desc:
      'Cures headaches, backaches, musclepain, nausea, heartburn, <br> indigestion, upset stomach and diorr...diarr...however you spell that last one. <br> Hackme Aspirin: Targets your pains, probably'
  },

  {
    loc: 'images/Pills/hair.jpg',
    alt: 'Hair Grower',
    title: 'Hackme Co. Hair Growing Tonic',
    price: '$19.99',
    desc:
      'Balding? Our patent pending formula keeps your hair growing <br>  no matter the ailment. Here at hackme, our saying is <br> "Use it or dont, we dont care we\'re not legally liable if it doesnt work anyway"...we should  <br> probably rethink that one'
  },

  {
    loc: 'images/Pills/instantgirl.jpg',
    alt: 'Instant Girl',
    title: 'Hackme Co. Instant Girl Pills',
    price: '$5.99',
    desc:
      'Contains: Sugar, Spice, Everything nice. <br> Just add water. WARNING: DO NOT CONSUME. Not because something <br> legally troubling will happen, we just dont <br> actually know whats in it and <br> if it will kill you. but it probably wont. maybe. '
  },
  {
    loc: 'images/Pills/quake.jpg',
    alt: 'Earthquake Pills',
    title: 'Hackme Co. Earthquake Pills',
    price: '$29.99',
    desc:
      'After an unfortunate event resulting in the destruction of several different nations <br> and heavy class action lawsuits with allegations <br> that were never proven in a court of law, we are <br> once again selling our patented <br> earthquake pills. shake up your life today!'
  },
  {
    loc: 'images/Pills/triplef.jpg',
    alt: 'Leg Muscle Vitamins',
    title: 'Hackme Co. Leg Muscle Vitamins',
    price: '$10.99',
    desc: 'Not approved by any sports association, but we wont tell if you dont!'
  }
];

const images_Gadgets = [
  {
    loc: 'images/Gadgets/acmeelec.jpg',
    alt: 'Electric Eye',
    title: 'Hackme Co. Electric Eye',
    price: '$20.99',
    desc:
      'I dont even know what this is, even the factory doesnt<br>  know what it is but its cool as hell. Order like 6 if you want'
  },
  {
    loc: 'images/Gadgets/boomerang.jpg',
    alt: 'Boomerang',
    title: 'Hackme Co. Boomerang',
    price: '$9.99',
    desc: 'millennialrang sold seperately.'
  },
  {
    loc: 'images/Gadgets/hen.jpg',
    alt: 'Hen Grenade',
    title: 'Hackme Co. Hen Grenade',
    price: '$2.99',
    desc: 'Scare the hell out of a chicken <br> coop with this fun gag toy'
  },
  {
    loc: 'images/Gadgets/hitch.jpg',
    alt: 'Hitch Hikers Thumb',
    title: 'Hackme Co. Hitch Hikers Thumb',
    price: '$5.99',
    desc: 'Flag down rides with ease with this <br> simple gadget from Hackme Supply co'
  },
  {
    loc: 'images/Gadgets/indestructo.jpg',
    alt: 'Indestructable Ball',
    title: 'Hackme Co. Indestructable Ball',
    price: '$55.99',
    desc:
      'Come in like a wrecking ball with this indestructable steel <br> weapon of constant rolling devastation.<br>  Warning: Hackme Co. is not responsible for injuries resulting in <br>  attempting to hide within ball enclosure'
  },
  {
    loc: 'images/Gadgets/jetmotor.jpg',
    alt: 'Jet Motor',
    title: 'Hackme Co. Jet Motor',
    price: '$599.99',
    desc:
      'We wont ask why and wont tell why you might need a <br> jet motor, but for a price like this you can deprive one more plane of a <br> jet motor. Not like it was using it anyway!'
  },
  {
    loc: 'images/Gadgets/jetuni.jpg',
    alt: 'Jet Propelled Unicycle',
    title: 'Hackme Co. Jet Propelled Unicycle',
    price: '$25.99',
    desc:
      'Impress your friends, get the ladies, or whomever you want,<br>  you got a jet unicycle man, the world is your oyster. <br>  probably. (Hackme Co. is not responsible for being disowned as <br>  a result of spending money on a jet propelled unicycle'
  },
  {
    loc: 'images/Gadgets/smoke.jpg',
    alt: 'Smoke bomb',
    title: 'Hackme Co. Smoke bomb',
    price: '$15.99',
    desc: 'Disappear into the night with this Hackme brand Smokescreen Bomb!'
  },
  {
    loc: 'images/Gadgets/tennisshoes.png',
    alt: 'Jet Propelled Tennis Shoes',
    title: 'Hackme Co. Tennis Shoes',
    price: '$20.99',
    desc: 'Run at the speed of sound with these jet propelled tennis shoes!'
  }
];

const images_essent = [
  {
    loc: 'images/Essentials/anvil.jpg',
    alt: 'Acme Anvil',
    title: 'Hackme Co. Acme Anvil',
    price: '$59.99',
    desc: '100% real metal'
  },

  {
    loc: 'images/Essentials/axle.jpg',
    alt: 'Acme Axle Grease',
    title: 'Hackme Co. Acme Axle Grease',
    price: '$10.99',
    desc:
      "Guaranteed Slippery, otherwise we're<br>  keeping your money anyway. Go complain about it"
  },

  {
    loc: 'images/Essentials/boulders.jpeg',
    alt: 'Boulders',
    title: 'Hackme Co. Boulders',
    price: '$29.99',
    desc:
      "Just add water for hours of fun. What kind of fun? <br> I dunno, you're the one that bought this"
  },

  {
    loc: 'images/Essentials/bumble.jpg',
    alt: 'Bees.',
    title: 'Hackme Co. Bees.',
    price: '$25.99',
    desc:
      'Container of all natural organic bees. <br> Warning: Hackme Co. is not responsible for injury as a result of being <br> stung by a container of very angry bees <br> that we may or may not have shaken <br> like crazy before shipping'
  },

  {
    loc: 'images/Essentials/elephant.jpg',
    alt: 'Elephant Bullets',
    title: 'Hackme Co. Elephant Bullets',
    price: '$10.00',
    desc:
      'Elephant sized bullets? Bullets meant for elephants? <br> Half the fun is finding out what you get'
  },

  {
    loc: 'images/Essentials/tooth.jpg',
    alt: 'Toothpicks',
    title: 'Hackme Co. Toothpicks',
    price: '$0.99',
    desc: 'Now made from 100% real teeth!'
  },

  {
    loc: 'images/Essentials/ultima.jpg',
    alt: 'Ultimatum Dispatcher',
    title: 'Hackme Co. Ultimatum Dispatcher',
    price: '$15.99',
    desc:
      'Made specially for martians and/or defenders<br>  of the twenty-first (and a half) century'
  },

  {
    loc: 'images/Essentials/umbr.jpg',
    alt: 'Umbrella',
    title: 'Hackme Co. Umbrella',
    price: '$10.99',
    desc:
      'For use only in the event of gravity, falling debris, <br> or other emergencies that require protection <br> via tiny umbrella'
  },

  {
    loc: 'images/Essentials/whip.jpg',
    alt: 'Whipped Cream Dispenser',
    title: 'Hackme Co. Whipped Cream Dispenser',
    price: '$2.99',
    desc: "Just whipped cream, because every scheme needs a lil' dessert"
  }
];

const images_bait = [
  {
    loc: 'images/Bait/ironcarrot.jpg',
    alt: 'Iron Carrot',
    title: 'Iron Carrot',
    price: '$5.99',
    desc:
      'Fool your friends with this incredible iron carrot!<br> Caution: Do not use around giant magnets'
  },
  {
    loc: 'images/Bait/ironseed.jpg',
    alt: 'Iron Seeds',
    title: 'Iron Seeds',
    price: '$2.99/lb',
    desc:
      "For when you need to catch a pesky bird with a comically sized magnet.<br> Caution: Do not use as BB replacement, you'll shoot your eye out"
  },
  {
    loc: 'images/Bait/regseed.jpg',
    alt: 'Bird Seeds',
    title: 'Bird Seeds',
    price: '$2.99/lb',
    desc:
      "Common bird seed, safe for all birds,<br> or other creatures, I'm just text on a screen, go nuts."
  },
  {
    loc: 'images/Bait/trickbone.jpg',
    alt: 'Trick Bone',
    title: 'Trick Bone',
    price: '$10.00',
    desc:
      'Fool your friends or your dog with this <br> incredible gag gift, now with 101% real calcium!'
  }
];

const images_DIY = [
  {
    loc: 'images/DIY/explosive.jpg',
    alt: 'Junior Explosive Kit',
    title: 'Hackme Co. Explosive kit',
    price: '$20.00',
    desc: 'Will not provide an "Earth Shattering Kaboom" <br>but will provide hours of fun'
  },

  {
    loc: 'images/DIY/icicle.jpg',
    alt: 'Icicle Maker',
    title: 'Hackme Co. Icicle Maker',
    price: '$5.00',
    desc: 'Freeze your friends for loads of laughs'
  },

  {
    loc: 'images/DIY/jetprop.jpg',
    alt: 'Jet Pogo Stick',
    title: 'Hackme Co. Jet Pogo Stick',
    price: '$199.99',
    desc: 'Bounce higher than ever with this<br> Jet Pogo Stick from Hackme Supply'
  },

  {
    loc: 'images/DIY/kite.jpg',
    alt: 'Giant Kite',
    title: 'Hackme Co. Giant Kite',
    price: '$55.99',
    desc:
      'Provides hours of entertainment, do not fly near airports <br> or during wind storms, Hackme Supply Co <br>is not liable if used as hang-glider'
  },

  {
    loc: 'images/DIY/mousetrap.jpg',
    alt: 'Mouse Trap',
    title: 'Hackme Co. Mouse Trap',
    price: '$20.99',
    desc:
      'Staircase, slides, marbles, pulleys, bathtub,<br>  diving man, stopsign, and cage suspension <br> device sold seperately.'
  },

  {
    loc: 'images/DIY/rock.jpg',
    alt: 'Artificial Rock',
    title: 'Hackme Co. Artificial Rock',
    price: '$299.99',
    desc: 'If you cant be a star, you can still be a rock!'
  },

  {
    loc: 'images/DIY/rocketsled.jpg',
    alt: 'Rocket Sled',
    title: 'Hackme Co. Rocket Sled',
    price: '$599.99',
    desc: 'Now with no deer required!'
  },

  {
    loc: 'images/DIY/rubberband.jpg',
    alt: 'Giant Rubber Band',
    title: 'Hackme Co. Giant Rubber Band',
    price: '$10.99',
    desc: 'May or may not stop roadrunners'
  },

  {
    loc: 'images/DIY/tornado.jpg',
    alt: 'Tornado Kit',
    title: 'Hackme Co. Tornado Kit',
    price: '$11.99',
    desc: 'Impress your friends, makes a good party trick!'
  }
];
var menSel = 'neutral'; // eslint-disable-line no-unused-vars
var cart = [];
function cartPusher(id, itemsel) {
  // eslint-disable-line no-unused-vars
  var dropRoot = document.querySelector('.dropdown-menu');
  dropRoot.innerHTML = ' ';
  var item;
  var image;
  var divider;
  var deschold;
  var x;
  if (itemsel === 'DIY') {
    cart.push(images_DIY[id]);
  }
  if (itemsel === 'Pills') {
    cart.push(images_Pills[id]);
  }
  if (itemsel === 'Essentials') {
    cart.push(images_essent[id]);
  }

  if (itemsel === 'Bait') {
    cart.push(images_bait[id]);
  }
  if (itemsel === 'Gadgets') {
    cart.push(images_Gadgets[id]);
  }
  for (x of cart) {
    item = document.createElement('li');
    image = document.createElement('img');
    divider = document.createElement('li');
    divider.setAttribute('class', 'divider');
    deschold = document.createElement('span');
    deschold.setAttribute('id', 'descriptionholder');
    var contentTitle = x.title;
    var contentPrice = x.price;
    var con = contentTitle.concat(' ||| ');
    con = con.concat(contentPrice);
    console.log(x.title);
    deschold.innerHTML = con;

    //actual code
    image.src = x.loc;
    image.setAttribute('width', '100');
    image.setAttribute('height', '100');
    item.appendChild(image);
    item.appendChild(deschold);
    dropRoot.appendChild(item);
    dropRoot.appendChild(divider);
  }
}

function gridConstruct(imgset) {
  var rootgrid = document.querySelector('.gridContain');
  var rowOne = document.createElement('div');
  var rowTwo = document.createElement('div');
  var rowThree = document.createElement('div');
  var divCont;
  var imgCont;
  var modalHelp;
  var x;
  rowOne.setAttribute('class', 'row');
  rowTwo.setAttribute('class', 'row');
  rowThree.setAttribute('class', 'row');
  var i = 1;
  rootgrid.appendChild(document.createElement('br'));
  rootgrid.appendChild(document.createElement('br'));
  rootgrid.appendChild(document.createElement('br'));
  for (x of imgset) {
    if (i <= 3) {
      divCont = document.createElement('div');
      imgCont = document.createElement('img');
      divCont.setAttribute('class', 'col-sm-2');
      imgCont.setAttribute('src', x.loc);
      imgCont.setAttribute('alt', x.alt);
      imgCont.setAttribute('title', x.title);
      imgCont.width = 300;
      imgCont.setAttribute('height', '300');
      divCont.setAttribute('id', i - 1);
      divCont.setAttribute('onclick', 'modalLoader(id, menSel)');
      modalHelp = document.createElement('a');
      modalHelp.setAttribute('href', '#');
      modalHelp.setAttribute('data-toggle', 'modal');
      modalHelp.setAttribute('data-target', '#itemModal');
      modalHelp.appendChild(imgCont);
      divCont.appendChild(modalHelp);
      rowOne.appendChild(divCont);
      rootgrid.appendChild(rowOne);
    } else if (i > 3 && i <= 6) {
      divCont = document.createElement('div');
      imgCont = document.createElement('img');
      divCont.setAttribute('class', 'col-sm-2');
      imgCont.setAttribute('src', x.loc);
      imgCont.setAttribute('alt', x.alt);
      imgCont.setAttribute('title', x.title);
      imgCont.width = 300;
      imgCont.setAttribute('height', '300');
      divCont.setAttribute('id', i - 1);
      divCont.setAttribute('onclick', 'modalLoader(id, menSel)');
      modalHelp = document.createElement('a');
      modalHelp.setAttribute('href', '#');
      modalHelp.setAttribute('data-toggle', 'modal');
      modalHelp.setAttribute('data-target', '#itemModal');
      modalHelp.appendChild(imgCont);
      divCont.appendChild(modalHelp);
      rowTwo.appendChild(divCont);
      rootgrid.appendChild(rowTwo);
    } else if (i > 6 && i <= 9) {
      divCont = document.createElement('div');
      imgCont = document.createElement('img');
      divCont.setAttribute('class', 'col-sm-2');
      imgCont.setAttribute('src', x.loc);
      imgCont.setAttribute('title', x.title);
      imgCont.width = 300;
      imgCont.setAttribute('height', '300');
      divCont.setAttribute('id', i - 1);
      divCont.setAttribute('onclick', 'modalLoader(id, menSel)');

      modalHelp = document.createElement('a');
      modalHelp.setAttribute('href', '#');
      modalHelp.setAttribute('data-toggle', 'modal');
      modalHelp.setAttribute('data-target', '#itemModal');
      modalHelp.appendChild(imgCont);
      divCont.appendChild(modalHelp);
      rowThree.appendChild(divCont);
      rootgrid.appendChild(rowThree);
    }
    if (i === 3) {
      rootgrid.appendChild(document.createElement('br'));
    }
    if (i === 6) {
      rootgrid.appendChild(document.createElement('br'));
    }
    i++;
  }
}
function gridTeardown() {
  document.querySelector('.gridContain').innerHTML = ' ';
}

function modalLoader(idSel, opt) {
  // eslint-disable-line no-unused-vars
  console.log(idSel);
  console.log(opt);
  var price;
  var description;
  var titleholder;
  var itemImg;
  document.querySelector('.modal-header').innerHTML = ' ';
  document.querySelector('.modal-body').innerHTML = ' ';
  if (opt === 'DIY') {
    price = images_DIY[idSel].price;
    description = images_DIY[idSel].desc;
    titleholder = images_DIY[idSel].title;
    itemImg = images_DIY[idSel].loc;
  }
  if (opt === 'Pills') {
    price = images_Pills[idSel].price;
    description = images_Pills[idSel].desc;
    titleholder = images_Pills[idSel].title;
    itemImg = images_Pills[idSel].loc;
  }
  if (opt === 'Essentials') {
    price = images_essent[idSel].price;
    description = images_essent[idSel].desc;
    titleholder = images_essent[idSel].title;
    itemImg = images_essent[idSel].loc;
  }
  if (opt === 'Bait') {
    price = images_bait[idSel].price;
    description = images_bait[idSel].desc;
    titleholder = images_bait[idSel].title;
    itemImg = images_bait[idSel].loc;
  }
  if (opt === 'Gadgets') {
    price = images_Gadgets[idSel].price;
    description = images_Gadgets[idSel].desc;
    titleholder = images_Gadgets[idSel].title;
    itemImg = images_Gadgets[idSel].loc;
  }

  var imgitself = document.createElement('img');
  var modalRow = document.createElement('div'); //modal row
  var imgContain = document.createElement('div');
  var descContain = document.createElement('div');
  var headerContent = document.createElement('h4');
  var buttonadd = document.createElement('button');
  var lineone = document.createElement('p');
  var parbreak = document.createElement('br');
  var linetwo = document.createElement('p');
  buttonadd.setAttribute('id', idSel);
  buttonadd.setAttribute('class', 'btn btn-danger');
  buttonadd.setAttribute('onclick', 'cartPusher(id, menSel)');
  buttonadd.innerHTML = 'Add To Cart';
  //construction begins of modal
  //header
  headerContent.setAttribute('class', 'modal-title');
  headerContent.innerHTML = titleholder;
  document.querySelector('.modal-header').appendChild(headerContent);
  //body construct
  modalRow.setAttribute('class', 'row');
  modalRow.setAttribute('id', 'modaltextcont');
  //image setup
  imgContain.setAttribute('class', 'col-sm-3');
  imgitself.setAttribute('src', itemImg);
  imgitself.width = 300;
  imgitself.height = 300;
  imgitself.setAttribute('id', 'modalImage');
  imgContain.appendChild(imgitself);
  //desc setup
  descContain.setAttribute('class', 'col-sm-5');

  lineone.innerHTML = description;
  linetwo.innerHTML = price;
  descContain.appendChild(lineone);
  descContain.appendChild(parbreak);
  descContain.appendChild(linetwo);
  descContain.appendChild(parbreak);
  descContain.appendChild(buttonadd);
  descContain.setAttribute('id', 'descCont');
  imgContain.setAttribute('id', 'imgCont');
  //wrapup
  modalRow.appendChild(imgContain);
  modalRow.appendChild(descContain);
  document.querySelector('.modal-body').appendChild(modalRow);
}
window.onload = function() {
  this.menSel = 'DIY';
  gridConstruct(images_DIY);

  document.querySelector('.DIY').addEventListener('click', function() {
    menSel = 'DIY';
    gridTeardown();
    gridConstruct(images_DIY);
  });

  document.querySelector('.Gadgets').addEventListener('click', function() {
    menSel = 'Gadgets';
    gridTeardown();
    gridConstruct(images_Gadgets);
  });

  document.querySelector('.Pills').addEventListener('click', function() {
    menSel = 'Pills';
    gridTeardown();
    gridConstruct(images_Pills);
  });

  document.querySelector('.Essentials').addEventListener('click', function() {
    menSel = 'Essentials';
    gridTeardown();
    gridConstruct(images_essent);
  });

  document.querySelector('.Bait').addEventListener('click', function() {
    menSel = 'Bait';
    gridTeardown();
    gridConstruct(images_bait);
  });
};
