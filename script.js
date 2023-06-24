document.addEventListener('DOMContentLoaded', function() {
    var requestRideButton = document.getElementById('request-ride');
  
    requestRideButton.addEventListener('click', function() {
      var currentLocation = document.getElementById('current-location').value;
      var destination = document.getElementById('destination').value;
  
      // Aqui você pode adicionar a lógica para solicitar uma corrida ao serviço de transporte
      // e lidar com a resposta recebida.
      // Por exemplo, você pode exibir uma mensagem de sucesso ou erro para o usuário.
    });
  });
  