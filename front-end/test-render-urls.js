// Test avec différentes URLs possibles
const POSSIBLE_URLS = [
  "https://portfolio-q8zw.onrender.com",
  "https://portfolio-back-end.onrender.com", 
  "https://portfolio-api.onrender.com",
  "https://portfolio-backend.onrender.com"
];

async function testMultipleURLs() {
  console.log('🔍 Test de différentes URLs Render...');
  console.log('');

  for (const url of POSSIBLE_URLS) {
    console.log(`🌐 Test: ${url}`);
    
    try {
      // Test de l'API test
      const testResponse = await fetch(`${url}/api/test`, {
        method: 'GET',
        signal: AbortSignal.timeout(5000) // Timeout de 5 secondes
      });
      
      if (testResponse.ok) {
        const testData = await testResponse.json();
        console.log(`  ✅ API Test OK: ${testData.message}`);
        
        // Test du login
        const loginResponse = await fetch(`${url}/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: 'admin', password: 'mmiteachers' }),
          signal: AbortSignal.timeout(5000)
        });
        
        const loginData = await loginResponse.json();
        
        if (loginResponse.ok) {
          console.log(`  🎉 LOGIN RÉUSSI ! Token: ${loginData.token.substring(0, 20)}...`);
          console.log(`  🎯 URL CORRECTE: ${url}`);
          console.log('');
          console.log('📝 Mettez à jour votre LoginModal.jsx avec cette URL :');
          console.log(`     const API_URL = "${url}";`);
          return url;
        } else {
          console.log(`  ❌ Login échoué: ${loginData.error}`);
        }
        
      } else {
        console.log(`  ❌ API Test échoué: ${testResponse.status}`);
      }
      
    } catch (error) {
      console.log(`  ⏰ Timeout ou erreur: ${error.message}`);
    }
    
    console.log('');
  }
  
  console.log('❌ Aucune URL ne fonctionne correctement');
  return null;
}

async function checkCurrentURL() {
  const currentURL = "https://portfolio-q8zw.onrender.com";
  console.log('🔍 Vérification détaillée de l\'URL actuelle...');
  console.log(`🌐 URL: ${currentURL}`);
  console.log('');
  
  try {
    // Vérifier les routes disponibles
    const routes = ['/api/test', '/login', '/api/projects', '/'];
    
    for (const route of routes) {
      try {
        const response = await fetch(`${currentURL}${route}`, {
          method: 'GET',
          signal: AbortSignal.timeout(3000)
        });
        console.log(`  ${route}: ${response.status} ${response.statusText}`);
      } catch (error) {
        console.log(`  ${route}: ❌ ${error.message}`);
      }
    }
    
  } catch (error) {
    console.log(`❌ Erreur générale: ${error.message}`);
  }
}

async function main() {
  console.log('=== DIAGNOSTIC URL RENDER ===');
  console.log('');
  
  await checkCurrentURL();
  console.log('');
  
  const workingURL = await testMultipleURLs();
  
  if (!workingURL) {
    console.log('');
    console.log('💡 Solutions possibles :');
    console.log('   1. Redéployer le code sur Render');
    console.log('   2. Vérifier que le service Render est actif');
    console.log('   3. Créer l\'admin directement dans Neon SQL console');
    console.log('   4. Vérifier les variables d\'environnement sur Render');
  }
}

main();
