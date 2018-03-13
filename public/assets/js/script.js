$(document).ready(function () {
  var currentdate = new Date()
  var datetime = currentdate.getHours() + ':' + currentdate.getMinutes() + ':' + currentdate.getSeconds()
  $('#time_updated').html(datetime)
  $('#but').click()
})
$('#but').click(function () {
  $.get('/api/events/', function (data) {
    // $('#chegou').html('')
    // for (var i = 0; i < data.length; i++) {
    //   console.log(i)
    //   var edit = '<a href="#" class="edit" data-idb="' + data[i]._id + '"> <i class="fa fa-pencil-square-o"></i></a>'
    //   var deletes = '<a href="#" class="delete" data-idb="' + data[i]._id + '" data-nome="' + data[i].nome + '"> <i class="fa fa-times"></i></a>'
    //   $('#chegou').append('<tr><td>' + data[i].nome + '</td><td>' + data[i].data_inicio + '</td><td>' + data[i].data_fim + '</td><td>' + data[i].data_limite + '</td><td>' + data[i].extensionista_extensao + '</td> <td>' + data[i].extensionista_pesquisa + '</td> <td>' + data[i].extensionista_ensino + '</td>  <td>' + data[i].pesquisador_extensao + '</td> <td>' + data[i].pesquisador_pesquisa + '</td> <td>' + data[i].pesquisador_ensino + '</td><td>' + data[i].professor_extensao + '</td> <td>' + data[i].professor_pesquisa + '</td> <td>' + data[i].professor_ensino + '</td><td>' + edit + deletes + '</td></tr>')
    // }
    console.log(data)
    $('#accordion').html('')
    for (var i = 0; i < data.length; i++) {
      
      var deletes = '<a href="#" class="delete link-danger" data-idb="' + data[i]._id + '" data-nome="' + data[i].nome + '"> <i class="fa fa-times"></i></a>'
      var component = $('#event-template').html()
      component = component.split('{$evento}').join(data[i].nome)
      component = component.split('{$index}').join(i)
      component = component.split('{$delete}').join(deletes)
      component = component.split('{$inicio}').join(data[i].data_inicio)
      component = component.split('{$fim}').join(data[i].data_fim)
      component = component.split('{$periodo}').join(data[i].data_limite)
      
      component = component.split('{$ext-ext}').join(data[i].extensionista_extensao)
      component = component.split('{$ext-ens}').join(data[i].extensionista_ensino)
      component = component.split('{$ext-pes}').join(data[i].extensionista_pesquisa)

      component = component.split('{$ens-ext}').join(data[i].extensionista_extensao)
      component = component.split('{$ens-ens}').join(data[i].extensionista_ensino)
      component = component.split('{$ens-pes}').join(data[i].extensionista_pesquisa)

      component = component.split('{$pes-ext}').join(data[i].extensionista_extensao)
      component = component.split('{$pes-ens}').join(data[i].extensionista_ensino)
      component = component.split('{$pes-pes}').join(data[i].extensionista_pesquisa)
      $('#accordion').append(component)
    }
  })
})
function deleteit (id) {
  console.log('on delete before ajax' + id)
  $.ajax({
    url: '/api/events/' + id,
    dataType: 'text',
    type: 'delete',
    contentType: 'application/x-www-form-urlencoded',
    success: function (data, textStatus, jQxhr) {
      $('#delete').modal('hide')
      $('#but').click()
    },
    error: function (jqXhr, textStatus, errorThrown) {
      $('#delete').modal('hide')
      alert('Error: ' + errorThrown)
    }
  })
}
$(document).on('click', '.edit', function (event) {
  event.preventDefault()
  $('#myModal').modal('show')
  console.log('abcd')
  console.log($(this).data('idb'))
})
$(document).on('click', '.delete', function (event) {
  event.preventDefault()
  $('#delete-body').html('Deseja realmente apagar ' + $(this).data('nome') + '?')
  $('#delete-header').html('Apagar ' + $(this).data('nome'))
  var idf = $(this).data('idb')
  console.log(idf + 'delete click')
  $('#delete-sim').click(function () {
    deleteit(idf)
  })
  $('#delete').modal('show')
})

