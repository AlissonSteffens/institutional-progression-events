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
      $('#chegou').append('<tr><td>' + data[i].nome + '</td><td>' + data[i].data_inicio + '</td><td>' + data[i].data_fim + '</td><td>' + data[i].data_limite + '</td><td>' + data[i].extensionista_extensao + '</td> <td>' + data[i].extensionista_pesquisa + '</td> <td>' + data[i].extensionista_ensino + '</td>  <td>' + data[i].pesquisador_extensao + '</td> <td>' + data[i].pesquisador_pesquisa + '</td> <td>' + data[i].pesquisador_ensino + '</td><td>' + data[i].professor_extensao + '</td> <td>' + data[i].professor_pesquisa + '</td> <td>' + data[i].professor_ensino + '</td><td>' + edit + deletes + '</td></tr>')
    }
  })
})

$(function () {
  $('#inicio').datetimepicker({
    format: 'L'
  })
  $('#fim').datetimepicker({
    format: 'L'
  })
  $('#limite').datetimepicker({
    format: 'L'
  })
})

$(document).on('click', '#criar', function (event) {
  event.preventDefault()
  $('#criate').modal('show')
  console.log('abcd')
  console.log($(this).data('idb'))
})

function addUser(event) {
  // user vars
  let usernameField = $('#username-field')
  let username = usernameField.val()
  // nanana vars
  $.ajax({
    url: '/api/events',
    dataType: 'text',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded',
    data: 'name=' + username,
    success: function (data, textStatus, jQxhr) {
    },
    error: function (jqXhr, textStatus, errorThrown) {
      alert('Error: ' + errorThrown)
    }
  })

  event.preventDefault()
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
