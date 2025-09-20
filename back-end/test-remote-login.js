const API_URL = "https://portfolio-q8zw.onrender.com";

async function testRemoteLogin() {
  console.log('=== TEST DE CONNEXION SERVEUR DISTANT ===');
  console.log('');
  console.log('🔍 Test avec les identifiants existants...');
  
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

    const data = await response.json();

    if (response.ok) {
      console.log('✅ LOGIN RÉUSSI ! Token reçu:', data.token);
      console.log('');
      console.log('🎉 Vous pouvez maintenant vous connecter avec :');
      console.log('   Username: admin');
      console.log('   Password: mmiteachers');
    } else {
      console.log('❌ Login échoué:', data.error);
      console.log('');
      console.log('💡 Solutions possibles :');
      console.log('   1. L\'admin n\'existe pas encore sur le serveur distant');
      console.log('   2. Les identifiants sont différents');
      console.log('   3. Il y a un problème avec la base de données distante');
    }

  } catch (error) {
    console.error('❌ Erreur de connexion:', error.message);
    console.log('');
    console.log('💡 Le serveur distant est peut-être en cours de démarrage...');
  }
}

async function testAPI() {
  console.log('🔍 Test de l\'API distante...');
  try {
    const response = await fetch(`${API_URL}/api/test`);
    if (response.ok) {
      const data = await response.json();
      console.log('✅ API accessible:', data.message);
      return true;
    }
  } catch (error) {
    console.log('⚠️  API non accessible, serveur peut-être en démarrage...');
  }
  return false;
}

async function main() {
  await testAPI();
  console.log('');
  await testRemoteLogin();
}

main();
