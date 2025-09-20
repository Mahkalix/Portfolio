const API_URL = "https://portfolio-q8zw.onrender.com";

async function createAdminRemote() {
  try {
    console.log('🚀 Création de l\'admin sur le serveur distant...');
    
    const response = await fetch(`${API_URL}/api/create-admin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const data = await response.json();

    if (response.ok) {
      console.log('✅ Admin créé avec succès sur le serveur distant !');
      console.log('📋 Détails:', data);
      console.log('');
      console.log('🔑 Identifiants de connexion :');
      console.log('   Username: admin');
      console.log('   Password: mmiteachers');
    } else {
      console.log('⚠️  Réponse du serveur:', data);
    }

  } catch (error) {
    console.error('❌ Erreur lors de la création de l\'admin:', error);
  }
}

// Test de la connexion API d'abord
async function testAPI() {
  try {
    console.log('🔍 Test de connexion au serveur distant...');
    const response = await fetch(`${API_URL}/api/test`);
    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ Serveur distant accessible !');
      console.log('📡 Réponse:', data.message);
      return true;
    } else {
      console.log('❌ Problème avec le serveur distant');
      return false;
    }
  } catch (error) {
    console.error('❌ Impossible de se connecter au serveur distant:', error.message);
    return false;
  }
}

async function main() {
  console.log('=== CRÉATION ADMIN SERVEUR DISTANT ===');
  console.log('');
  
  const isAPIReachable = await testAPI();
  console.log('');
  
  if (isAPIReachable) {
    await createAdminRemote();
  } else {
    console.log('❌ Impossible de continuer, serveur distant non accessible');
  }
}

main();
