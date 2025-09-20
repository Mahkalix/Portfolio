// Script simple pour tester l'ajout de données via l'API
const projects = [
  {
    id: 'portfolio2025',
    title: 'Portfolio Personnel',
    description: 'Un portfolio moderne développé avec React.js et Node.js, utilisant PostgreSQL avec Prisma ORM.',
    year: 2025,
    use: 'Développement web full-stack',
    visit: 'https://mahkalix-portfolio.netlify.app',
    view: 'https://github.com/Mahkalix/Portfolio',
    cover: '/images/portfolio-cover.jpg',
    tools: ['React.js', 'Node.js', 'PostgreSQL', 'Prisma', 'SCSS'],
    category: 'Web Development'
  }
];

console.log('📋 Données de projet exemple :');
console.log(JSON.stringify(projects[0], null, 2));
console.log('\n🌐 Pour tester l\'API :');
console.log('1. Allez sur http://localhost:3001/api/test');
console.log('2. Utilisez Prisma Studio sur http://localhost:5555');
console.log('3. Ou ajoutez les projets manuellement via l\'interface admin de votre frontend');
