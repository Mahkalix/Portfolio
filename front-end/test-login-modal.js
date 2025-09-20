// Test du LoginModal front-end
const API_URL = "https://portfolio-q8zw.onrender.com"; // Votre serveur Vercel

async function testLoginModal() {
  console.log('=== TEST LOGIN MODAL FRONT-END ===');
  console.log('🎯 API URL:', API_URL);
  console.log('');

  // Simuler la requête que fait le LoginModal
  console.log('🔐 Test de connexion avec les identifiants admin...');
  console.log('   Username: admin');
  console.log('   Password: mmiteachers');
  console.log('');

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        username: 'admin', 
        password: 'mmiteachers' 
      }),
    });

    console.log('📡 Statut de la réponse:', response.status, response.statusText);
    
    const data = await response.json();
    console.log('📋 Données reçues:', data);
    console.log('');

    if (response.ok) {
      console.log('✅ LOGIN RÉUSSI !');
      console.log('🎫 Token JWT reçu:', data.token);
      console.log('');
      console.log('🎉 Le LoginModal devrait fonctionner parfaitement !');
      console.log('');
      console.log('📝 Étapes suivantes :');
      console.log('   1. Ouvrez http://localhost:3000');
      console.log('   2. Cliquez sur l\'icône compte (👤)');
      console.log('   3. Saisissez admin / mmiteachers');
      console.log('   4. Vous devriez être redirigé vers /admin');
      
      // Test de stockage du token (simulation)
      console.log('');
      console.log('💾 Simulation localStorage...');
      console.log('   localStorage.setItem("token", "' + data.token + '")');
      console.log('   window.location.href = "/admin"');
      
    } else {
      console.log('❌ ÉCHEC DE LA CONNEXION');
      console.log('🚨 Erreur:', data.error || 'Erreur inconnue');
      console.log('');
      console.log('💡 Problèmes possibles :');
      console.log('   1. L\'admin n\'existe pas sur le serveur distant');
      console.log('   2. Mot de passe incorrect');
      console.log('   3. Problème de réseau');
      console.log('   4. Le serveur Vercel n\'est pas à jour');
    }

  } catch (error) {
    console.error('❌ ERREUR DE CONNEXION');
    console.error('🔌 Détails:', error.message);
    console.log('');
    console.log('💡 Solutions possibles :');
    console.log('   1. Vérifiez votre connexion internet');
    console.log('   2. Le serveur Vercel peut être en cours de redémarrage');
    console.log('   3. L\'URL API est peut-être incorrecte');
  }
}

// Test des headers et de la configuration CORS
async function testCORS() {
  console.log('🌐 Test CORS depuis le front-end...');
  try {
    const response = await fetch(`${API_URL}/api/test`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ CORS OK - API accessible:', data.message);
    } else {
      console.log('⚠️  CORS Warning - Status:', response.status);
    }
  } catch (error) {
    console.log('❌ CORS Error:', error.message);
  }
  console.log('');
}

async function main() {
  await testCORS();
  await testLoginModal();
  
  console.log('');
  console.log('🔧 Debug Info:');
  console.log('   - Front-end: http://localhost:3000');
  console.log('   - Backend API:', API_URL);
  console.log('   - Database: Neon PostgreSQL');
  console.log('   - Deployment: Vercel');
}

main();
