var classNum = 101
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
$(document).ready(function () {
  $('#but').click()
})
$('#but').click(function () {
  $.get('/api/events/', function (data) {
    $('#chegou').html('')
    for (var i = 0; i < data.length; i++) {
      var edit = '<a href="#" class="edit" data-idb="' + data[i]._id + '"> <i class="fa fa-pencil-square-o"></i></a>'
      var deletes = '<a href="#" class="delete" data-idb="' + data[i]._id + '" data-nome="' + data[i].nome + '"> <i class="fa fa-trash"></i></a>'
      $('#chegou').append('<tr><td>' + data[i].nome + '</td><td>' + data[i].data_inicio + '</td><td>' + data[i].data_fim + '</td><td>' + data[i].data_limite + '</td><td>' + data[i].extensao + '</td><td>' + data[i].pesquisa + '</td><td>' + data[i].ensino + '</td><td>' + edit + deletes + '</td></tr>')
    }
  })
})

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
$('#number').click(function () {
  $('#get-turma').modal('show')
})
$('#send-class').click(function () {
  classNum = $('#input-class').val()
  $('#number').html('Turma ' + classNum)
  $('#get-turma').modal('hide')
  $('#but').click()
})
$('#turma').click(function () {
  $.get('/api/class', function (data) {
    classNum = data.value
    $('#number').html('Turma: ' + classNum)
    $('#but').click()
  })
})
