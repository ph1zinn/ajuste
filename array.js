//C= create
//R= read
//U= update
//D= delete
// Unshift adicionar  elemento no final do array
// Shift adionar elemento no começo do array

const minhaMesa = ['João', 'Felipe', 'Bernardo', 'Pedro'];

console.log(`---------------------------------------------------------------------\n`);
console.log(`Meu nome é ${minhaMesa[3]}, Meus colegas são ${minhaMesa[0]}, ${minhaMesa[1]} e ${minhaMesa[2]}. `);
console.log(`\n---------------------------------------------------------------------`);

minhaMesa.push("Luana");

console.log("\n",minhaMesa);

minhaMesa.shift();

console.log("\n",minhaMesa);

minhaMesa.splice(1,1);

console.log("\n",minhaMesa)

console.log("\n---------------------------------------------------")