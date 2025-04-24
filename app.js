let pronoun = ['il', 'ilnostro', 'ilmio'];
let adj = ['fantasmagorico', 'magico', 'sorprendente'];
let noun = ['procione', 'gatto', 'cane'];
let dom = ['com', 'it', 'es'];


    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < adj.length; k++) {
          for (let l = 0; l < adj.length; l++) {
            console.log(pronoun[i] + adj[j] + noun[k] + '.' + dom[l]);
          }
        }
      }
    }
    let domainHacks = [
        { name: 'labellagat', ext: '.ta' },
        { name: 'iltimidoto', ext: '.po' }
    ];
    
  
    console.log("\nDomain hacks:");
    domainHacks.forEach(hack => {
        console.log(hack.name + hack.ext); 
    });
    
    
    